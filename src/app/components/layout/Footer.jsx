import React from 'react';
import List from '../ui/cards/List';
import Image from 'next/image';
import SocialMediaIcons from '../ui/SocialMediaIcons';

const Footer = () => {
    const ServiceLinks = [
        { id: 1, title: 'ბუღალტრული მომსახურება', href: '/services' },
        { id: 2, title: 'იურიდიული მომსახურება', href: '/services' },
        { id: 3, title: 'ფინანსური კონსულტაცია', href: '/services' },
        { id: 4, title: 'სხვა სერვისები', href: '/services' },
    ];

    const ContactLinks = [
        { 
            id: 1, 
            title: 'მელიქიშვილის 88, Batumi, Georgia, 6000', 
            href: 'https://maps.app.goo.gl/7Uy5Qbo9psFaanKaA',
            newTab: true 
        },
        { 
            id: 2, 
            title: '+995 577 29 90 90', 
            href: 'tel:+995577299090',
            newTab: false
        },
        { 
            id: 3, 
            title: 'timefinco@gmail.com', 
            href: 'timefinco@gmail.com',
            newTab: false
        },
        { 
            id: 4, 
            title: 'ორშაბათი - პარასკევი: 09:00 - 18:00', 
            href: null,
            newTab: false 
        }
    ];

  return (
    <div className='bg-[#1B365D] pt-8 pb-12 px-6 md:px-10 lg:px-16 xl:px-40 text-white 
    flex flex-col md:flex-row justify-between gap-10 lg:gap-20'>
      
      <div className='flex flex-col md:flex-row justify-between w-full max-w-[1440px] mx-auto'>
        <div className='social-media w-full md:w-1/4'>
          <Image src="/finco_footer_logo.svg" alt="footer logo" width={100} height={30} />
          <p className='text-sm py-2 mt-4'>
            პროფესიონალური ფინანსური მომსახურება <br /> თქვენი ბიზნესის წარმატებისთვის.
          </p>
            <SocialMediaIcons />
        </div>
        
        <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-8">
          <List HeaderTitle="სერვისები" ListItems={ServiceLinks} />
          <List HeaderTitle="საკონტაქტო ინფორმაცია" ListItems={ContactLinks} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
