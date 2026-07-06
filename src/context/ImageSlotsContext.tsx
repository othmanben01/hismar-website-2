"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface SlotPreferences {
  fit: "cover" | "contain" | "fill";
  pos: string; // e.g., "50% 50%"
  scale?: number;
}

export interface SlotData {
  src?: string;
  fit?: "cover" | "contain" | "fill";
  pos?: string;
  scale?: number;
}

export interface SlotRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface ImageSlotsContextProps {
  slots: Record<string, SlotData>;
  activeSlotId: string | null;
  activeSlotRect: SlotRect | null;
  setActiveSlot: (id: string | null, rect?: DOMRect | null) => void;
  updateSlotImage: (id: string, base64Src: string) => Promise<void>;
  updateSlotPrefs: (id: string, prefs: Partial<SlotPreferences>) => Promise<void>;
  clearSlot: (id: string) => Promise<void>;
  loadAllSlots: () => void;
}

const ImageSlotsContext = createContext<ImageSlotsContextProps | undefined>(undefined);

const LS_IMG_PREFIX = "hismar_img_";
const LS_PREF_PREFIX = "hismar_pref_";

interface ImageSlotsProviderProps {
  initialSlots?: Record<string, SlotData>;
  children: React.ReactNode;
}

export const ImageSlotsProvider: React.FC<ImageSlotsProviderProps> = ({
  initialSlots = {},
  children,
}) => {
  const [slots, setSlots] = useState<Record<string, SlotData>>(initialSlots);
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);
  const [activeSlotRect, setActiveSlotRect] = useState<SlotRect | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Helper to load a specific slot's data from localStorage
  const loadSlotFromStorage = useCallback((id: string): SlotData => {
    try {
      const storedImg = localStorage.getItem(`${LS_IMG_PREFIX}${id}`);
      const storedPref = localStorage.getItem(`${LS_PREF_PREFIX}${id}`);
      
      const imgData = storedImg ? JSON.parse(storedImg) : null;
      const prefData = storedPref ? JSON.parse(storedPref) : null;

      return {
        src: imgData?.src || undefined,
        fit: prefData?.fit || "cover",
        pos: prefData?.pos || "50% 50%",
        scale: prefData?.scale || 1,
      };
    } catch (e) {
      console.warn(`Error reading slot ${id} from storage:`, e);
      return { fit: "cover", pos: "50% 50%" };
    }
  }, []);

  // Fetch all existing slots on mount and merge with server-sent initialSlots
  useEffect(() => {
    setIsMounted(true);
    
    const loadedSlots: Record<string, SlotData> = { ...initialSlots };
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(LS_IMG_PREFIX)) {
          const id = key.substring(LS_IMG_PREFIX.length);
          const storedImg = localStorage.getItem(`${LS_IMG_PREFIX}${id}`);
          const storedPref = localStorage.getItem(`${LS_PREF_PREFIX}${id}`);
          
          const imgData = storedImg ? JSON.parse(storedImg) : null;
          const prefData = storedPref ? JSON.parse(storedPref) : null;

          if (imgData?.src) {
            loadedSlots[id] = {
              src: imgData.src,
              fit: prefData?.fit || loadedSlots[id]?.fit || "cover",
              pos: prefData?.pos || loadedSlots[id]?.pos || "50% 50%",
              scale: prefData?.scale || loadedSlots[id]?.scale || 1,
            };
          }
        }
      }
      setSlots(loadedSlots);
    } catch (e) {
      console.warn("Error scanning localStorage for Hismar slots:", e);
    }
  }, [initialSlots]);

  const loadAllSlots = useCallback(() => {
    const loadedSlots: Record<string, SlotData> = {};
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(LS_IMG_PREFIX)) {
          const id = key.substring(LS_IMG_PREFIX.length);
          loadedSlots[id] = loadSlotFromStorage(id);
        }
      }
      setSlots((prev) => ({ ...prev, ...loadedSlots }));
    } catch (e) {
      console.error("Error batch loading slots:", e);
    }
  }, [loadSlotFromStorage]);

  // Hook into print events to load all images instantly
  useEffect(() => {
    if (!isMounted) return;
    window.addEventListener("beforeprint", loadAllSlots);
    return () => {
      window.removeEventListener("beforeprint", loadAllSlots);
    };
  }, [isMounted, loadAllSlots]);

  // Set the hovered active slot
  const setActiveSlot = useCallback((id: string | null, rect?: DOMRect | null) => {
    setActiveSlotId(id);
    if (rect) {
      setActiveSlotRect({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      });
    } else {
      setActiveSlotRect(null);
    }
  }, []);

  // Save base64 image src to local state, localStorage, and server public directory
  const updateSlotImage = useCallback(async (id: string, base64Src: string) => {
    // 1. Instantly update client state with base64 for real-time responsiveness
    setSlots((prev) => {
      const current = prev[id] || { fit: "cover", pos: "50% 50%" };
      return {
        ...prev,
        [id]: {
          ...current,
          src: base64Src,
        },
      };
    });

    // 2. Save in localStorage as local fallback
    try {
      localStorage.setItem(`${LS_IMG_PREFIX}${id}`, JSON.stringify({ src: base64Src }));
    } catch (e) {
      console.warn("Storage write failed:", e);
    }

    // 3. Upload to server to persist permanently in project files
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, base64Data: base64Src }),
      });
      
      if (!res.ok) {
        throw new Error(`Upload endpoint responded with status ${res.status}`);
      }
      
      const data = await res.json();
      if (data.success && data.slot) {
        // Swap base64 with the static URL path (/uploads/[id].jpg) to keep memory lightweight
        setSlots((prev) => ({
          ...prev,
          [id]: {
            ...prev[id],
            src: data.slot.src,
          },
        }));
        
        // Update local storage to also point to the static file URL, reducing storage footprints
        try {
          localStorage.setItem(`${LS_IMG_PREFIX}${id}`, JSON.stringify({ src: data.slot.src }));
        } catch (e) {}
      }
    } catch (e) {
      console.error("Failed to write image file to project server:", e);
    }
  }, []);

  // Save fit and position preferences to local state, localStorage, and server slots-config.json
  const updateSlotPrefs = useCallback(async (id: string, prefs: Partial<SlotPreferences>) => {
    // 1. Update React state
    setSlots((prev) => {
      const current = prev[id] || { src: undefined };
      const newPrefs = {
        fit: prefs.fit || current.fit || "cover",
        pos: prefs.pos || current.pos || "50% 50%",
        scale: prefs.scale !== undefined ? prefs.scale : (current.scale || 1),
      };
      return {
        ...prev,
        [id]: {
          ...current,
          ...newPrefs,
        },
      };
    });

    // 2. Save to localStorage
    try {
      const currentPrefsKey = `${LS_PREF_PREFIX}${id}`;
      const storedPref = localStorage.getItem(currentPrefsKey);
      const currentPrefs = storedPref ? JSON.parse(storedPref) : { fit: "cover", pos: "50% 50%" };
      
      const newPrefs = { ...currentPrefs, ...prefs };
      localStorage.setItem(currentPrefsKey, JSON.stringify(newPrefs));
    } catch (e) {
      console.warn("Storage write failed for preferences:", e);
    }

    // 3. Save to server slots-config.json file
    try {
      await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...prefs }),
      });
    } catch (e) {
      console.error("Failed to write preferences to project server:", e);
    }
  }, []);

  // Clear a slot completely (React state, localStorage, and delete server file)
  const clearSlot = useCallback(async (id: string) => {
    // 1. Update React state
    setSlots((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });

    // 2. Delete from localStorage
    try {
      localStorage.removeItem(`${LS_IMG_PREFIX}${id}`);
      localStorage.removeItem(`${LS_PREF_PREFIX}${id}`);
    } catch (e) {
      console.warn(`Error deleting slot ${id} locally:`, e);
    }

    if (activeSlotId === id) {
      setActiveSlot(null);
    }

    // 3. Delete file and config entry on server
    try {
      await fetch("/api/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    } catch (e) {
      console.error("Failed to delete project asset on server:", e);
    }
  }, [activeSlotId, setActiveSlot]);

  return (
    <ImageSlotsContext.Provider
      value={{
        slots: isMounted ? slots : initialSlots, // Hydration safety
        activeSlotId,
        activeSlotRect,
        setActiveSlot,
        updateSlotImage,
        updateSlotPrefs,
        clearSlot,
        loadAllSlots,
      }}
    >
      {children}
    </ImageSlotsContext.Provider>
  );
};

export const useImageSlots = () => {
  const context = useContext(ImageSlotsContext);
  if (context === undefined) {
    throw new Error("useImageSlots must be used within an ImageSlotsProvider");
  }
  return context;
};
