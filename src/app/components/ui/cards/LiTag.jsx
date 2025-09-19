// src/components/LiTag.jsx

import React from 'react';
import Link from 'next/link';


const LiTag = ({ title, href, onClick }) => {
  return (
    <div className="text-[#374151d1] lg:hover:text-[#1b375d] cursor-pointer w-full whitespace-nowrap">
      <Link 
        href={href} 
        onClick={onClick}
        className="
          relative block py-1.5 no-underline text-base font-medium
          lg:inline-block
          lg:before:content-[''] lg:before:absolute lg:before:bottom-0 
          lg:before:left-1/2 lg:before:w-0 lg:before:h-[2px] 
          lg:before:bg-[#1b375d] lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out
          lg:hover:before:w-full lg:hover:before:left-0
           md:text-xl lg:text-base
        "
      >
        {title}
      </Link>
    </div>
  );
};

export default LiTag;