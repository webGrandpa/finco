"use client";

import React, { useState } from 'react';

const Button = ({
  title,
  bgColor,
  textColor,
  hoverText,
  hoverBg,
  margin = "0",
  leftIcon,
  leftHoverIcon,
  textStart = "start",
  onClick,
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverTextMap = {
    'text-white': 'hover:text-white',
    'text-[#1b375d]': 'hover:text-[#1b375d]',
  };

  const hoverBgMap = {
    'bg-white': 'before:bg-white after:bg-white',
    'bg-[#1b375d]': 'before:bg-[#1b375d] after:bg-[#1b375d]',
  };

  const currentLeftIcon = isHovered && leftHoverIcon ? leftHoverIcon : leftIcon;

  return (
    <div className={`max:md:w-full text-center md:text-${textStart}`}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`max-md:w-full
          relative px-4 py-3 rounded-[8px] 
          overflow-hidden border border-[#1b375d] shadow-2xl
          transition-all hover:shadow-[#1b375d]
          ${bgColor} ${textColor}
          ${hoverTextMap[hoverText]}
          ${hoverBgMap[hoverBg]}
          before:absolute before:left-0 
          before:right-0 before:top-0 before:h-0 
          before:w-full before:duration-500
          after:absolute after:bottom-0 after:left-0 
          after:right-0 after:h-0 after:w-full after:duration-300
          hover:before:h-2/4 hover:after:h-2/4 mt-${margin} cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed // Стили для неактивной кнопки
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {currentLeftIcon}
          <span>{title}</span>
        </span>
      </button>
    </div>
  );
};

export default Button;