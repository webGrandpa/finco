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
    <footer className='bg-[#1B365D] text-white'>
      <div className='max-w-[1440px] w-full mx-auto px-6 md:px-10 pt-12 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 justify-between'>
          
          {/* Column 1: Logo + Description + Social */}
          <div className='flex flex-col'>
            <Image src="/finco_footer_logo.svg" alt="footer logo" width={120} height={36} />
            <p className='text-sm text-gray-300 mt-4 leading-relaxed'>
              პროფესიონალური ფინანსური მომსახურება თქვენი ბიზნესის წარმატებისთვის.
            </p>
            <SocialMediaIcons />
          </div>

          {/* Column 2: Services */}
          <div>
            <List HeaderTitle="სერვისები" ListItems={ServiceLinks} />
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <List HeaderTitle="საკონტაქტო ინფორმაცია" ListItems={ContactLinks} />
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className='border-t border-white/20 mt-10 pt-6 text-center'>
          <p className='text-xs text-gray-400'>
            © {new Date().getFullYear()} Finco. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
