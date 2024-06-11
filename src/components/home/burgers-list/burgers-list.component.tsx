'use client';

import {
  BurgerList,
  BurgerListContainer,
  BurgerListTitle,
} from './burger-list.styles';
import { BurgerCard } from '../burger-card/burger-card.component';
import { LoaderSpinner } from '../../ui/loader-spinner/loader-spinner.component';
import { useBurgersStore } from '@/providers/burgers-store.provider';
import { Burger } from '@/models/Burgers';

interface BurgersListProps {
  burgers: Burger[];
}

export function BurgersList({ burgers }: BurgersListProps) {
  const setBurgers = useBurgersStore((state) => state.setBurgers);

  setBurgers(burgers);

  return (
    <BurgerListContainer>
      <BurgerListTitle>
        🍔
        {burgers.length
          ? 'Look at our delicious menu!'
          : 'We are still cooking, please come back later'}
        🥤
      </BurgerListTitle>
      <hr />
      {!burgers.length && <LoaderSpinner />}
      <BurgerList>
        {burgers.map((burger) => (
          <BurgerCard key={burger.id} burger={burger} />
        ))}
      </BurgerList>
    </BurgerListContainer>
  );
}
