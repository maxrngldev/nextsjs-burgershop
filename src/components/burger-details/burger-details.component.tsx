'use client';

import { useRouter } from 'next/navigation';
import {
  BurgerDescription,
  BurgerDetailsBody,
  BurgerDetailsContainer,
  BurgerDetailsCTAContainer,
  BurgerDetailsImg,
  BurgerDetailsHeader,
  BurgerName,
  BurgerNutritionalValue,
  BurgerPrice,
} from './burger-details.styles';
import { useBurgersStore } from '@/providers/burgers-store.provider';
import { IMAGES } from '@/lib/constants/images';
import { Button } from '../ui/button/button.component';

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
      <BurgerDetailsHeader>
        <BurgerName>{burger.name}</BurgerName>

        <BurgerNutritionalValue>
          Calories - {burger.calorie}
        </BurgerNutritionalValue>
      </BurgerDetailsHeader>
      <BurgerPrice>${burger.price}</BurgerPrice>
      <BurgerDetailsImg
        src={burger.image}
        alt={burger.name}
        width={450}
        height={450}
        title={burger.name}
        placeholder='blur'
        blurDataURL={IMAGES.BLUR_PLACEHOLDER_PRIMARY}
      />

      <BurgerDetailsBody>
        <BurgerDescription>{burger.description}</BurgerDescription>
        <BurgerDetailsCTAContainer>
          <Button
            $primary
            $expand
            $animated
            onClick={() => addBurgerToCart(burger)}
          >
            Add to Cart
          </Button>
          <Button $secondary $expand onClick={() => router.push('/')}>
            Go back
          </Button>
        </BurgerDetailsCTAContainer>
      </BurgerDetailsBody>
    </BurgerDetailsContainer>
  );
}
