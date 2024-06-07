import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Burger } from '@/models/Burgers';
import { CartItem } from '@/models/Cart';

export type BurgersState = {
  burgers: Burger[];
  cart: CartItem[];
};

export type BurgersActions = {
  setBurgers: (burgers: Burger[]) => void;
  addBurgerToCart: (burger: Burger) => void;
  removeBurgerFromCart: (burger: CartItem) => void;
};

export type BurgersStore = BurgersState & BurgersActions;

export const initialState: BurgersState = {
  burgers: [],
  cart: [],
};

create();

export function createBurgersStore() {
  return create<BurgersStore>()(
    persist(
      (set) => ({
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
        removeBurgerFromCart: (burger) =>
          set((state) => {
            // Find burger in cart
            const burgerInCart = state.cart.find(
              (cartItem) => cartItem.id === burger.id
            );

            // Safe measure to avoid errors
            if (!burgerInCart) {
              return { ...state };
            }

            // If next qty will be 0, remove it
            if (burgerInCart.quantity === 1) {
              const updatedItems: CartItem[] = state.cart.filter(
                (cartItem) => cartItem.slug !== burgerInCart.slug
              );

              return {
                ...state,
                cart: updatedItems,
              };
            } else {
              // Remove 1 qty from item
              const updatedCartItems: CartItem[] = state.cart.map((cartItem) =>
                cartItem.id === burgerInCart.id
                  ? { ...cartItem, quantity: --cartItem.quantity }
                  : { ...cartItem }
              );
              return { ...state, cart: updatedCartItems };
            }
          }),
      }),
      {
        name: 'burgers-store',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  );
}
