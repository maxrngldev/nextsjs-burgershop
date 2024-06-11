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
import Link from 'next/link';

interface BurgerCardProps {
  burger: Burger;
}

export function BurgerCard({
  burger: { name, description, image, price, slug },
}: BurgerCardProps) {
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

      <Link
        href={`/details/${slug}`}
        style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
      >
        <Button $primary $expand>
          View more
        </Button>
      </Link>
    </BurgerCardContainer>
  );
}
