"use client";

import React from "react";
import { trackConversion } from "@/utils/tracking";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  fbEventName: string;
}

export const TrackedLink: React.FC<TrackedLinkProps> = ({ eventName, fbEventName, children, onClick, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackConversion(eventName, fbEventName);
    if (onClick) onClick(e);
  };

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
