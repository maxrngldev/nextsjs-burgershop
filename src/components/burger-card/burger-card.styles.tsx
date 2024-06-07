import Image from 'next/image';
import styled from 'styled-components';
import { Card } from '../ui/card/card.component';
import { CollapseText } from '../ui/collapse-text/collapse-text.component';

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
  border-radius: 0.9rem;
  aspect-ratio: 1;
  object-fit: cover;
`;

export const BurgerCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BurgerCardTitle = styled.h3`
  font-size: 2.2rem;
  color: var(--color-primary);
`;

export const BurgerCardPrice = styled.span`
  font-size: 1.6rem;
  color: var(--color-green);
`;

export const BurgerCardCollapseDescription = styled(CollapseText)`
  font-size: 1.6rem;
`;
