'use client';

import styled from 'styled-components';
import { Card } from '../ui/card/card.component';

export const CartListContainer = styled(Card)`
  display: flex;
  flex-direction: column;

  width: 70%;
  margin: 0 auto;
`;

export const CartListHeader = styled.h3`
  font-size: 2rem;
  text-align: center;
  color: var(--color-text);
`;

export const CartListItems = styled.ul`
  list-style: none;
  padding: 1rem;
`;

export const CartListItemsTotal = styled.p`
  font-size: 1.8rem;
  align-self: flex-end;
  font-weight: bold;
  padding: 1rem 2rem;
`;
