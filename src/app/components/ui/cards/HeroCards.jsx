// HeroCards

"use client";

import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../../../lib/hooks/useCountUp';
import Image from 'next/image';

const HeroCards = ({
  cardImage,
  numTitle,
  textTitle,
  text,
  variant = 'statistic',
  bgColor = '',
  itemsCenter = 'items-start',
  whitespace = "whitespace-normal",
  animateCount = false,
  duration = 1500,
}) => {
  const variants = {
    statistic: {
      container: 'md:justify-start md:items-start items-center py-2 rounded-lg text-center',
      image: 'w-12 h-12 object-contain mb-2',
      title: 'text-lg font-bold',
      subtitle: 'text-sm text-gray-500 md:whitespace-nowrap',
      description: 'hidden',
    },
    teamMember: {
      container: 'flex-col justify-start items-center py-6 px-4 text-center shadow-lg rounded-lg h-full',
      image: 'w-24 h-24 object-cover rounded-full mb-4',
      title: 'text-lg font-bold',
      subtitle: 'text-sm text-gray-500',
      description: 'text-sm text-gray-600 mt-2',
    },
    homepage: {
      container: 'flex flex-col justify-center w-full items-center py-2 px-4 text-center shadow-lg rounded-lg h-full',
      image: 'w-12 h-12 object-contain mb-2',
      title: 'text-2xl font-bold',
      subtitle: 'text-sm text-gray-500 md:whitespace-nowrap',
      description: 'hidden'
    }
  };

  const styles = variants[variant] || variants.statistic;
  

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const numberToEnd = parseInt(numTitle) || 0;
  const suffix = numTitle.toString().replace(numberToEnd.toString(), '').trim();

  const count = useCountUp(numberToEnd, duration, animateCount && inView);

  return (
    <div ref={animateCount ? ref : null} className={clsx('flex w-full gap-2', styles.container, bgColor)}>
      {cardImage && (
        <Image src={cardImage} alt={numTitle || textTitle} width={48} height={48} className={styles.image} />
      )}

      <div className={`flex flex-col ${itemsCenter}  max-w-[150px] md:max-w-full`}>
        <span className={`${styles.title} ${whitespace}`}>
          {animateCount ? `${count}${suffix}` : numTitle}
        </span>
        <span className={`${styles.subtitle} ${whitespace}`}>{textTitle}</span>
      </div>
      {text && (
        <p className={styles.description}>{text}</p>
      )}
    </div>
  );
};

export default HeroCards;