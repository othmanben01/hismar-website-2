"use client";

import React from "react";
import { ImageSlotsProvider, SlotData } from "@/context/ImageSlotsContext";

interface ProvidersProps {
  initialSlots?: Record<string, SlotData>;
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ initialSlots = {}, children }) => {
  return <ImageSlotsProvider initialSlots={initialSlots}>{children}</ImageSlotsProvider>;
};
