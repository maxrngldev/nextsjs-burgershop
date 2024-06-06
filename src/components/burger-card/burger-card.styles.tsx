import Image from 'next/image';
import styled from 'styled-components';
import { Card } from '../card/card.component';
import { CollapseText } from '../collapse-text/collapse-text.component';

export const BurgerCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  height: fit-content;
  position: relative;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }
`;

export const BurgerCardImg = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const BurgerCardTitle = styled.h3`
  font-size: 2.4rem;
`;

export const BurgerCardPrice = styled.span`
  font-size: 1.8rem;
`;

export const BurgerCardCollapseDescription = styled(CollapseText)`
  font-size: 1.6rem;
`;
