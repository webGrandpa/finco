// ContactUs

import React from 'react';
import Image from 'next/image';
import SectionHeaders from '../../ui/SectionHeaders';
import Button from '../../ui/buttons/Button';
import { contactData } from '../../../../lib/data/home-page/contactData';

const ContactUs = () => {
  return (
    <div className='px-6 md:px-10 lg:px-16 xl:px-40 w-full py-10'>
        <div className='max-w-[1440px] w-full mx-auto'>
        <div className='bg-gray-100 rounded-3xl shadow-md'>
            <SectionHeaders
              header={contactData.sectionHeader.header}
              padding='pt-10'
            />
            <div className='flex flex-col lg:flex-row justify-center items-center p-6 sm:p-10 gap-10'>
                <div className="w-full lg:w-1/2 order-1 lg:order-last">
                  <Image
                    className='rounded-lg shadow-md max-w-full h-auto'
                    src={contactData.image}
                    alt="Contact Us"
                    width={500}
                    height={350}
                  />
                </div>
                <div className='flex flex-col gap-5 w-full lg:w-1/2 order-1 lg:order-first'>
                    <p 
                        className='text-[#1B365D] font-extrabold text-lg'
                    >
                        {contactData.title.map((line, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <br />}
                                {line}
                            </React.Fragment>
                        ))}
                    </p>
                    <p className='text-[#1B365D] font-bold text-base pt-4'>{contactData.address}</p>
                    <p className='text-[#1B365D] font-bold text-base'>{contactData.phone}</p>
                    <p className='text-[#1B365D] font-bold text-base'>{contactData.email}</p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-8'>
                        {contactData.buttons.map(button => (
                            <Button key={button.id} title={button.title}
                                bgColor="bg-[#1b375d]"
                                textColor="text-white"
                                hoverText="text-[#1b375d]"
                                hoverBg="bg-white"
                                leftIcon={<Image src={button.icon} alt="" width={20} height={20} />}
                                leftHoverIcon={<Image src={button.hoverIcon} alt="" width={20} height={20} />}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ContactUs;