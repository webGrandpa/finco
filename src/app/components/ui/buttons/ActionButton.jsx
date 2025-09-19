"use client";

import React from 'react';
import Image from 'next/image';

const ActionButton = ({
  title,
  onClick,
  disabled = false,
  self = 'self-center',
  showArrow = true,
  width = 'w-full'
}) => {
  return (
    <div className={`md:w-52 ${width} h-14 flex justify-center items-center ${self}`}>
      <button
        onClick={onClick}
        disabled={disabled}
        className="group relative mt-7 flex items-center justify-evenly w-52
       rounded-3xl bg-[#EBF0F5] px-6 py-1.5 text-[#1B365D] shadow-md
      transition-all duration-200 hover:scale-101 cursor-pointer
      active:scale-99 hover:border-[0.2px] hover:shadow-none mb-4
      disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        <span>{title}</span>
        {showArrow && (
          <div className="flex items-center justify-center ml-2">
            <Image
              className='w-[16px] h-[16px] transition-transform duration-200 group-hover:translate-x-[8px]'
              src="/ButtonArrow.svg"
              alt="Arrow"
              width={10}
              height={10}
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default ActionButton;
