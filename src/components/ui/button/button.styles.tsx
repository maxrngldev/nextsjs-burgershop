'use client';

import styled, { css } from 'styled-components';

interface ButtonContainerProps {
  $primary?: boolean;
  $secondary?: boolean;
  $animated?: boolean;
  $expand?: boolean;
}

function getButtonStyles({
  $primary,
  $animated,
  $secondary,
}: ButtonContainerProps) {
  return css`
    background-color: ${() => {
      if ($primary) return 'var(--color-primary)';
      else if ($secondary) return 'var(--color-secondary)';
    }};
    color: var(--color-black);
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);

    &:hover,
    &:active {
      background-color: ${() => {
        if ($primary) return 'var(--color-primary-light)';
        else if ($secondary) return 'var(--color-secondary-light)';
      }};
    }

    &:hover {
      ${$animated &&
      `
        box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
        transform: translateY(-3px);
      `}
    }

    &:active {
      ${$animated &&
      `
        box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
      `}
    }
  `;
}

export const ButtonContainer = styled.button.attrs({
  role: 'button',
})<ButtonContainerProps>`
  border: none;
  width: ${({ $expand }) => (!!$expand ? '100%' : 'fit-content')};
  padding: 1rem;
  font-weight: bold;
  border-radius: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;

  ${(props) => getButtonStyles(props)}
`;
