//education

"use client";

import React, { useState } from 'react';


import SectionHeaders from '../components/ui/SectionHeaders';
import ServicesPageCard from '../components/ui/cards/ServicesPageCard';
import Button from '../components/ui/buttons/Button';
import RegistrationModal from '../components/features/modals/RegistrationModal';
import { educationHeader, educationCourses } from '@/lib/data/EducationData'; 

const EducationPage = () => {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    
    const openRegistrationModal = () => setShowRegistrationModal(true);

    return (
        <div className='flex flex-col items-center gap-8 py-10 px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f] mt-20'>
            <SectionHeaders
                header={educationHeader.header}
                paragraph={educationHeader.paragraph}
                hasDivider={true}
                maxWidth='w-full'
                padding='py-5'
            />
            
            <div className='flex flex-col gap-10 md:px-20 w-full'>
                {educationCourses.map((course, index) => (
                    <ServicesPageCard
                        key={course.id}
                        header={course.header}
                        paragraph={course.paragraph}
                        image={course.image}
                        features={course.features}
                        imageWidth={'w-full max-w-lg'}
                        isReversed={index % 2 !== 0}
                    >
                        <Button 
                            title="დარეგისტრირდი კურსზე"
                            bgColor="bg-[#1b375d]"
                            textColor="text-white"
                            hoverText="text-[#1b375d]"
                            hoverBg="bg-white"
                            onClick={openRegistrationModal}
                        />
                    </ServicesPageCard>
                ))}
            </div>

            {showRegistrationModal && (
                <RegistrationModal
                    showModal={showRegistrationModal}
                    setShowModal={setShowRegistrationModal}
                />
            )}
        </div>
    );
};

export default EducationPage;