//Education


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeaders from '../../ui/SectionHeaders';
import Figure from '../../ui/cards/Figure';
import Button from '../../ui/buttons/Button';
import { educationData } from '../../../../lib/data/home-page/educationData';

const Education = () => {
  return (
    <div className='text-center bg-white flex flex-col justify-between gap-6 px-6 md:px-10 lg:px-16 xl:px-40 pb-10'>
      <div className='max-w-[1440px] w-full mx-auto'>
        <SectionHeaders
          header={educationData.sectionHeader.header}
          paragraph={educationData.sectionHeader.paragraph}
          padding='pt-10'
        />
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
            <Image
              className='w-full h-auto lg:max-w-sm xl:max-w-xl rounded-2xl'
              src={educationData.image}
              alt="Students"
              width={720}
              height={480}
            />
            <div className='flex flex-col items-start w-full lg:w-1/2'>
                <SectionHeaders
                  header={educationData.content.header}
                  paragraph={educationData.content.paragraph}
                  hasDivider={false}
                  textCenter='start'
                  padding='py-2'
                  size='text-xl'
                />
                {educationData.courses.map(course => (
                   <SectionHeaders
                      key={course.id}
                      header={course.header}
                      paragraph={course.paragraph}
                      hasDivider={false}
                      size='base'
                      textCenter='start'
                      padding='py-2'
                    >
                      <div className='flex flex-row justify-start gap-4 items-center w-full'>
                          {course.figures.map(figure => (
                             <Figure
                             key={figure.caption}
                             image={figure.image}
                             width={12}
                              height={12}
                             caption={figure.caption}
                             direction='row' />
                          ))}
                      </div>
                   </SectionHeaders>
                ))}
                <div className="w-full self-start text-start mt-8">
                  <Link href="/education">
                    <Button
                      title="კურსზე რეგისტრაცია"
                      bgColor="bg-[#1b375d]"
                      textColor="text-white"
                      hoverText="text-[#1b375d]"
                      hoverBg="bg-white"
                    />
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Education;