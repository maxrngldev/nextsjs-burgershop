import { MEDIA_QUERY } from '@/lib/constants/media-queries';
import styled from 'styled-components';

export const BurgerList = styled.div`
  display: grid;
  gap: 3rem;

  padding: 1rem;

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    grid-template-columns: 1fr;
  }

  @media ${MEDIA_QUERY.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${MEDIA_QUERY.LAPTOP} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${MEDIA_QUERY.LAPTOP_LARGE} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${MEDIA_QUERY.DESKTOP} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const BurgerListTitle = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  padding: 1rem 0;

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    font-size: 1.6rem;
  }
`;
