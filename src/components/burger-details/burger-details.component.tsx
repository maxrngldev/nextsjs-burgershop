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

interface BurgerDetailsProps {
  burger: Burger;
}
export function BurgerDetails({
  burger: { name, price, image, description, calorie },
}: BurgerDetailsProps) {
  const router = useRouter();

  return (
    <BurgerDetailsContainer>
      <BurgerDetailsImg
        src={image}
        alt={`Image for ${name}`}
        width={450}
        height={450}
      />

      <BurgerHeaderContainer>
        <BurgerName>{name}</BurgerName>
        <BurgerNutritionalValue>Calories - {calorie}</BurgerNutritionalValue>
      </BurgerHeaderContainer>

      <BurgerPrice>${price}</BurgerPrice>

      <BurgerDescriptionContainer>
        <BurgerDescription>{description}</BurgerDescription>
        <BurgerDetailsCTAContainer>
          <Button $primary $animated>
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
