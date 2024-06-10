'use client';

import styled from 'styled-components';
import { Card } from '../ui/card/card.component';
import { MEDIA_QUERY } from '@/lib/constants/media-queries';

export const CartListContainer = styled(Card)`
  display: flex;
  flex-direction: column;

  margin: 1rem auto 0;

  @media ${MEDIA_QUERY.MOBILE_LARGE} {
    max-width: 45rem;
  }

  @media ${MEDIA_QUERY.LAPTOP} {
    max-width: 65rem;
  }
`;

export const CartListHeader = styled.h3`
  font-size: 1.8rem;
  text-align: center;
  color: var(--color-text);
`;

export const CartListItems = styled.ul`
  list-style: none;
  padding: 1rem;
`;

export const CartListFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

export const CartListItemsTotal = styled.p`
  font-size: 1.6rem;
  align-self: flex-end;
  font-weight: bold;
  text-align: center;
`;
