'use client';

import Image from 'next/image';
import { Burger } from '@/app/_models/Burgers';
import testImg from './BEWD.jpg';
import styles from './burger-card.module.css';
import { useState } from 'react';

interface BurgerCardProps {
  burger: Burger;
}

export function BurgerCard({
  burger: { title, img, price, description },
}: BurgerCardProps) {
  const [showMore, setShowMore] = useState(false);

  const aboveWordLimit = description.split(' ').length > 8;
  const collapsedDescription = `${description
    .split(' ')
    .splice(0, 9)
    .join(' ')}...`;

  return (
    <div className={styles['burger-card']}>
      <Image
        className={styles['burger-card__img']}
        src={testImg}
        height={200}
        width={250}
        alt='Title of image'
      />
      <h3 className={styles['burger-card__title']}>{title}</h3>
      <span className={styles['burger-card__price']}>${price}</span>
      <p className={styles['burger-card__description']}>
        {!aboveWordLimit
          ? description
          : showMore
          ? description
          : collapsedDescription}

        {aboveWordLimit && (
          <span
            onClick={() => setShowMore((value) => !value)}
            className={styles['burger-card__show-more']}
          >
            {!showMore ? ' Show more' : ' Show less'}
          </span>
        )}
      </p>
    </div>
  );
}
