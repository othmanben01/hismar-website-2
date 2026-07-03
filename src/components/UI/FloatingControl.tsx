"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./FloatingControl.module.css";
import { useImageSlots, SlotPreferences } from "@/context/ImageSlotsContext";

const GRID_ITEMS = [
  { symbol: "↖", value: "0% 0%" },
  { symbol: "↑", value: "50% 0%" },
  { symbol: "↗", value: "100% 0%" },
  { symbol: "←", value: "0% 50%" },
  { symbol: "●", value: "50% 50%" },
  { symbol: "→", value: "100% 50%" },
  { symbol: "↙", value: "0% 100%" },
  { symbol: "↓", value: "50% 100%" },
  { symbol: "↘", value: "100% 100%" },
];

export const FloatingControl: React.FC = () => {
  const {
    slots,
    activeSlotId,
    activeSlotRect,
    setActiveSlot,
    updateSlotPrefs,
    clearSlot,
  } = useImageSlots();

  const [visibleSlotId, setVisibleSlotId] = useState<string | null>(null);
  const [coords, setCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const panelRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const slotData = visibleSlotId ? slots[visibleSlotId] : null;
  const currentFit = slotData?.fit || "cover";
  const currentPos = slotData?.pos || "50% 50%";

  const stopHide = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const startHide = useCallback(() => {
    stopHide();
    if (isHoveredRef.current) return;
    
    hideTimerRef.current = setTimeout(() => {
      setVisibleSlotId(null);
      setActiveSlot(null);
    }, 800);
  }, [setActiveSlot, stopHide]);

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
    stopHide();
  }, [stopHide]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    startHide();
  }, [startHide]);

  // Sync visibility with global active slot
  useEffect(() => {
    if (activeSlotId) {
      stopHide();
      setVisibleSlotId(activeSlotId);
    } else {
      startHide();
    }
    return stopHide;
  }, [activeSlotId, stopHide, startHide]);

  // Re-calculate positioning when visible slot, rect, or window dimensions change
  useEffect(() => {
    if (visibleSlotId && activeSlotRect && panelRef.current) {
      const panel = panelRef.current;
      const panelHeight = panel.offsetHeight || 190;
      const panelWidth = panel.offsetWidth || 206;

      // Position top: above the slot, or below it if it overflows the viewport top
      let top = activeSlotRect.top - panelHeight - 12;
      const viewportScrollY = typeof window !== "undefined" ? window.scrollY : 0;
      if (top < viewportScrollY + 8) {
        top = activeSlotRect.top + activeSlotRect.height + 12;
      }

      // Position left: centered horizontally on the slot, clamped inside the viewport
      let left = activeSlotRect.left + activeSlotRect.width / 2 - panelWidth / 2;
      const viewportScrollX = typeof window !== "undefined" ? window.scrollX : 0;
      const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 800;
      
      left = Math.max(
        viewportScrollX + 8,
        Math.min(viewportScrollX + viewportWidth - panelWidth - 8, left)
      );

      setCoords({ top, left });
    }
  }, [visibleSlotId, activeSlotRect]);

  const handleFitChange = useCallback(
    (fit: SlotPreferences["fit"]) => {
      if (visibleSlotId) {
        updateSlotPrefs(visibleSlotId, { fit });
      }
    },
    [visibleSlotId, updateSlotPrefs]
  );

  const handlePosChange = useCallback(
    (pos: string) => {
      if (visibleSlotId) {
        updateSlotPrefs(visibleSlotId, { pos });
      }
    },
    [visibleSlotId, updateSlotPrefs]
  );

  const handleClear = useCallback(() => {
    if (visibleSlotId) {
      clearSlot(visibleSlotId);
    }
  }, [visibleSlotId, clearSlot]);

  if (!visibleSlotId || !slotData) return null;

  return (
    <div
      ref={panelRef}
      style={{ top: `${coords.top}px`, left: `${coords.left}px` }}
      className={styles.panel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sizing Options */}
      <div className={styles.section}>
        <span className={styles.label}>FIT</span>
        <div className={styles.buttonRow}>
          {(["cover", "contain", "fill"] as const).map((fit) => (
            <button
              key={fit}
              className={`${styles.btn} ${currentFit === fit ? styles.btnActive : ""}`}
              onMouseDown={(e) => {
                e.preventDefault();
                handleFitChange(fit);
              }}
            >
              {fit}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.separator} />

      {/* Alignment Grid Options */}
      <div className={styles.section}>
        <span className={styles.label}>POSITION</span>
        <div className={styles.grid}>
          {GRID_ITEMS.map((item) => (
            <button
              key={item.value}
              className={`${styles.gridBtn} ${currentPos === item.value ? styles.gridBtnActive : ""}`}
              onMouseDown={(e) => {
                e.preventDefault();
                handlePosChange(item.value);
              }}
            >
              {item.symbol}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.separator} />

      {/* Clear/Delete Image Option */}
      <button
        className={`${styles.btn} ${styles.btnClear}`}
        onMouseDown={(e) => {
          e.preventDefault();
          handleClear();
        }}
      >
        Supprimer la photo
      </button>
    </div>
  );
};
