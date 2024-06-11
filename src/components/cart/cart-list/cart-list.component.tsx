'use client';

import { useRouter } from 'next/navigation';
import {
  CartListContainer,
  CartListFooter,
  CartListHeader,
  CartListItems,
  CartListItemsTotal,
} from './cart-list.styles';
import { CartListItem } from '../cart-list-item/cart-list-item.component';
import { Button } from '../../ui/button/button.component';
import { useBurgersStore } from '@/providers/burgers-store.provider';

export function CartList() {
  const cart = useBurgersStore((state) => state.cart);

  const router = useRouter();
  const totalPrice = cart.reduce<number>(
    (prev, current) => prev + Number(current.price * current.quantity),
    0
  );
  return (
    <CartListContainer>
      <CartListHeader>
        {!cart.length
          ? 'Your cart is empty, go back and pick some burgers!'
          : 'Look at your great choices!'}
        😋
      </CartListHeader>

      <hr />

      <CartListItems>
        {cart.map((cartItem) => (
          <CartListItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartListItems>

      <CartListFooter>
        <Button $primary $animated onClick={() => router.push('/')}>
          Go back to menu
        </Button>
        {!!cart.length && (
          <CartListItemsTotal>
            Your total is ${totalPrice.toFixed(2)}
          </CartListItemsTotal>
        )}
      </CartListFooter>
    </CartListContainer>
  );
}
