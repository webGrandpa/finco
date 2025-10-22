"use client";

import React from "react";
import AnimatedDivider from "./AnimatedDivider";

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
  mdprop = ""
}) => {

  const charCount = header ? header.length : 0;

  const dividerAlignment = textCenter;

  return (
    <div
      className={`flex flex-col ${padding} ${bgcolor} 
      w-full rounded-${rounded} gap-${gap} text-${textCenter} items-${textCenter} ${mdprop}`}
    >
      <h2 className={`${size} font-bold text-[#1B365D]`}>{header}</h2>

      {hasDivider && (
        <AnimatedDivider
          charCount={charCount}
          dividerScale={dividerScale}
          alignment={dividerAlignment}
        />
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