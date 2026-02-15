//ServicesPageCard


import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

const ServicesPageCard = ({ 
  header, 
  paragraph,
  features, 
  image, 
  imageWidth, 
  imageHeight, 
  children,
  isReversed = false
}) => {
  return (
    <div className={clsx(
      'flex flex-col justify-center items-center bg-white p-6 md:p-8 rounded-xl shadow-md md:justify-between gap-6 md:gap-8',
      isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
    )}>
      
      <div className='flex-shrink-0 w-full md:w-[45%] lg:w-1/2'>
        <Image 
            src={image} 
            alt={header} 
            width={584}
            height={390}
            className='mx-auto w-full h-auto max-w-full rounded-lg object-cover'
        />
      </div>

      <div className='flex flex-col justify-center items-center md:items-start w-full md:w-[55%] lg:w-1/2'>
        <h2 className='text-xl lg:text-2xl font-bold text-[#1B365D] pb-4 lg:pb-6 text-center md:text-left'>{header}</h2>
        <p className='text-sm text-[#1B365D] pb-3 text-center md:text-left'>
          {paragraph}
        </p>
            
        {features?.length > 0 && (
          <ul className="space-y-2 mb-2 pb-4 list-none">
            {features.map((item, index) => (
              <li className='flex items-center justify-start gap-3' key={index}>
                <Image src="/Ser4.webp" alt="vector" width={16} height={16} />
                <span className='text-[#374151]'>{item}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div>
          {children}
        </div>
      </div>   
    </div>
  );
};

export default ServicesPageCard;