'use client';

import { useEffect, useState } from 'react';
import { getBurgers } from './_actions/get-burgers.action';
import { BurgersList } from './_components/burgers-list/burgers-list.component';
import { Burger } from './_models/Burgers';

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
