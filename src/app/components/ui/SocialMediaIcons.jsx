"use client";

import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaEnvelope } from 'react-icons/fa';

const SocialMediaIcons = () => {
  const socialIcons = [
    { 
      name: 'facebook', 
      icon: FaFacebookF, 
      color: '#3b5999', 
      href: 'https://www.facebook.com/p/Finco-time-%E1%83%A4%E1%83%98%E1%83%9C%E1%83%99%E1%83%9D-100088219473874/?locale=ka_GE' 
    },
    { 
      name: 'twitter', 
      icon: FaTwitter, 
      color: '#55acee', 
      href: 'https://x.com/' 
    },
    { 
      name: 'linkedin', 
      icon: FaLinkedinIn, 
      color: '#0077b5', 
      href: 'https://Linkedin.com' 
    },
    { 
      name: 'email', // Changed name for clarity
      icon: FaEnvelope, // CHANGED: Google+ is dead, use Envelope icon for email
      color: '#dd4b39', 
      href: 'mailto:timefinco@gmail.com' // <--- FIX IS HERE
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <ul className='flex mt-4 space-x-2 gap-2'>
      {socialIcons.map((social, index) => {
        const IconComponent = social.icon;
        const isHovered = hoveredIndex === index;
        // Check if it's an email link
        const isMail = social.href.startsWith('mailto');

        return (
          <li
            key={social.name}
            className='list-none'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={social.href}
              // Open web links in new tab, keep mail in same tab
              target={isMail ? "_self" : "_blank"} 
              rel="noopener noreferrer"
              className='
                relative w-11 h-11 bg-white flex items-center justify-center 
                rounded-full border-[3px] border-white overflow-hidden
                transition-all duration-300 z-10
              '
              style={{
                borderColor: isHovered ? social.color : '#fff',
              }}
            >
              <div
                className='
                  absolute left-0 w-full h-full
                  transition-all duration-300 z-20
                '
                style={{
                  background: social.color,
                  top: isHovered ? '0' : '100%', 
                }}
              ></div>
              <span
                className='relative z-30 transition-all duration-500'
                style={{
                  color: isHovered ? '#fff' : '#262626',
                  transform: isHovered ? 'rotateY(360deg)' : 'none',
                }}
              >
                <IconComponent className='w-6 h-6' /> 
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaIcons;