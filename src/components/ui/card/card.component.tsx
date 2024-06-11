import { ReactNode } from 'react';
import { CardContainer } from './card.styles';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, onClick, className }: CardProps) {
  return (
    <CardContainer className={className} onClick={onClick}>
      {children}
    </CardContainer>
  );
}
