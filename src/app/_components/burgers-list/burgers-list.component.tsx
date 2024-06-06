import { Burger } from '@/app/_models/Burgers';
import { BurgerCard } from '../burger-card/burger-card.component';
import styles from './burgers-list.module.css';

export interface BurgersListProps {
  burgers: Burger[];
}

export function BurgersList({ burgers }: BurgersListProps) {
  return (
    <>
      <h1 className={styles['burger-list__title']}>
        🍔
        {burgers.length
          ? 'Look at our delicious menu!'
          : 'We are still cooking, please come back later'}
        🥤
      </h1>
      <hr />
      <div className={styles['burgers-list']}>
        {burgers.map((burger) => (
          <BurgerCard key={burger.id} burger={burger} />
        ))}
      </div>
    </>
  );
}
