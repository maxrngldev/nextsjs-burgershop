import { Burger } from './Burgers';

export interface CartItem extends Burger {
  quantity: number;
}
