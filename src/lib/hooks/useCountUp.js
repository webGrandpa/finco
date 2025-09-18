// useCountUp

"use client";

import { useState, useEffect, useCallback } from 'react';

export const useCountUp = (end, duration, start) => {
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    if (start) {
      animate();
    }
  }, [start, animate]);

  return count;
};