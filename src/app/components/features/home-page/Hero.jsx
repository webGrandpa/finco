// Hero
// src/app/components/features/home-page/Hero.jsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../ui/buttons/Button';
import HeroCards from '../../ui/cards/HeroCards';
import ConsultationModal from '../modals/ConsultationModal';
import { heroData } from '../../../../lib/data/home-page/heroData';

const Hero = () => {
    const [showConsultationModal, setShowConsultationModal] = useState(false);

    return (
        <div className="relative w-full">
            <div className="absolute inset-0 h-full overflow-hidden">
                <Image 
                    src={heroData.image}
                    alt="Hero Background" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            <div className="relative flex flex-col mt-14 
            md:gap-10 gap-6 items-start justify-center 
            text-start h-full px-6 md:px-10 lg:px-20 py-10">
                <h1 
                    className="text-3xl md:text-5xl font-extrabold text-[#1b375d] leading-normal"
                    dangerouslySetInnerHTML={{ __html: heroData.title }} 
                />
                <p 
                    className="text-base md:text-xl text-[#374151d1]"
                    dangerouslySetInnerHTML={{ __html: heroData.subtitle }}
                />
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button
                        title="კონსულტაციის მიღება"
                        onClick={() => setShowConsultationModal(true)}
                        bgColor="bg-[#1b375d]"
                        textColor="text-white"
                        hoverText="text-[#1b375d]"
                        hoverBg="bg-white"
                    />
                    <Link href="/services">
                        <Button
                            title="ჩვენი სერვისები"
                            bgColor="bg-white"
                            textColor="text-[#1b375d]"
                            hoverText="text-white"
                            hoverBg="bg-[#1b375d]"
                        />
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center w-full md:w-auto">
                    {heroData.stats.map(stat => (
                        <HeroCards
                            key={stat.id}
                            cardImage={stat.image}
                            numTitle={stat.numTitle}
                            textTitle={stat.textTitle}
                            variant="statistic"
                            textDirection='text-start'
                            animateCount={true}
                            whitespace='whitespace-nowrap'
                        />
                    ))}
                </div>
            </div>
            {showConsultationModal && (
                <ConsultationModal
                    showModal={showConsultationModal}
                    setShowModal={setShowConsultationModal}
                />
            )}
        </div>
    );
};

export default Hero;