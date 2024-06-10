'use client';

import styled from 'styled-components';
import { Card } from '../ui/card/card.component';
import Image from 'next/image';
import { MEDIA_QUERY } from '@/lib/constants/media-queries';

export const BurgerDetailsContainer = styled(Card)`
  display: grid;
  align-items: center;
  margin: 1rem auto 0;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 8rem 12rem 12rem 17rem;
  grid-template-areas: 'header price' 'image image' 'image image' 'description description';

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 8rem 12rem 12rem 17rem;
    grid-template-areas: 'header price' 'image image' 'image image' 'description description';
  }

  @media ${MEDIA_QUERY.MOBILE_LARGE} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 6rem 12rem 12rem 17rem;
  }

  @media ${MEDIA_QUERY.TABLET} {
    width: 82vw;

    grid-template-columns: 33vw 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'image header price' 'image description description';
  }

  @media ${MEDIA_QUERY.LAPTOP} {
    width: 60vw;
  }

  @media ${MEDIA_QUERY.LAPTOP_LARGE} {
    width: 60vw;
  }
`;

export const BurgerDetailsImg = styled(Image)`
  grid-area: image;
  justify-self: center;
  object-fit: cover;
  aspect-ratio: 1;
  border-radius: 0.9rem;
  max-width: 60vw;
  max-height: 60vw;

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    max-width: 21rem;
    max-height: 21rem;
  }

  @media ${MEDIA_QUERY.MOBILE_LARGE} {
    max-width: 23rem;
    max-height: 23rem;
  }

  @media ${MEDIA_QUERY.TABLET} {
    max-width: 33vw;
    max-height: 33vw;
  }
`;

export const BurgerDetailsHeader = styled.div`
  grid-area: header;
  justify-self: center;

  background-color: var(--color-background);
  padding: 0.5rem;
  border-radius: 0.9rem;
`;

export const BurgerName = styled.h3`
  font-size: 2rem;
  color: var(--color-primary);
`;

export const BurgerNutritionalValue = styled.p`
  font-size: 1.6rem;
  color: var(--color-primary-light);
`;

export const BurgerPrice = styled.p`
  font-size: 1.6rem;
  justify-self: center;
  background-color: var(--color-primary-light);
  color: var(--color-green);
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.9rem;
`;

export const BurgerDetailsBody = styled.div`
  grid-area: description;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1.6rem;
  height: 100%;

  @media ${MEDIA_QUERY.TABLET} {
    padding: 0 1rem;
  }
`;

export const BurgerDescription = styled.p`
  background-color: var(--color-primary-light);
  color: var(--color-black);
  padding: 0.5rem;
  border-radius: 0.9rem;
  font-size: 1.4rem;

  @media ${MEDIA_QUERY.LAPTOP} {
    font-size: 1.8rem;
  }
`;

export const BurgerDetailsCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;
