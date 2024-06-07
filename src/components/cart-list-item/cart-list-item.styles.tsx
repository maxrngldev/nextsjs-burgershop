'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const CartListItemDetailsContainer = styled.div`
  grid-area: details;
`;

export const CartListItemName = styled.h5`
  font-size: 1.8rem;
  color: var(--color-black);
`;

export const CartListItemContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'image details total';
  align-items: center;

  border-radius: 0.9rem;
  background-color: var(--color-secondary-light);
  padding: 1rem 0;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: var(--color-secondary);
  }

  &:hover > ${CartListItemDetailsContainer} > ${CartListItemName} {
    color: var(--color-primary);
  }
`;

export const CartListItemImg = styled(Image)`
  grid-area: image;
  justify-self: center;
  border-radius: 50%;
  aspect-ratio: 1;
  object-fit: fill;
`;

export const CartListItemBill = styled.span`
  grid-area: bill;
  font-size: 1.6rem;
`;

export const CartListItemTotal = styled.p`
  grid-area: total;
  font-size: 1.6rem;
  color: var(--color-black);
  font-weight: bold;
`;
