'use client';

import { useEffect, useState } from 'react';
import { Burger } from '@/models/Burgers';
import { getBurgers } from '@/actions/get-burgers.action';
import { BurgersList } from '@/components/burgers-list/burgers-list.component';
import { useBurgersStore } from '@/stores/burgers.store';

export default function Home() {
  const burgers = useBurgersStore((state) => state.burgers);
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
      <BurgersList burgers={burgers} />
    </main>
  );
}
