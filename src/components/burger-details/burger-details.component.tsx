'use client';

import { Burger } from '@/models/Burgers';
import {
  BurgerDescription,
  BurgerDescriptionContainer,
  BurgerDetailsContainer,
  BurgerDetailsCTAContainer,
  BurgerDetailsImg,
  BurgerHeaderContainer,
  BurgerName,
  BurgerNutritionalValue,
  BurgerPrice,
} from './burger-details.styles';
import { Button } from '../ui/button/button.component';
import { useRouter } from 'next/navigation';
import { useBurgersStore } from '@/stores/burgers.store';

interface BurgerDetailsProps {
  burger: Burger;
}
export function BurgerDetails({ burger }: BurgerDetailsProps) {
  const addBurgerToCart = useBurgersStore((state) => state.addBurgerToCart);

  const router = useRouter();

  return (
    <BurgerDetailsContainer>
      <BurgerDetailsImg
        src={burger.image}
        alt={`Image for ${name}`}
        width={450}
        height={450}
      />

      <BurgerHeaderContainer>
        <BurgerName>{burger.name}</BurgerName>
        <BurgerNutritionalValue>
          Calories - {burger.calorie}
        </BurgerNutritionalValue>
      </BurgerHeaderContainer>

      <BurgerPrice>${burger.price}</BurgerPrice>

      <BurgerDescriptionContainer>
        <BurgerDescription>{burger.description}</BurgerDescription>
        <BurgerDetailsCTAContainer>
          <Button $primary $animated onClick={() => addBurgerToCart(burger)}>
            Add to Cart
          </Button>
          <Button $secondary onClick={() => router.push('/')}>
            Go back
          </Button>
        </BurgerDetailsCTAContainer>
      </BurgerDescriptionContainer>
    </BurgerDetailsContainer>
  );
}
