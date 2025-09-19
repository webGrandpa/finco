"use client";

import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../layout/NavBar';
import Button from '../ui/buttons/Button';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../ui/headerGradient.module.css';
import LoginModal from '../features/modals/LoginModal';
import RegistrationModal from '../features/modals/RegistrationModal';
import ForgotPasswordModal from '../features/modals/ForgotPasswordModal';
import BurgerOverlay from '../ui/BurgerOverlay';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  useEffect(() => {
    const isAnyModalOpen = showLoginModal || showRegistrationModal || showForgotPasswordModal;

    if (menuOpen || isAnyModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    const handleOutsideClick = (event) => {
      const isMenuButton = event.target.closest('button[aria-label="Toggle Menu"]');
      if (menuRef.current && !menuRef.current.contains(event.target) && !isMenuButton) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen, showLoginModal, showRegistrationModal, showForgotPasswordModal, menuRef]);

  return (
    <>
      <div className={`header w-full h-[80px] px-6 md:px-10 lg:px-20
       flex items-center justify-between fixed top-0 left-0 z-50 ${styles.headerGradient} shadow-md`}>
        <Link href="/">
          <Image src="/fincoLogo.svg" alt="FinCo Logo" width={170} height={50} className="h-[50px] w-auto" />
        </Link>
        <div className="hidden lg:flex items-center space-x-8 max-md:w-full text-center justify-between w-[75%]">
          <NavBar />
          {isLoggedIn ? (
            <div className="flex items-center flex-col space-x-2">
              <Link href="/user-profile" className="flex items-center space-x-2 rounded-lg hover:bg-gray-100 transition-colors">
                <img src={'/userProfileIcon.svg'} alt="User Profile" className="h-10 w-10" />
                <span className="text-[#1b375d] font-semibold">{userEmail}</span>
              </Link>
              <button
                className=' hover:underline hover:text-blue-950 text-blue-500 hover:cursor-pointer'
                onClick={handleLogout}
              >გამოსვლა</button>
            </div>
          ) : (
            <div className="flex space-x-4 max-md:w-full text-center">
              <Button
                title="შესვლა"
                onClick={() => setShowLoginModal(true)}
                bgColor="bg-white"
                textColor="text-[#1b375d]"
                hoverText="text-white"
                hoverBg="bg-[#1b375d]"
              />
              <Button
                title="რეგისტრაცია"
                onClick={() => setShowRegistrationModal(true)}
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
              />
            </div>
          )}
        </div>
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-[#1b375d] text-4xl">
            {menuOpen ? <AiOutlineClose /> : <HiMenuAlt3 />}
          </button>
        </div>
        <div
          ref={menuRef}
          className={`
            fixed top-0 right-0 w-[71%] xs:w-1/2 sm:w-1/3 h-full bg-white transition-transform duration-500 transform
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden z-40
            flex flex-col items-center p-6 space-y-4 pt-20 shadow-lg
          `}>
          <NavBar onLinkClick={() => setMenuOpen(false)} />
          <div className="flex flex-col space-y-4 items-start justify-start w-full pl-6 md:px-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-2 w-full">
                  <img src={'/userProfileIcon.svg'} alt="User Profile" className="h-10 w-10" />
                  <span className="text-[#1b375d] font-semibold text-sm break-all">{userEmail}</span>
                </div>
                <Button
                  title="გამოსვლა"
                  onClick={handleLogout}
                  bgColor="bg-white"
                  textColor="text-[#1b375d]"
                  hoverText="text-white"
                  hoverBg="bg-[#1b375d]"
                />
              </>
            ) : (
              <>
                <Button
                  title="შესვლა"
                  onClick={() => {
                    setShowLoginModal(true);
                    setMenuOpen(false);
                  }}
                  bgColor="bg-white"
                  textColor="text-[#1b375d]"
                  hoverText="text-white"
                  hoverBg="bg-[#1b375d]"
                />
                <Button
                  title="რეგისტრაცია"
                  onClick={() => {
                    setShowRegistrationModal(true);
                    setMenuOpen(false);
                  }}
                  bgColor="bg-[#1b365d]"
                  textColor="text-white"
                  hoverText="text-[#1b375d]"
                  hoverBg="bg-white"
                />
              </>
            )}
          </div>
        </div>
      </div>

      <BurgerOverlay isVisible={menuOpen} />

      <LoginModal
        showModal={showLoginModal}
        setShowModal={setShowLoginModal}
        setShowForgotPasswordModal={setShowForgotPasswordModal}
        setShowRegistrationModal={setShowRegistrationModal}
        onLoginSuccess={handleLoginSuccess}
      />

      <RegistrationModal
        showModal={showRegistrationModal}
        setShowModal={setShowRegistrationModal}
        setShowLoginModal={setShowLoginModal}
      />

      <ForgotPasswordModal
        showModal={showForgotPasswordModal}
        setShowModal={setShowForgotPasswordModal}
        setShowLoginModal={setShowLoginModal}
      />
    </>
  );
};

export default Header;