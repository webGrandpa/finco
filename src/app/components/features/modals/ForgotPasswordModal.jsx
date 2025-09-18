// src/components/features/modals/ForgotPasswordModal.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../ui/buttons/Button';

const ForgotPasswordModal = ({ showModal, setShowModal, setShowLoginModal }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  const handleReset = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage({ type: '', text: '' });

    // fetcgh API call simulation
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); 

      setFormMessage({ 
        type: 'success', 
        text: 'პაროლის აღდგენის ინსტრუქცია გაიგზავნა თქვენს ელ-ფოსტაზე.' 
      });
      setEmail(''); 
    } catch (error) {
      setFormMessage({ type: 'error', text: 'დაფიქსირდა შეცდომა. სცადეთ კიდევ ერთხელ.' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    if (showModal) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showModal, setShowModal]);

  useEffect(() => {
    if (!showModal) {
      setTimeout(() => {
        setEmail('');
        setFormMessage({ type: '', text: '' });
        setIsLoading(false);
      }, 300);
    }
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 backdrop-blur-lg flex items-center justify-center p-4 z-50"
      onClick={() => setShowModal(false)}
    >
      <div className='md:w-[100%] flex items-center justify-center'>
        <div
          className="rounded-xl shadow-2xl bg-white z-50 w-full max-w-lg p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
          </button>
          <div className="flex flex-col items-start justify-center text-start mb-6">
            <Image src="/fincoLogo.svg" alt="Logo" width={160} height={40} className="mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">დაგავიწყდათ პაროლი?</h2>
            <p className="text-gray-500 text-sm mt-2">შეიყვანეთ თქვენი ელ-ფოსტა რომელიც დაკავშირებულია თქვენს ანგარიშთან.</p>
          </div>
          
          <form onSubmit={handleReset} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ელექტრონული ფოსტა</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                required
                disabled={isLoading}
              />
            </div>

            {formMessage.text && (
              <p className={`text-sm ${formMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {formMessage.text}
              </p>
            )}

            <div className='w-full text-center'>
              <Button
                title={isLoading ? "გაგზავნა..." : "გაგზავნა"}
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
                disabled={isLoading}
                textStart='center'
              />
            </div>
          </form>

          <div className="mt-6 text-center text-sm flex gap-5 justify-center items-center">
            <Link href="/" className="text-gray-600 hover:text-blue-500 underline cursor-pointer" onClick={() => setShowModal(false)}>
              მთავარზე დაბრუნება
            </Link>
            <button className="text-gray-600 hover:text-blue-500 underline cursor-pointer" onClick={() => { setShowModal(false); setShowLoginModal(true); }}>
              შესვლა
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;