import Link from 'next/link';
import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: fit-content;
  background-color: var(--color-brown);
  border-radius: 0.9rem;
  padding: 1rem;
  text-align: center;
  margin: auto;
`;

export const ErrorTitle = styled.h2`
  font-size: 2.4rem;
  color: var(--color-primary);
`;

export const ErrorText = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const ErrorLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: var(--color-black);

  &:hover {
    color: var(--color-primary-light);
  }
`;
