'use client';

import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const VideoPlayer = ({ src, className }) => {
  const [videoRef, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const videoElement = useRef(null);

  useEffect(() => {
    if (isVisible) {
      videoElement.current?.play();
    } else {
      videoElement.current?.pause();
    }
  }, [isVisible]);

  return (
    <video
      ref={(el) => {
        videoRef.current = el;
        videoElement.current = el;
      }}
      src={src}
      loop
      muted
      playsInline
      className={className}
      loading="lazy"
    />
  );
};

export default VideoPlayer;
