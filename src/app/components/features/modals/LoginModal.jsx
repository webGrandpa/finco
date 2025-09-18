// src/components/features/modals/LoginModal.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../../ui/buttons/Button';

const LoginModal = ({ showModal, setShowModal, setShowRegistrationModal, setShowForgotPasswordModal, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // fetch.
      if (password === 'password123') {
        onLoginSuccess(email);
        setEmail('');
        setPassword('');
      } else {
        throw new Error('Неверный email или пароль');
      }
    } catch (err) {
      setError(err.message);
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
        setPassword('');
        setError('');
        setIsLoading(false);
      }, 300);
    }
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 backdrop-blur-lg flex items-center justify-center p-4 z-50" onClick={() => setShowModal(false)}>
      <div className='md:w-[100%] flex items-center justify-center'>
        <div className="rounded-xl shadow-2xl bg-white z-50 w-full max-w-lg p-8 relative" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          </button>
          <div className="w-full flex justify-center mb-6">
            <Image src="/fincoLogo.svg" alt="Logo" width={160} height={40} />
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email-login" className="block text-sm font-medium text-gray-700 mb-1">ელექტრონული ფოსტა</label>
              <input
                type="email" id="email-login" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm" required disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password-login" className="block text-sm font-medium text-gray-700 mb-1">პაროლი</label>
              <input
                type="password" id="password-login" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm" required disabled={isLoading}
              />
            </div>
            
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}

            <div className="flex justify-between items-center text-sm">
              <button type="button" className="text-gray-600 hover:text-blue-500 underline" onClick={() => { setShowModal(false); setShowForgotPasswordModal(true); }}>
                დაგავიწყდათ პაროლი?
              </button>
              <button type="button" className="text-gray-600 hover:text-blue-500 underline" onClick={() => { setShowModal(false); setShowRegistrationModal(true); }}>
                რეგისტრაცია
              </button>
            </div>
            <div className='w-full text-center'>
              <Button
                title={isLoading ? "შესვლა..." : "შესვლა"}
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;