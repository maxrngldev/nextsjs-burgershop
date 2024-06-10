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
import { useBurgersStore } from '@/providers/burgers-store.provider';
import { IMAGES } from '@/lib/constants/images';

interface CartListItemProps {
  cartItem: CartItem;
}

export function CartListItem({ cartItem }: CartListItemProps) {
  const removeBurgerFromCart = useBurgersStore(
    (state) => state.removeBurgerFromCart
  );
  return (
    <CartListItemContainer>
      <CartListItemImg
        src={cartItem.image}
        width={120}
        height={120}
        alt={cartItem.name}
        title={cartItem.name}
        placeholder='blur'
        blurDataURL={IMAGES.BLUR_PLACEHOLDER_GREEN}
      />

      <CartListItemDetailsContainer>
        <CartListItemName>{cartItem.name}</CartListItemName>
        <CartListItemBill>
          ${cartItem.price} X {cartItem.quantity}
        </CartListItemBill>

        <CartListItemTotal>
          ${(cartItem.price * cartItem.quantity).toFixed(2)}
        </CartListItemTotal>
      </CartListItemDetailsContainer>

      <CartListItemActions>
        <Button
          $transparent
          $animated
          $iconOnly
          onClick={() => removeBurgerFromCart(cartItem)}
        >
          🗑️
        </Button>
      </CartListItemActions>
    </CartListItemContainer>
  );
}
