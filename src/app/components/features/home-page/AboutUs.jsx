//homepage/aboutUs

import React from 'react';
import Image from 'next/image';
import HeroCards from '../../ui/cards/HeroCards';
import SectionHeaders from '../../ui/SectionHeaders';
import { aboutUsData } from '@/lib/data/home-page/aboutUsData';

const AboutUs = () => {
  return (
    <div id="about-us" className='flex flex-col items-center justify-center 
    gap-8 py-10 px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f]'>
        <SectionHeaders
          header={aboutUsData.sectionHeader.header}
          paragraph={aboutUsData.sectionHeader.paragraph}
          textCenter='center'
        />
        <div className='flex flex-col md:flex-row items-center justify-between 
        gap-8 md:gap-20'>
            <div className='w-full md:w-1/2 order-2 md:order-1'>
                <h3 className='text-xl font-semibold mb-5'>{aboutUsData.title}</h3>
                <p className='text-[#374151bf] mb-5'>{aboutUsData.p1}</p>
                <p className='text-[#374151bf] md:pt-8'>{aboutUsData.p2}</p>
                <div className='flex flex-col sm:flex-row pt-8 items-start gap-4'>
                    {aboutUsData.stats.map(stat => (
                         <HeroCards
                            key={stat.id}
                            cardImage={stat.image}
                            numTitle={stat.numTitle}
                            textTitle={stat.textTitle}
                            fontSize={stat.fontSize}
                            bgColor='transparent'
                            textDirection='text-start'
                            animateCount={true}
                            whitespace='whitespace-nowrap'
                        />
                    ))}
                </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
                <Image 
                    className='w-full h-auto rounded-lg shadow-lg' 
                    src={aboutUsData.image}
                    alt="Our Team" 
                    width={600} 
                    height={400} 
                />
            </div>
        </div>
    </div>
  );
};

export default AboutUs;