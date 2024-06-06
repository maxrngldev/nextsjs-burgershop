'use client';

import Image from 'next/image';
import { Burger } from '@/app/_models/Burgers';
import testImg from './BEWD.jpg';
import styles from './burger-card.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface BurgerCardProps {
  burger: Burger;
}

export function BurgerCard({
  burger: { id, title, img, price, description },
}: BurgerCardProps) {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  const aboveWordLimit = description.split(' ').length > 8;
  const collapsedDescription = `${description
    .split(' ')
    .splice(0, 9)
    .join(' ')}...`;

  function handleExpandDescription(event: React.MouseEvent<HTMLSpanElement>) {
    event.stopPropagation();
    setShowMore((value) => !value);
  }

  return (
    <div
      className={styles['burger-card']}
      onClick={() => router.push(`/details/${id}`)}
    >
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
            onClick={handleExpandDescription}
            className={styles['burger-card__show-more']}
          >
            {!showMore ? ' Show more' : ' Show less'}
          </span>
        )}
      </p>
    </div>
  );
}
