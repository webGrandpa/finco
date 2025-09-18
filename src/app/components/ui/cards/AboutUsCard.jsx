//AboutUsCard.

"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useCountUp } from '@/lib/hooks/useCountUp';

const AboutUsCard = ({
  image,
  number,
  description, 
  animateCount = false,
  duration = 1500,
  suffix = '', 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const numberValue = parseInt(number) || 0;
  const displaySuffix = number.toString().replace(numberValue.toString(), '').trim() || suffix;

  const animatedNumber = useCountUp(numberValue, duration, animateCount && inView);

  return (
    <div
      ref={animateCount ? ref : null}
      className="flex flex-col items-center justify-center p-4 w-full h-full text-center"
    >
      {image && (
        <Image 
          src={image} 
          alt={number} 
          width={48} 
          height={48} 
          className="object-contain mb-2 flex-shrink-0" 
        />
      )}

      <div className="flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-[#002E85]">
          {animateCount ? `${animatedNumber}${displaySuffix}` : number}
        </span>
        <span className="text-base text-gray-500 whitespace-normal">
          {description}
        </span>
      </div>
    </div>
  );
};

export default AboutUsCard;