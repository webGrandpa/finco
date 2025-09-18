// src/components/ConsultationModal.jsx
import React, { useState, useEffect } from 'react';
import Button from '../../ui/buttons/Button';


const ConsultationModal = ({ showModal, setShowModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleConsultationRequest = (e) => {
    e.preventDefault();
    console.log('კონსულტაციის მოთხოვნა:', { name, email, phone, service, message });
        //ფორმის გასაგზავნი ლოგიკა    
        // setShowModal(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
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
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4
            cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <img src={'/fincoLogo.svg'} alt="Logo" className="w-48 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              კონსულტაციის მოთხოვნა
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              შეავსეთ მონაცემების დაფა და ჩვენ დაგიკავშირდებით უახლოეს დროში
            </p>
          </div>
          <form onSubmit={handleConsultationRequest} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                სახელი
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                ელექტრონული ფოსტა
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                ტელეფონის ნომერი (არასავალდებულო)
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                წერილი (არასავალდებულო)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className='w-full text-center'>
              <Button
                title="მოთხოვნის გაგზავნა"
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;