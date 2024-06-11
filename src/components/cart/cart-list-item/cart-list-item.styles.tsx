'use client';

import { MEDIA_QUERY } from '@/lib/constants/media-queries';
import Image from 'next/image';
import styled from 'styled-components';

export const CartListItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.9rem;
  background-color: var(--color-primary-light);
  padding: 1rem 0;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: var(--color-primary);
  }
`;

export const CartListItemImg = styled(Image)`
  grid-area: image;
  justify-self: center;
  border-radius: 50%;
  aspect-ratio: 1;
  object-fit: cover;
  width: 27vw;
  height: 27vw;

  @media ${MEDIA_QUERY.MOBILE_LARGE} {
    max-width: 12rem;
    max-height: 12rem;
  }

  @media ${MEDIA_QUERY.LAPTOP} {
    max-width: 16rem;
    max-height: 16rem;
  }
`;

export const CartListItemDetailsContainer = styled.div`
  grid-area: details;
`;

export const CartListItemName = styled.h5`
  font-size: 1.4rem;
  color: var(--color-black);

  @media ${MEDIA_QUERY.MOBILE_LARGE} {
    font-size: 1.8rem;
  }
`;

export const CartListItemBill = styled.span`
  grid-area: bill;
  font-size: 1.2rem;
  color: var(--color-background);
  font-weight: bold;

  @media ${MEDIA_QUERY.MOBILE_LARGE} {
    font-size: 1.6rem;
  }
`;

export const CartListItemTotal = styled.p`
  grid-area: total;
  font-size: 1.2rem;
  color: var(--color-black);
  font-weight: bold;

  @media ${MEDIA_QUERY.MOBILE_LARGE} {
    font-size: 1.6rem;
  }
`;

export const CartListItemActions = styled.div``;
