// src/components/BurgerOverlay.jsx
import React from 'react';
import { createPortal } from 'react-dom';

const BurgerOverlay = ({ isVisible }) => {
  if (!isVisible) return null;

  return createPortal(
    <div
      className="fixed inset-0 backdrop-blur-sm z-30 transition-opacity duration-500 ease-in-out"
    ></div>,
    document.body
  );
};

export default BurgerOverlay;