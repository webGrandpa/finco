"use client";

import React, { useState } from 'react';

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
}) => {

  return (
    <div className={`max:md:w-full text-center md:text-${textStart}`}>
      <button
        onClick={onClick}
        className={`max-md:w-full
          relative px-4 ${paddingY} rounded-[8px] 
          overflow-hidden border border-[#1b375d] shadow-lg
          transition-all hover:shadow-[#1b375d]
          ${bgColor} ${textColor}
          hover:${hoverText}
          hover:${hoverBg}
          mt-${margin} cursor-pointer

        `}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <span>{title}</span>
        </span>
      </button>
    </div>
  );
};

export default Button;