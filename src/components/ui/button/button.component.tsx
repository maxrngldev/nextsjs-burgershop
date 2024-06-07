import { ReactElement } from 'react';
import { ButtonContainer } from './button.styles';

interface ButtonProps {
  children: string | ReactElement;
  onClick?: () => void;
  $primary?: boolean;
  $animated?: boolean;
  $expand?: boolean;
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
