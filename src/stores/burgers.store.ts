import { create } from 'zustand';
import { Burger } from '@/models/Burgers';
import { CartItem } from '@/models/Cart';

export type BurgersState = {
  burgers: Burger[];
  cart: CartItem[];
};

export type BurgersActions = {
  setBurgers: (burgers: Burger[]) => void;
  addBurgerToCart: (burger: Burger) => void;
  removeBurgerFromCart: (burger: Burger) => void;
};

export type BurgersStore = BurgersState & BurgersActions;

export const initialState: BurgersState = {
  burgers: [],
  cart: [],
};

export function createBurgersStore() {
  return create<BurgersStore>()((set) => ({
    ...initialState,
    setBurgers: (burgers) => set(() => ({ burgers })),
    addBurgerToCart: (burger) =>
      set((state) => {
        // Check if burger exists on cart
        const burgerInCart = state.cart.find(
          (cartItem) => cartItem.id === burger.id
        );

        if (burgerInCart) {
          const updatedCartItems: CartItem[] = state.cart.map((cartItem) =>
            cartItem.id === burgerInCart.id
              ? { ...cartItem, quantity: ++cartItem.quantity }
              : { ...cartItem }
          );

          return { ...state, cart: updatedCartItems };
        } else {
          // If not, add it to the cart
          const newCartItems: CartItem[] = [
            ...state.cart,
            { ...burger, quantity: 1 },
          ];
          return { ...state, cart: newCartItems };
        }
      }),
    removeBurgerFromCart: (burger) => set(() => ({ burgers: [] })),
  }));
}
