'use client';

import styled, { css } from 'styled-components';

interface ButtonContainerProps {
  $primary?: boolean;
  $secondary?: boolean;
  $animated?: boolean;
  $expand?: boolean;
  $transparent?: boolean;
  $iconOnly?: boolean;
}

function getButtonStyles({
  $primary,
  $animated,
  $secondary,
  $transparent,
}: ButtonContainerProps) {
  return css`
    background-color: ${() => {
      if ($primary) return 'var(--color-primary)';
      else if ($secondary) return 'var(--color-secondary)';
      else if ($transparent) return 'transparent';
    }};
    color: var(--color-black);
    ${() => !$transparent && 'box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1)'};

    &:hover,
    &:active {
      background-color: ${() => {
        if ($primary) return 'var(--color-primary-light)';
        else if ($secondary) return 'var(--color-secondary-light)';
        else if ($transparent) return 'transparent';
      }};
    }

    &:hover {
      ${$animated &&
      `
        ${!$transparent && 'box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1)'};
        transform: translateY(-3px);
      `}
    }

    &:active {
      ${$animated &&
      `
        ${!$transparent && 'box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1)'};
        transform: translateY(2px);
      `}
    }
  `;
}

export const ButtonContainer = styled.button.attrs({
  type: 'button',
})<ButtonContainerProps>`
  border: none;
  width: ${({ $expand }) => (!!$expand ? '100%' : 'fit-content')};
  padding: 1rem;
  font-weight: bold;
  border-radius: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  ${({ $iconOnly }) => $iconOnly && 'font-size: 3rem'};

  ${(props) => getButtonStyles(props)}
`;
