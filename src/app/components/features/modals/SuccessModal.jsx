// src/components/SuccessModal.jsx
import React from 'react';

const SuccessModal = ({ showModal, setShowModal, message }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 backdrop-blur-lg flex 
      items-center justify-center p-4 z-50 transition-opacity duration-300"
      onClick={() => setShowModal(false)}
    >
      <div
        className="rounded-xl shadow-2xl bg-white z-50
        w-full max-w-sm p-8 relative text-center transform scale-95 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
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
        <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
        <p className="text-gray-700">{message}</p>
        <div className="mt-6">
          <button
            onClick={() => setShowModal(false)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;