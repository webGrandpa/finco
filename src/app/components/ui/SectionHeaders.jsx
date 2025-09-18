"use client";

import React, { useRef, useState, useEffect } from "react";

const SectionHeaders = ({
  header,
  paragraph,
  bgcolor = "",
  hasDivider = true,
  textCenter = "center",
  padding = "py-10",
  rounded = "none",
  children,
  size = "text-3xl",
  pSize = "lg",
  gap = "4",
  dividerScale = 10,
  maxWidth = "md:max-w-[680px]",
}) => {
  const [dividerScaleX, setDividerScaleX] = useState(0);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const charCount = header ? header.length : 0;
  const fullWidth = charCount * dividerScale;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScrollY.current;
      lastScrollY.current = currentScroll;

      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
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

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col ${padding} ${bgcolor} 
      w-full rounded-${rounded} gap-${gap} text-${textCenter} items-${textCenter}`}
    >
      <h2 className={`${size} font-bold text-[#1B365D]`}>{header}</h2>

      {hasDivider && (
        <div className="flex justify-center mb-3">
          <div
            className="h-1 bg-[#1B365D] rounded-3xl transition-transform duration-700 ease-out"
            style={{
              width: `${fullWidth}px`,
              transform: `scaleX(${dividerScaleX})`,
              transformOrigin: "center",
            }}
          />
        </div>
      )}

      {paragraph && (
        <p
          className={`text-${pSize} text-[#374151b9] max-w-full md:max-w-[980px] 
          ${maxWidth} self-${textCenter} md:self-${textCenter} 
          lg:self-${textCenter} text-${textCenter}`}
        >
          {paragraph}
        </p>
      )}

      {children && (
        <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionHeaders;