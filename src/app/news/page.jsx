"use client";

import React, { useState, useEffect } from 'react';
import SectionHeaders from "../components/ui/SectionHeaders";
import NewsCard from "../components/ui/cards/NewsCard";
import Button from "../components/ui/buttons/Button";
import ButtonWithArrow from '../components/ui/buttons/ButtonWithArrow';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 10;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/news');
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

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 py-10 px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f] mt-20 min-h-screen">
      <SectionHeaders
        header="სტატიები და სიახლეები"
        paragraph="უახლესი ინფორმაცია On.ge-დან"
        hasDivider={true}
        padding="py-0"
        gap='1'
      />

      {loading && (
        <p className="my-8 text-lg text-gray-600">
          სიახლეების ჩამოტვირთვა...
        </p>
      )}

      {error && !loading && (
          <p className="my-8 text-lg text-red-600">{error}</p>
      )}

      {!loading && !error && articles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {currentArticles.map((item, index) => (
              <NewsCard
                key={index}
                image={item.enclosure?.url}
                header={item.title}
                paragraph={item.contentSnippet}
                date={new Date(item.isoDate).toLocaleDateString("ka-GE")}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    title="სრულად ნახვა"
                    bgColor="bg-[#1b375d]"
                    textColor="text-white"
                    hoverText="text-[#1b375d]"
                    hoverBg="bg-white"
                  />
                </a>
              </NewsCard>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-8 w-full">
            <ButtonWithArrow
              buttonText="წინა"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              showArrow={false}
            />
            <span className="mt-2 text-lg font-semibold text-[#1b375d]">
              {currentPage} / {totalPages}
            </span>
            <ButtonWithArrow
              buttonText="შემდეგი"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              showArrow={false}
            />
          </div>
        </>
      ) : (
        !loading && <p className="my-8 text-lg text-gray-600">სიახლეები ვერ მოიძებნა.</p>
      )}
    </div>
  );
};

export default NewsPage;
