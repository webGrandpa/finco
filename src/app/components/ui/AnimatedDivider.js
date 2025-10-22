"use client";

import React, { useRef, useState, useEffect } from "react";

const AnimatedDivider = ({
  charCount = 0,
  dividerScale = 10,
  color = "bg-[#1B365D]",
  height = "h-1",
  alignment = "center",
  className = "mb-3",
}) => {
  const [dividerScaleX, setDividerScaleX] = useState(0);
  const dividerRef = useRef(null);
  const lastScrollY = useRef(0);

  const fullWidth = charCount * dividerScale;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScrollY.current;
      lastScrollY.current = currentScroll;

      if (!dividerRef.current) return;

      const rect = dividerRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.8;
      const inView = rect.top < triggerPoint && rect.bottom > 0;

      if (inView) {
        if (scrollingDown) {
          setDividerScaleX(1);
        } else {
          setDividerScaleX(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const alignmentClasses = {
    center: "justify-center",
    start: "justify-start",
    end: "justify-end",
  };

  const transformOrigin = {
    center: "center",
    start: "left",
    end: "right",
  };

  return (
    <div
      ref={dividerRef}
      className={`flex ${alignmentClasses[alignment] || "justify-center"} ${className}`}
    >
      <div
        className={`${height} ${color} rounded-3xl transition-transform duration-700 ease-out`}
        style={{
          width: `${fullWidth}px`,
          transform: `scaleX(${dividerScaleX})`,
          transformOrigin: transformOrigin[alignment] || "center",
        }}
      />
    </div>
  );
};

export default AnimatedDivider;