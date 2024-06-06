'use server';

import { Burger } from '../_models/Burgers';

export async function getBurgers(): Promise<Burger[]> {
  try {
    const res = await fetch(
      'https://burgerhub00.github.io/data/products.json',
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();

    return data.products;
  } catch (error) {
    throw new Error('Unexpected error while getting our menu...');
  }
}
