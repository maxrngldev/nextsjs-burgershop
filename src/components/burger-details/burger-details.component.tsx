'use client';

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
import { useBurgersStore } from '@/providers/burgers-store.provider';
import { IMAGES } from '@/lib/constants';

interface BurgerDetailsProps {
  burgerSlug: string;
}

export function BurgerDetails({ burgerSlug }: BurgerDetailsProps) {
  const burgers = useBurgersStore((state) => state.burgers);
  const addBurgerToCart = useBurgersStore((state) => state.addBurgerToCart);
  const router = useRouter();

  const burger = burgers.find((burger) => burger.slug === burgerSlug);

  if (!burger) {
    throw new Error('No burger found!');
  }

  return (
    <BurgerDetailsContainer>
      <BurgerDetailsImg
        src={burger.image}
        alt={burger.name}
        width={450}
        height={450}
        title={burger.name}
        placeholder='blur'
        blurDataURL={IMAGES.BLUR_PLACEHOLDER_PRIMARY}
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
