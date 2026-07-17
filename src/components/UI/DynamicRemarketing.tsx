"use client";

import { useEffect } from "react";
import { trackDynamicRemarketing } from "@/utils/tracking";

export const DynamicRemarketing = ({ itemId }: { itemId: string }) => {
  useEffect(() => {
    trackDynamicRemarketing(itemId);
  }, [itemId]);

  return null;
};
