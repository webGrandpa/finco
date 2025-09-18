//page

"use client";

import React, { useState } from 'react';
import SectionHeaders from '../components/ui/SectionHeaders';
import ServicesPageCard from '../components/ui/cards/ServicesPageCard';
import Button from '../components/ui/buttons/Button';
import ServicesCard from '../components/ui/cards/ServicesCard';
import ConsultationModal from '../components/features/modals/ConsultationModal';
import { servicesPageData } from '../../lib/data/servucesPageData';

const ServicesPage = () => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  return (
    <>
      <div className='flex items-center justify-center flex-col gap-8 py-10 px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f] mt-20'>
        <SectionHeaders
          header={servicesPageData.mainHeader.header}
          paragraph={servicesPageData.mainHeader.paragraph}
          hasDivider={true}
          padding='pb-1'
          gap='2'
          maxWidth='width-full'
        />
        <div className='flex flex-col gap-10 md:px-20'>
          {servicesPageData.detailedServices.map(service => (
            <ServicesPageCard
              key={service.id}
              header={service.header}
              paragraph={service.paragraph}
              image={service.image}
              imageWidth={'w-[584px]'}
              features={service.features}
            >
              <Button 
                title="დაჯავშნე კონსულტაცია"
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
                onClick={() => setShowConsultationModal(true)}
              />
            </ServicesPageCard>
          ))}
        </div>
        
        <SectionHeaders
          header={servicesPageData.howWeWorkHeader.header}
          paragraph={servicesPageData.howWeWorkHeader.paragraph}
          hasDivider={true}
          padding='pb-1'
          gap='2'
          maxWidth='width-full'
          size='text-2xl'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full md:px-20'>
          {servicesPageData.workPrinciples.map(principle => (
            <ServicesCard
              key={principle.id}
              img={principle.image}
              header={principle.header}
              paragraph={principle.paragraph}
              direction='md:flex-col'
              textStart='justify-start md:justify-center'
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
    </>
  );
};

export default ServicesPage;