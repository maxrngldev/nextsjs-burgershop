import Image from 'next/image';
import styled from 'styled-components';
import { Card } from '../ui/card/card.component';
import { MEDIA_QUERY } from '@/lib/constants/media-queries';

export const BurgerCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: space-around;
  position: relative;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    min-height: 28rem;
  }

  @media ${MEDIA_QUERY.LAPTOP_LARGE} {
    min-height: 32rem;
  }
`;

export const BurgerCardImg = styled(Image)`
  align-self: center;
  border-radius: 0.9rem;
  aspect-ratio: 1;
  object-fit: cover;

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    max-width: 16rem;
    max-height: 16rem;
  }

  @media ${MEDIA_QUERY.TABLET} {
    max-width: 22.5rem;
    max-height: 22.5rem;
  }

  @media ${MEDIA_QUERY.LAPTOP} {
    max-width: 13rem;
    max-height: 13rem;
  }

  @media ${MEDIA_QUERY.LAPTOP_LARGE} {
  }

  @media ${MEDIA_QUERY.DESKTOP} {
  }
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

export const BurgerCardBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    flex-direction: column;
  }

  @media ${MEDIA_QUERY.MOBILE_LARGE} {
    flex-direction: row;
  }

  @media ${MEDIA_QUERY.LAPTOP_LARGE} {
    flex-direction: column;
  }
`;

export const BurgerCardPrice = styled.span`
  font-size: 1.6rem;
  color: var(--color-green);
`;

export const BurgerCardDescription = styled.p`
  font-size: 1.6rem;
  text-align: left;

  @media ${MEDIA_QUERY.MOBILE_LARGE} {
    text-align: right;
  }

  @media ${MEDIA_QUERY.LAPTOP} {
    font-size: 1.4rem;
    margin-left: 1rem;
  }

  @media ${MEDIA_QUERY.LAPTOP_LARGE} {
    text-align: left;
  }
`;
