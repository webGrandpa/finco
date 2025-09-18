import React from 'react';
import ServicesCard from '../../ui/cards/ServicesCard';
import SectionHeaders from '../../ui/SectionHeaders';
import Figure from '../../ui/cards/Figure';
import HeroCards from '../../ui/cards/HeroCards';
import { whyUsData } from '../../../../lib/data/home-page/whyUsData';

const WhyUs = () => {
  return (
    <div className='text-center pb-10 bg-[#1B365D0D] flex flex-col items-center gap-6 px-6 md:px-10 lg:px-20'>
      <SectionHeaders
        header={whyUsData.sectionHeader.header}
        paragraph={whyUsData.sectionHeader.paragraph}
        padding="pt-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 w-full">
        {whyUsData.cards.map(card => (
            <ServicesCard
                key={card.id}
                img={card.image}
                header={card.header}
                paragraph={card.paragraph}
            />
        ))}
      </div>
      <div className='flex flex-col md:flex-row justify-between bg-white p-6 md:p-10 rounded-lg shadow-md w-full gap-8 mt-8'>
        <div className='flex flex-col gap-5 justify-start text-start w-full md:w-1/2'>
          <SectionHeaders
            header={whyUsData.partnership.header}
            paragraph={whyUsData.partnership.paragraph}
            hasDivider={false}
            textCenter='start'
          />
          <div className='flex flex-col sm:flex-row items-start px-4 justify-start gap-5 pt-4'>
            {whyUsData.partnership.figures.map(figure => (
                <Figure key={figure.id} image={figure.image} caption={figure.caption} />
            ))}
          </div>
        </div>
        <div className='grid grid-cols-2 gap-8 w-full md:w-1/2 mt-4 md:mt-0 '>
            {whyUsData.partnership.stats.map(stat => (
                <HeroCards 
                    key={stat.id}
                    numTitle={stat.numTitle}
                    textTitle={stat.textTitle}
                    variant="homepage"
                    wrapperCenter="rounded-xl py-2"
                    animateCount={true}
                    bgColor='bg-[#1B365D0D]'
                    itemsCenter='items-center'
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;