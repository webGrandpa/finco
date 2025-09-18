//FAQitem

"use client";

import React from 'react';
import Image from 'next/image';

const FAQitem = ({ title, content, isOpen, onToggle, id }) => {

  const contentId = `faq-content-${id}`; 

  return (
    <div className="w-full max-w-4xl mx-auto mb-2 border-b-2 border-gray-200">
      <button 
        className="flex items-center justify-start gap-6 w-full p-4 text-xl font-semibold text-left text-[#1B365D] bg-[#E8EDF2] hover:bg-gray-50 focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      > 
        <span className="flex-shrink-0">
          <Image 
            src="/faq1.svg"
            alt={isOpen ? 'Collapse icon' : 'Expand icon'}
            width={24}
            height={24}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-135' : 'rotate-0'}`} 
          />
        </span>
        <span>{title}</span>
      </button>

      <div 
        id={contentId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 text-gray-700">
          <p className='pl-12'>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQitem;