'use client';

import { useEffect } from 'react';
import { getBurgers } from '@/actions/get-burgers.action';
import { BurgersList } from '@/components/burgers-list/burgers-list.component';
import { useBurgersStore } from '@/providers/burgers-store.provider';

export default function Home() {
  const setBurgers = useBurgersStore((state) => state.setBurgers);

  useEffect(() => {
    async function fetchBurgers() {
      const burgers = await getBurgers();
      setBurgers(burgers);
    }

    fetchBurgers();
  }, [setBurgers]);

  return (
    <main>
      <BurgersList />
    </main>
  );
}
