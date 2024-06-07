'use client';

import { CartItem } from '@/models/Cart';
import {
  CartListContainer,
  CartListFooter,
  CartListHeader,
  CartListItems,
  CartListItemsTotal,
} from './cart-list.styles';
import { CartListItem } from '../cart-list-item/cart-list-item.component';
import { Button } from '../ui/button/button.component';
import { useRouter } from 'next/navigation';

const tempData: CartItem[] = [
  {
    id: '1',
    name: 'Burger A',
    price: 499,
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6',
    description:
      'A classic beef patty topped with lettuce, tomato, and our special sauce, served in a sesame seed bun.',
    calorie: 760,
    slug: 'burger-a',
    quantity: 3,
  },
  {
    id: '2',
    name: 'Black Burger',
    price: 599,
    image: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99',
    description:
      'Featuring a unique black bun, this burger comes with a juicy Angus beef patty, melted cheddar, and caramelized onions.',
    calorie: 640,
    slug: 'black-burger',
    quantity: 2,
  },
  {
    id: '3',
    name: 'Fries with Ketchup',
    price: 699,
    image: 'https://images.unsplash.com/photo-1550259114-ad7188f0a967',
    description:
      'Crispy golden fries served with a side of our signature tangy ketchup.',
    calorie: 920,
    slug: 'fries',
    quantity: 1,
  },
];

export function CartList() {
  const router = useRouter();
  const totalPrice = tempData.reduce<number>(
    (prev, current) => prev + Number(current.price * current.quantity),
    0
  );
  return (
    <CartListContainer>
      <CartListHeader>Look at your great choices! 😋</CartListHeader>

      <hr />

      <CartListItems>
        {tempData.map((cartItem) => (
          <CartListItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartListItems>

      <CartListFooter>
        <Button $primary $animated onClick={() => router.push('/')}>
          Go back to menu
        </Button>
        <CartListItemsTotal>
          Your total is ${totalPrice.toFixed(2)}
        </CartListItemsTotal>
      </CartListFooter>
    </CartListContainer>
  );
}
