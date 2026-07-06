"use client";

import React, { useRef, useState, useCallback } from "react";
import styles from "./ImageSlot.module.css";
import { useImageSlots } from "@/context/ImageSlotsContext";
import { compressImage } from "@/utils/image";

interface ImageSlotProps {
  id: string;
  defaultLabel: string;
  style?: React.CSSProperties;
  className?: string;
  objectFit?: React.CSSProperties["objectFit"];
  objectPosition?: React.CSSProperties["objectPosition"];
  imgStyle?: React.CSSProperties;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  id,
  defaultLabel,
  style = {},
  className = "",
  objectFit,
  objectPosition,
  imgStyle = {},
}) => {
  const { slots, setActiveSlot, updateSlotImage } = useImageSlots();
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);

  const slotData = slots[id];
  const hasImage = !!slotData?.src;

  const handleFile = useCallback(
    async (file: File) => {
      if (file && file.type.startsWith("image/")) {
        try {
          const compressed = await compressImage(file);
          updateSlotImage(id, compressed);
        } catch (err) {
          console.error("Failed to compress and save image:", err);
        }
      }
    },
    [id, updateSlotImage]
  );

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFile(file);
        e.target.value = "";
      }
    },
    [handleFile]
  );

  // Drag and Drop Handlers
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const file = e.dataTransfer.files?.[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  // Mouse Enter/Leave for Floating Controls
  const handleMouseEnter = useCallback(() => {
    if (hasImage && slotRef.current) {
      const rect = slotRef.current.getBoundingClientRect();
      setActiveSlot(id, rect);
    }
  }, [id, hasImage, setActiveSlot]);

  const handleMouseLeave = useCallback(() => {
    // We send a null target after a short delay so the panel can catch the mouse
    // If the panel mouseEnter fires, it will keep it active.
    setActiveSlot(null);
  }, [setActiveSlot]);

  // Combined styles for sizing
  const containerStyle: React.CSSProperties = {
    ...style,
    overflow: "hidden", // Ensures zoomed images don't spill out of the container
  };

  const combinedImageStyle: React.CSSProperties = hasImage
    ? {
        objectFit: objectFit || slotData.fit || "cover",
        objectPosition: objectPosition || slotData.pos || "50% 50%",
        transform: `scale(${slotData.scale ?? 1})`,
        ...imgStyle,
      }
    : {};

  return (
    <div
      ref={slotRef}
      id={id}
      style={containerStyle}
      className={`img-slot ${styles.slot} ${isDragOver ? styles.dragOver : ""} ${
        hasImage ? styles.filled : ""
      } ${className}`}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-filled={hasImage ? "1" : undefined}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className={styles.fileInput}
        aria-hidden="true"
      />

      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={slotData.src}
          alt={defaultLabel}
          style={combinedImageStyle}
          className={styles.image}
          draggable="false"
        />
      ) : (
        <div className={styles.placeholder}>
          <div className={styles.uploadIcon}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A8834A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            </svg>
          </div>
          <span className={styles.label}>{defaultLabel}</span>
        </div>
      )}
    </div>
  );
};
