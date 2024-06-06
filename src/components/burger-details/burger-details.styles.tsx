'use client';

import styled from 'styled-components';
import { Card } from '../card/card.component';
import Image from 'next/image';

export const BurgerDetailsContainer = styled(Card)`
  display: grid;
  grid-template-columns: 25rem 25rem;
  grid-template-rows: 25rem 25rem 8rem 8rem;
  grid-template-areas: 'image image' 'image image' 'header price' 'description description';
  align-items: center;
`;

export const BurgerDetailsImg = styled(Image)`
  grid-area: image;
  justify-self: center;
  object-fit: cover;
  aspect-ratio: 1;
  border-radius: 0.9rem;
`;

export const BurgerHeaderContainer = styled.div`
  grid-area: header;
  justify-self: center;
`;

export const BurgerName = styled.h3`
  font-size: 2.4rem;
  color: var(--color-primary);
`;

export const BurgerNutritionalValue = styled.p`
  font-size: 2rem;
  color: var(--color-primary-light);
`;

export const BurgerPrice = styled.p`
  grid-area: price;
  font-size: 2rem;
  justify-self: center;
  color: var(--color-green);
  font-weight: bold;
`;

export const BurgerDescriptionContainer = styled.div`
  grid-area: description;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BurgerDescription = styled.p`
  font-size: 1.8rem;
  width: 70%;
`;
