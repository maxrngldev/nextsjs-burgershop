import { useRouter } from 'next/navigation';
import { Burger } from '@/app/_models/Burgers';
import {
  BurgerCardContainer,
  BurgerCardCollapseDescription,
  BurgerCardImg,
  BurgerCardPrice,
  BurgerCardTitle,
} from './burger-card.styles';

interface BurgerCardProps {
  burger: Burger;
}

export function BurgerCard({
  burger: { name, description, image, price, slug },
}: BurgerCardProps) {
  const router = useRouter();

  return (
    <BurgerCardContainer onClick={() => router.push(`/details/${slug}`)}>
      <BurgerCardImg
        src={image}
        height={200}
        width={250}
        alt='Title of image'
      />
      <BurgerCardTitle>{name}</BurgerCardTitle>
      <BurgerCardPrice>${price}</BurgerCardPrice>

      <BurgerCardCollapseDescription wordLimit={9} text={description} />
    </BurgerCardContainer>
  );
}
