// src/components/AnimatedCounter.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../../lib/hooks/useCountUp.js';

const AnimatedCounter = ({ end, duration = 2000, className, suffix = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const count = useCountUp(end, duration, inView);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;