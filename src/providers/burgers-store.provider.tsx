'use client';

import { BurgersStore, createBurgersStore } from '@/stores/burgers.store';
import { createContext, ReactNode, useContext, useRef } from 'react';
import { StoreApi, useStore } from 'zustand';

export const BurgersStoreContext = createContext<StoreApi<BurgersStore> | null>(
  null
);

export interface BurgersStoreProviderProps {
  children: ReactNode;
}

export function BurgersStoreProvider({ children }: BurgersStoreProviderProps) {
  const storeRef = useRef<StoreApi<BurgersStore>>();

  if (!storeRef.current) {
    storeRef.current = createBurgersStore();
  }

  return (
    <BurgersStoreContext.Provider value={storeRef.current}>
      {children}
    </BurgersStoreContext.Provider>
  );
}

export function useBurgersStore<T>(selector: (store: BurgersStore) => T): T {
  const burgersStoreContext = useContext(BurgersStoreContext);

  if (!burgersStoreContext) {
    throw new Error('useBurgersStore must be use within BurgersStoreProvider!');
  }

  return useStore(burgersStoreContext, selector);
}
