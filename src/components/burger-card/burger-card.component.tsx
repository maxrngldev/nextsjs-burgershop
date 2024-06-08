import { useRouter } from 'next/navigation';
import { Burger } from '@/models/Burgers';
import {
  BurgerCardContainer,
  BurgerCardImg,
  BurgerCardPrice,
  BurgerCardTitle,
  BurgerCardHeader,
  BurgerCardDescription,
  BurgerCardBody,
} from './burger-card.styles';
import { Button } from '../ui/button/button.component';
import { IMAGES } from '@/lib/constants/images';

interface BurgerCardProps {
  burger: Burger;
}

export function BurgerCard({
  burger: { name, description, image, price, slug },
}: BurgerCardProps) {
  const router = useRouter();
  return (
    <BurgerCardContainer>
      <BurgerCardHeader>
        <BurgerCardTitle>{name}</BurgerCardTitle>
        <BurgerCardPrice>
          <strong>$</strong> {price}
        </BurgerCardPrice>
      </BurgerCardHeader>

      <BurgerCardBody>
        <BurgerCardImg
          src={image}
          height={200}
          width={250}
          alt={name}
          title={name}
          placeholder='blur'
          blurDataURL={IMAGES.BLUR_PLACEHOLDER_PRIMARY}
        />

        <BurgerCardDescription>{description}</BurgerCardDescription>
      </BurgerCardBody>

      <Button $primary $expand onClick={() => router.push(`/details/${slug}`)}>
        View more
      </Button>
    </BurgerCardContainer>
  );
}
