"use client";

import React, { useState } from 'react';
import SectionHeaders from '../components/ui/SectionHeaders';
import ServiceCard from '../components/ui/cards/ServicesCard';
import Button from '../components/ui/buttons/Button';
import ConsultationModal from '../components/features/modals/ConsultationModal';
import AboutUsCard from '../components/ui/cards/AboutUsCard';
import {
  aboutUsHeader,
  missionData,
  statisticsCards,
  valuesHeader,
  coreValues,
  teamHeader,
  teamMembers
} from '@/lib/data/AboutUsData';
import TeamCard from '../components/ui/cards/TeamCard';

const AboutUsPage = () => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const openConsultationModal = () => setShowConsultationModal(true);

  return (
    <>
      <div id="about-us-page" className='flex flex-col items-center gap-8 py-10 px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f]'>
        {/* About Us Header */}
        <SectionHeaders
          header={aboutUsHeader.header}
          paragraph={aboutUsHeader.paragraph}
          hasDivider={true}
          maxWidth='w-full'
          padding='pt-20'
        />

        {/* Mission Section */}
        <div className='flex flex-col md:flex-row justify-between p-6 md:p-8 lg:p-10 w-full gap-8'>
          <div className='flex flex-col gap-5 items-center justify-start md:text-start w-full md:w-1/2'>
            <SectionHeaders
              header={missionData.header}
              paragraph={missionData.paragraph}
              hasDivider={false}
              size='text-xl'
              mdprop='text-center md:text-start'
            />
          </div>
          <div className='mission grid md:grid-cols-2 grid-cols-1 gap-4 w-full md:w-1/2 mt-4 md:mt-0'>
            {statisticsCards.map(card => (
              <AboutUsCard
                key={card.id}
                image={card.image}
                number={card.numTitle}
                description={card.textTitle}
                animateCount={true}
              />
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className='flex flex-col justify-between items-center p-6 md:p-8 lg:p-10 w-full gap-8'>
          <SectionHeaders
            header={valuesHeader.header}
            paragraph={valuesHeader.paragraph}
            hasDivider={true}
            textCenter='center'
            size='text-2xl'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
            {coreValues.map(value => (
              <ServiceCard
                direction='flex-col'
                key={value.id}
                img={value.img}
                header={value.header}
                paragraph={value.paragraph}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className='flex flex-col justify-between py-10 items-center px-6 md:px-10 lg:px-20 w-full gap-8 bg-white'>
        <SectionHeaders
          header={teamHeader.header}
          paragraph={teamHeader.paragraph}
          hasDivider={true}
          textCenter='center'
          maxWidth='w-full'
          size='text-2xl'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full'>
          {teamMembers.map(member => (
            <TeamCard
              key={member.id}
              teamImage={member.image}
              teamName={member.name}
              teamRole={member.title}
              teamExperience={member.experience}
              teamDescription={member.description}
              teamContact={member.contact}
            />
          ))}
        </div>
        <Button
          title="კონსულტაციის დაგეგმვა"
          onClick={openConsultationModal}
          bgColor="bg-[#1b375d]"
          textColor="text-white"
          hoverText="text-[#1b375d]"
          hoverBg="bg-white"
        />
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

export default AboutUsPage;