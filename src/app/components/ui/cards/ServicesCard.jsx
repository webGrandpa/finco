// ui/cards/ServicesCard.js (Универсальная версия)

import Image from 'next/image';
import React from 'react';

const ServicesCard = ({ 
  img, 
  header, 
  paragraph, 
  features, 
  children,
  width = 'w-16', 
  height = 'h-16',
  textStart = 'justify-start', 
  direction = 'flex-row',
  layout = 'default',
  componentHeight = 'h-full',
}) => {

  if (layout === 'news') {
    return (
      <div className="flex flex-col h-full bg-white shadow-md rounded-xl overflow-hidden">
        <div className="relative w-full h-48">
          <Image src={img} alt={header} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-semibold text-[#1b365d] mb-2">{header}</h3>
          <div className="flex-grow">
            <p className="text-[#374151] text-start mb-4 line-clamp-3">{paragraph}</p>
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${textStart} items-start p-6 shadow-md w-full rounded-xl bg-white ${componentHeight}`}>
      <div className={`flex ${textStart} gap-2 items-center p-2 ${direction} w-full`}>
        <Image src={img} alt={header} width={64} height={64} className={`${width} ${height} sm:w-auto sm:h-auto`} />
        <h3 className="text-l md:text-xl font-semibold text-[#1b365d] sm:text-start text-start">{header}</h3>
      </div>
      <div className="flex-grow w-full">
        <p className="text-[#374151] max-h-[100px] overflow-hidden text-start mb-4 md:pl-2">{paragraph}</p>
        {features?.length > 0 && (
          <ul className="text-[#374151] list-disc list-inside space-y-1 mb-2">
            {features.map((item, index) => (
              <li className='flex items-center justify-start gap-2' key={index}>
                <Image src="/Ser4.svg" alt="vector" width={16} height={16} />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-end justify-center md:justify-start w-full">
        {children}
      </div>
    </div>
  );
};

export default ServicesCard;