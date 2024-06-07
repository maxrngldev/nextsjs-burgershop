import { CartItem } from '@/models/Cart';
import {
  CartListItemBill,
  CartListItemContainer,
  CartListItemDetailsContainer,
  CartListItemImg,
  CartListItemName,
  CartListItemTotal,
} from './cart-list-item.styles';

interface CartListItemProps {
  cartItem: CartItem;
}

export function CartListItem({ cartItem }: CartListItemProps) {
  return (
    <CartListItemContainer>
      <CartListItemImg
        alt={`Image of ${cartItem.slug}`}
        src={cartItem.image}
        width={120}
        height={120}
        title={cartItem.name}
      />

      <CartListItemDetailsContainer>
        <CartListItemName>{cartItem.name}</CartListItemName>
        <CartListItemBill>
          ${cartItem.price} X {cartItem.quantity}
        </CartListItemBill>
      </CartListItemDetailsContainer>

      <CartListItemTotal>
        ${(cartItem.price * cartItem.quantity).toFixed(2)}
      </CartListItemTotal>
    </CartListItemContainer>
  );
}
