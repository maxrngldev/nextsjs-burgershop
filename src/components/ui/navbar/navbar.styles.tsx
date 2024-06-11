'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { MEDIA_QUERY } from '@/lib/constants/media-queries';

export const NavbarLogoContainer = styled.div`
  display: flex;
  justify-self: start;
  align-items: center;
  gap: 0.2rem;
`;

export const NavbarLogoTitle = styled(Link)`
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: bold;
  color: var(--color-text);
  width: fit-content;

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    font-size: 1.6rem;
  }
`;

export const NavbarLogoIcon = styled.span`
  font-size: 3.2rem;

  @media ${MEDIA_QUERY.MOBILE_SMALL} {
    font-size: 3rem;
  }
`;

export const NavbarCartBtn = styled(Link)`
  justify-self: end;
  height: 4.8rem;
  aspect-ratio: 1;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
`;

export const NavbarCartBtnIcon = styled.span`
  font-size: 3.2rem;
`;

export const NavbarCartTotalItems = styled.span`
  position: absolute;
  top: 4rem;
  right: 4rem;
  height: 2.4rem;
  aspect-ratio: 1;
  color: var(--color-text);
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
`;

export const NavbarContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 7.2rem;
  padding: 0 3.2rem;
  background-color: var(--color-primary);
  border-radius: 0.9rem;
`;
