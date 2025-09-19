"use client";

import React from 'react';
import LiTag from '../ui/cards/LiTag';

const NavBar = ({ onLinkClick }) => {
  return (
    <div className="navbar w-full flex items-center justify-start lg:h-[60px]">
        <ul className="flex flex-col lg:flex-row px-6 w-full md:pl-0 items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <LiTag title="ჩვენ შესახებ" href="/about-us" onClick={onLinkClick} />
          <LiTag title="სერვისები" href="/services" onClick={onLinkClick} />
          <LiTag title="განათლება" href="/education" onClick={onLinkClick} />
          <LiTag title="კითხვები" href="/faq" onClick={onLinkClick} />
          <LiTag title="სიახლეები" href="/news" onClick={onLinkClick} />
          <LiTag title="კონტაქტი" href="/contact" onClick={onLinkClick} />
        </ul>
    </div>
  )
}

export default NavBar;