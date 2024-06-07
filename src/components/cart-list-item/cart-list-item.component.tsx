import { CartItem } from '@/models/Cart';
import {
  CartListItemActions,
  CartListItemBill,
  CartListItemContainer,
  CartListItemDetailsContainer,
  CartListItemImg,
  CartListItemName,
  CartListItemTotal,
} from './cart-list-item.styles';
import { Button } from '../ui/button/button.component';

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

      <CartListItemActions>
        <Button $transparent $animated $iconOnly>
          🗑️
        </Button>
      </CartListItemActions>
    </CartListItemContainer>
  );
}
