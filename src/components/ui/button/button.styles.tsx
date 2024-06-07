'use client';

import styled, { css } from 'styled-components';

function getButtonStyles({
  $primary,
  $animated,
}: {
  $primary?: boolean;
  $animated?: boolean;
}) {
  if ($primary)
    return css`
      background-color: var(--color-primary);
      color: var(--color-black);
      box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: var(--color-primary-light);
        ${$animated &&
        `
        box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
        transform: translateY(-3px);
      `}
      }

      &:active {
        background-color: var(--color-primary);
        ${$animated &&
        `
        box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
      `}
      }
    `;
}

interface ButtonContainerProps {
  $primary?: boolean;
  $animated?: boolean;
  $expand?: boolean;
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

  ${({ $primary, $animated }) => getButtonStyles({ $primary, $animated })}
`;
