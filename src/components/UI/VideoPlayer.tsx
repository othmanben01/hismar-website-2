"use client";

import { useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented or fetching aborted.
          // This is expected if the user navigates away or clicks quickly.
          console.log("Video playback interrupted:", error);
        });
      }
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      playsInline
      poster={poster}
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
      onClick={(e) => e.stopPropagation()} // Prevent bubbling to card click
    />
  );
};
