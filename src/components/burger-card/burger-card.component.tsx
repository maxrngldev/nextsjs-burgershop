import { useRouter } from 'next/navigation';
import { Burger } from '@/models/Burgers';
import {
  BurgerCardContainer,
  BurgerCardCollapseDescription,
  BurgerCardImg,
  BurgerCardPrice,
  BurgerCardTitle,
  BurgerCardHeader,
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

      <BurgerCardCollapseDescription wordLimit={9} text={description} />

      <Button $primary $expand onClick={() => router.push(`/details/${slug}`)}>
        View more
      </Button>
    </BurgerCardContainer>
  );
}
