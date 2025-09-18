"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SectionHeaders from '../../ui/SectionHeaders';
import ButtonWithArrow from '../../ui/buttons/ButtonWithArrow'; 
import Button from '../../ui/buttons/Button'; 
import HomeNews from '../../ui/cards/HomeNews'; 

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/news?limit=3');
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError('სიახლეების ჩატვირთვა ვერ მოხერხდა.');
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='bg-[#1B365D0D] flex flex-col items-center px-6 md:px-10 lg:px-20 py-10'>
      <SectionHeaders
        header="სიახლეები და სტატიები"
        paragraph="გაეცანით უახლეს ინფორმაციას ფინანსების, ბუღალტერიის და ბიზნესის სფეროში"
        textCenter='center'
      />
            
      {loading && <p className="my-8">იტვირთება...</p>}
      {error && <p className="my-8 text-red-600">{error}</p>}

      {!loading && !error && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 w-full'>
          {articles.map((item, index) => (
            <HomeNews
                key={index}
                imageSrc={item.enclosure?.url}
                title={item.title}
                description={item.contentSnippet}
                date={new Date(item.isoDate).toLocaleDateString("ka-GE")}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <ButtonWithArrow 
                  buttonText="დაწვრილებით"
                  onClick={() => {}}
                />
              </a>
            </HomeNews>
          ))}
        </div>
      )}

      <div className="max-md:w-full text-center"> 
        <Link href="/news">
          <Button
            title="ყველა სიახლე"
            bgColor="bg-white"
            textColor="text-[#1b375d]"
            hoverText="text-white"
            hoverBg="bg-[#1b375d]"
          />
        </Link>
      </div>
    </div>
  );
};

export default News;
