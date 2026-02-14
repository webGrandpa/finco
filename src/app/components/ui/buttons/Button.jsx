"use client";

import React, { useState } from 'react';
import clsx from 'clsx';

const Button = ({
  title,
  bgColor = '',
  textColor = '',
  hoverText = '',
  hoverBg = '',
  margin = "0",
  textStart = "start",
  onClick,
  paddingY = "py-3",
  leftIcon,
  leftHoverIcon,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={clsx('max-sm:w-full text-center', textStart !== 'center' && `md:text-${textStart}`)}>
      <button
        type={onClick ? "button" : "submit"}
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={clsx(
          'max-sm:w-full relative px-4 rounded-[8px]',
          'overflow-hidden border border-[#1b375d] shadow-md',
          'transition-all hover:shadow-[#3F608C] cursor-pointer',
          paddingY,
          margin !== "0" && `mt-${margin}`,
          isHovered ? hoverBg : bgColor,
          isHovered ? hoverText : textColor,
          disabled && 'opacity-50 cursor-not-allowed',
        )}
      >
        <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
          {leftIcon && leftHoverIcon && (
            <span>{isHovered ? leftHoverIcon : leftIcon}</span>
          )}
          <span>{title}</span>
        </span>
      </button>
    </div>
  );
};

export default Button;