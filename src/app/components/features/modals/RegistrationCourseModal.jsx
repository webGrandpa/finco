// src/components/RegistrationCourseModal.jsx
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Button from '../../ui/buttons/Button';

const RegistrationCourseModal = ({ showModal, setShowModal }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');

  // Status: 'idle' | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistrationRequest = (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const templateParams = {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      reason: reason,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('success');
          
          // Optional: Close modal automatically after 3 seconds
          // setTimeout(() => setShowModal(false), 4000);
        },
        (error) => {
          console.error('Email send failed:', error);
          setStatus('error');
          setErrorMessage('დაფიქსირდა შეცდომა სერვერზე. გთხოვთ სცადოთ მოგვიანებით.');
        }
      );
  };

  // Reset form when modal closes/opens
  useEffect(() => {
    if (!showModal) {
      // Wait a bit for transition to finish before resetting state
      setTimeout(() => {
        setStatus('idle');
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');
        setReason('');
        setErrorMessage('');
      }, 300);
    }
  }, [showModal]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setShowModal]);

  return (
    <div
      className={`fixed inset-0 backdrop-blur-lg flex items-center justify-center p-4 z-50 transition-opacity duration-300 
      ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={() => setShowModal(false)}
    >
      <div className='md:w-[100%] flex items-center justify-center'>
        <div
          className={`rounded-xl shadow-2xl bg-white z-50 w-full max-w-lg p-8 relative transform transition-all duration-300 
          ${showModal ? 'scale-100' : 'scale-95'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* ----------------- SUCCESS VIEW ----------------- */}
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-fadeIn">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">მადლობა!</h3>
              <p className="text-gray-600 mb-8 max-w-xs">
                თქვენი განაცხადი მიღებულია. ჩვენი წარმომადგენელი მალე დაგიკავშირდებათ.
              </p>
              <div onClick={() => setShowModal(false)}>
                 <Button
                  title="დახურვა"
                  bgColor="bg-green-600"
                  textColor="text-white"
                  hoverText="text-green-600"
                  hoverBg="bg-white"
                  textStart='center'
                />
              </div>
            </div>
          ) : (
            
          /* ----------------- FORM VIEW ----------------- */
            <>
              <div className="flex flex-col items-center justify-center text-center mb-6">
                <Image src="/fincoLogo.svg" alt="Logo" width={192} height={48} className="mb-4" />
                <h2 className="text-2xl font-bold text-gray-800">კურსზე რეგისტრაცია</h2>
                <p className="text-gray-500 text-sm mt-2">შეავსეთ სარეგისტრაციო ფორმა და ჩვენ დაგიკავშირდებით</p>
              </div>

              <form onSubmit={handleRegistrationRequest} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">სახელი</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#1b375d] focus:border-[#1b375d] outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-1">გვარი</label>
                  <input
                    type="text"
                    id="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#1b375d] focus:border-[#1b375d] outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ელექტრონული ფოსტა</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#1b375d] focus:border-[#1b375d] outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">მობილური ნომერი</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#1b375d] focus:border-[#1b375d] outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">რატომ გსურთ კურსის გავლა?</label>
                  <textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#1b375d] focus:border-[#1b375d] outline-none transition-all"
                    required
                  />
                </div>

                {/* ERROR MESSAGE BOX */}
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-200 text-center">
                    {errorMessage}
                  </div>
                )}

                <div className='w-full text-center flex items-center justify-center pt-2'>
                  <Button
                    title={status === 'loading' ? "იგზავნება..." : "რეგისტრაცია"}
                    bgColor={status === 'loading' ? "bg-gray-400" : "bg-[#1b375d]"}
                    textColor="text-white"
                    hoverText={status === 'loading' ? "text-white" : "text-[#1b375d]"}
                    hoverBg={status === 'loading' ? "bg-gray-400" : "bg-white"}
                    textStart='center'
                    disabled={status === 'loading'}
                  />
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationCourseModal;