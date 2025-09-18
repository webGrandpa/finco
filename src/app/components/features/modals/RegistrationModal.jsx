// src/components/features/modals/RegistrationModal.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../../ui/buttons/Button';
// import Loader from '../../loader/Loader';

const RegistrationModal = ({ showModal, setShowModal, setShowLoginModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  const handleRegister = async (e) => {
    e.preventDefault();
    setFormMessage({ type: '', text: '' });

    if (password !== confirmPassword) {
      setFormMessage({ type: 'error', text: "პაროლები არ ემთხვევა" });
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (email === 'taken@example.com') {
        throw new Error('ამ ელ-ფოსტით მომხმარებელი უკვე არსებობს');
      }

      setFormMessage({ type: 'success', text: 'რეგისტრაცია წარმატებით დასრულდა! ახლა შეგიძლიათ შეხვიდეთ.' });
      
      setTimeout(() => {
        setShowModal(false);
        setShowLoginModal(true);
      }, 2000);

    } catch (err) {
      setFormMessage({ type: 'error', text: err.message });
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && !isLoading) setShowModal(false);
    };
    if (showModal) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showModal, setShowModal, isLoading]);
  
  useEffect(() => {
    if (!showModal) {
      setTimeout(() => {
        setEmail(''); setPassword(''); setConfirmPassword('');
        setFormMessage({ type: '', text: '' }); setIsLoading(false);
      }, 300);
    }
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 backdrop-blur-lg flex items-center justify-center p-4 z-50" onClick={() => !isLoading && setShowModal(false)}>
      <div className='md:w-[100%] flex items-center justify-center'>
        <div className="rounded-xl shadow-2xl bg-white z-50 w-full max-w-lg p-8 relative" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setShowModal(false)} disabled={isLoading} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          </button>
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <Image src="/fincoLogo.svg" alt="Logo" width={160} height={40} className="mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">რეგისტრაციის ფორმა</h2>
            <p className="text-gray-500 text-sm mt-2">გთხოვთ შეიყვანოთ თქვენი მონაცემები</p>
          </div>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-1">ელექტრონული ფოსტა</label>
              <input type="email" id="reg-email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm" required disabled={isLoading} />
            </div>
            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-1">პაროლი</label>
              <input type="password" id="reg-password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm" required disabled={isLoading} />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">გაიმეორეთ პაროლი</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm" required disabled={isLoading} />
            </div>

            {formMessage.text && (
              <p className={`text-sm text-center ${formMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {formMessage.text}
              </p>
            )}

            <div className="pt-2 text-center text-sm">
              გაქვთ ანგარიში?
              <button type="button" className="text-blue-500 hover:underline pl-2 cursor-pointer" onClick={() => { setShowModal(false); setShowLoginModal(true); }}>
                შესვლა
              </button>
            </div>
            <div className='w-full text-center'>
              <Button
                title={isLoading ? "რეგისტრაცია..." : "რეგისტრაცია"}
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
                disabled={isLoading}
                textStart='center'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;