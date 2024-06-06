'use client';

import { useEffect, useState } from 'react';
import { Burger } from '@/models/Burgers';
import { getBurgers } from '@/actions/get-burgers.action';
import { BurgersList } from '@/components/burgers-list/burgers-list.component';

export default function Home() {
  const [burgers, setBurgers] = useState<Burger[]>([]);

  useEffect(() => {
    async function fetchBurgers() {
      const burgers = await getBurgers();

      setBurgers(burgers);
    }

    fetchBurgers();
  }, []);

  return (
    <main>
      <BurgersList burgers={burgers} />
    </main>
  );
}
