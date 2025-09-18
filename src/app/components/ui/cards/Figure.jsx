import React from 'react';
import Image from 'next/image';

const Figure = (
  { image, 
    caption, 
    direction = 'row',
    width = 32,
    height = 32
  }) => {
  return (
    <figure className={`flex items-center justify-center flex-${direction} gap-2.5`}>
      <Image 
        src={image}
        alt={caption} 
        width={width}
        height={height}
      />
      <figcaption>
        <p>{caption}</p>
      </figcaption>
    </figure>
  )
}

export default Figure;