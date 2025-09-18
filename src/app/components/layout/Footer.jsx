//components/layout/Footer.jsx

import React from 'react';
import List from '../ui/cards/List';
import Image from 'next/image';
import SocialMediaIcons from '../ui/SocialMediaIcons';

const Footer = () => {
    // const InstantLinks = [
    //     { id: 1, title: 'მთავარი', href: '/' },
    //     { id: 2, title: 'ჩვენ შესახებ', href: '/about-us' },
    //     { id: 3, title: 'სერვისები', href: '/services' },
    //     { id: 4, title: 'განათლება', href: '/education' },
    //     { id: 5, title: 'ხშირად დასმული კითხვები', href: '/faq' },
    //     { id: 6, title: 'სიახლეები', href: '/news' },
    //     { id: 7, title: 'კონტაქტი', href: '/contact' },
    // ];
    const ServiceLinks = [
        { id: 1, title: 'ბუღალტრული მომსახურება', href: '/services' },
        { id: 2, title: 'იურიდიული მომსახურება', href: '/services' },
        { id: 3, title: 'ფინანსური კონსულტაცია', href: '/consultation' },
        { id: 4, title: 'სხვა სერვისები', href: '/services' },
    ];
    const ContactLinks = [
        { id: 1, title: 'რუსთაველის გამზირი 42, თბილისი', href: '#' },
        { id: 2, title: '+995 32 222 22 22', href: 'tel:+995322222222' },
        { id: 3, title: 'info@financepro.ge', href: 'mailto:info@financepro.ge' },
        { id: 4, title: 'ორშაბათი - პარასკევი: 09:00 - 18:00', href: '#' }
    ];
  return (
    <div className='bg-[#1B365D] pt-8 pb-12 px-6 md:px-10 lg:px-20 text-white 
    flex flex-col md:flex-row justify-between gap-10 md:gap-40
    '>
      <div className='social-media w-full md:w-1/4'>
        <Image src="/footerLogo.svg" alt="footer logo" width={100} height={30} />
        <p className='text-sm py-2 mt-4'>
          პროფესიონალური ფინანსური მომსახურება <br /> თქვენი ბიზნესის წარმატებისთვის.
        </p>
          <SocialMediaIcons />
      </div>
      
      <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-8">
        {/* <List HeaderTitle="სწრაფი ბმულები" ListItems={InstantLinks} /> */}
        <List HeaderTitle="სერვისები" ListItems={ServiceLinks} />
        <List HeaderTitle="საკონტაქტო ინფორმაცია" ListItems={ContactLinks} />
      </div>
    </div>
  );
};

export default Footer;