import { Burger } from '@/models/Burgers';
import {
  BurgerDescription,
  BurgerDescriptionContainer,
  BurgerDetailsContainer,
  BurgerDetailsImg,
  BurgerHeaderContainer,
  BurgerName,
  BurgerNutritionalValue,
  BurgerPrice,
} from './burger-details.styles';

interface BurgerDetailsProps {
  burger: Burger;
}
export function BurgerDetails({
  burger: { name, price, image, description, calorie },
}: BurgerDetailsProps) {
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
        <button>Add to Cart</button>
      </BurgerDescriptionContainer>
    </BurgerDetailsContainer>
  );
}
