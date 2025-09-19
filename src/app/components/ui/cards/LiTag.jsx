"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LiTag = ({ title, href, onClick }) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <div className="w-full">
      <Link
        href={href}
        onClick={onClick}
        className={`
          relative block py-2 px-3 no-underline text-base font-medium rounded-md transition-colors duration-200
          lg:py-1.5 lg:px-0 lg:rounded-none
          lg:inline-block
          lg:before:content-[''] lg:before:absolute lg:before:bottom-0 whitespace-nowrap 
          lg:before:left-1/2 lg:before:-translate-x-1/2 lg:before:w-0 lg:before:h-[2px] 
          lg:before:bg-[#1b375d] lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out
          md:text-xl lg:text-base
          ${isActive
            ? 'border-b-2 border-[#1b375d] md:border-none rounded-none text-[#1b375d] lg:before:w-full'
            : 'text-gray-600 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-[#1b375d] lg:hover:before:w-full'
          }
        `}
      >
        {title}
      </Link>
    </div>
  );
};

export default LiTag;