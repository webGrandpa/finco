// FAQ

"use client";

import React, { useState } from 'react';
import FAQitem from '../../ui/FAQitem';
import SectionHeaders from '../../ui/SectionHeaders';
import { faqData } from '@/lib/data/home-page/faqData';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#E8EDF2] py-10 px-4">
      <div className='max-w-[1440px] w-full mx-auto'>
        <SectionHeaders
          header={faqData.sectionHeader.header}
          padding='py-2'
        />
        <div className="flex flex-col items-center mt-8">
          {faqData.questions.map((q) => (
            <FAQitem
              key={q.id}
              id={q.id}
              title={q.title}
              content={q.content}
              isOpen={openId === q.id}
              onToggle={() => handleToggle(q.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;