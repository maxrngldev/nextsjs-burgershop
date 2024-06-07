import { useRouter } from 'next/navigation';
import { Burger } from '@/models/Burgers';
import {
  BurgerCardContainer,
  BurgerCardImg,
  BurgerCardPrice,
  BurgerCardTitle,
  BurgerCardHeader,
  BurgerCardDescription,
} from './burger-card.styles';
import { Button } from '../ui/button/button.component';

interface BurgerCardProps {
  burger: Burger;
}

export function BurgerCard({
  burger: { name, description, image, price, slug },
}: BurgerCardProps) {
  const router = useRouter();
  return (
    <BurgerCardContainer>
      <BurgerCardImg
        src={image}
        height={200}
        width={250}
        alt='Title of image'
      />
      <BurgerCardHeader>
        <BurgerCardTitle>{name}</BurgerCardTitle>
        <BurgerCardPrice>
          <strong>$</strong> {price}
        </BurgerCardPrice>
      </BurgerCardHeader>

      <BurgerCardDescription>{description}</BurgerCardDescription>

      <Button $primary $expand onClick={() => router.push(`/details/${slug}`)}>
        View more
      </Button>
    </BurgerCardContainer>
  );
}
