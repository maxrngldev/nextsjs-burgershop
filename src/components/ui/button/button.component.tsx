import { ReactElement, ReactNode } from 'react';
import { ButtonContainer } from './button.styles';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  $primary?: boolean;
  $secondary?: boolean;
  $animated?: boolean;
  $expand?: boolean;
  $transparent?: boolean;
  $iconOnly?: boolean;
}

export function Button({
  children,
  onClick,
  ...props
}: ButtonProps): ReactElement<ButtonProps> {
  return (
    <ButtonContainer onClick={onClick} {...props}>
      {children}
    </ButtonContainer>
  );
}
