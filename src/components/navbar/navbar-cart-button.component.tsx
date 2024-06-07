'use client';

import { useBurgersStore } from '@/providers/burgers-store.provider';
import {
  NavbarCartBtn,
  NavbarCartBtnIcon,
  NavbarCartTotalItems,
} from './navbar.styles';

export function CartButton() {
  const cart = useBurgersStore((state) => state.cart);
  return (
    <NavbarCartBtn href='/cart' role='button'>
      <NavbarCartBtnIcon role='img'>🛒</NavbarCartBtnIcon>
      <NavbarCartTotalItems role='banner'>
        {cart.length > 9 ? '+9' : cart.length}
      </NavbarCartTotalItems>
    </NavbarCartBtn>
  );
}
