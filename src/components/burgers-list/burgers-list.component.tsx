import { Burger } from '@/models/Burgers';
import { BurgerList, BurgerListTitle } from './burger-list.styles';
import { BurgerCard } from '../burger-card/burger-card.component';

export interface BurgersListProps {
  burgers: Burger[];
}

export function BurgersList({ burgers }: BurgersListProps) {
  return (
    <>
      <BurgerListTitle>
        🍔
        {burgers.length
          ? 'Look at our delicious menu!'
          : 'We are still cooking, please come back later'}
        🥤
      </BurgerListTitle>
      <hr />
      <BurgerList>
        {burgers.map((burger) => (
          <BurgerCard key={burger.id} burger={burger} />
        ))}
      </BurgerList>
    </>
  );
}
