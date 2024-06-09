'use client';

import styled from 'styled-components';
import { Card } from '../ui/card/card.component';
import Image from 'next/image';
import { MEDIA_QUERY } from '@/lib/constants/media-queries';

export const BurgerDetailsContainer = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25rem 25rem 8rem 10rem;
  grid-template-areas: 'header price' 'image image' 'image image' 'description description';
  align-items: center;
  margin: 1rem auto 0;

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 6rem 10rem 10rem 17rem;
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

  @media ${MEDIA_QUERY.LAPTOP_LARGE} {
    width: 50vw;
    grid-template-columns: 25vw 1fr 1fr;
  }
`;

export const BurgerDetailsImg = styled(Image)`
  grid-area: image;
  justify-self: center;
  object-fit: cover;
  aspect-ratio: 1;
  border-radius: 0.9rem;

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

  @media ${MEDIA_QUERY.LAPTOP_LARGE} {
    max-width: 20vw;
    max-height: 20vw;
  }
`;

export const BurgerDetailsHeader = styled.div`
  grid-area: header;
  justify-self: center;
`;

export const BurgerName = styled.h3`
  font-size: 2.4rem;
  color: var(--color-primary);

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    font-size: 2rem;
  }
`;

export const BurgerNutritionalValue = styled.p`
  font-size: 2rem;
  color: var(--color-primary-light);

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    font-size: 1.6rem;
  }
`;

export const BurgerPrice = styled.p`
  font-size: 2rem;
  justify-self: center;
  color: var(--color-green);

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    font-size: 1.6rem;
  }
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
    padding: 1rem;
  }
`;

export const BurgerDescription = styled.p`
  background-color: var(--color-primary-light);
  color: var(--color-black);
  padding: 0.5rem;
  border-radius: 0.9rem;

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    font-size: 1.4rem;
  }

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
