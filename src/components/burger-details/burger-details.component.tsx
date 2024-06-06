import Image from 'next/image';
import { Burger } from '@/models/Burgers';
import styles from './burger-details.module.css';

interface BurgerDetailsProps {
  burger: Burger;
}
export function BurgerDetails({
  burger: { name, price, image, description, calorie },
}: BurgerDetailsProps) {
  return (
    <div className={styles['burger-details']}>
      <Image
        src={image}
        alt={`Image for ${name}`}
        width={400}
        height={400}
        className={styles['burger-details__img']}
      />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{description}</p>
      <p>Nutriotional value: Calories - {calorie}</p>

      <button>Add to Cart</button>
    </div>
  );
}
