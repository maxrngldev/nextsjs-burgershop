'use server';

import { Burger } from '@/models/Burgers';

const API_URL = 'https://burgerhub00.github.io/data/products.json';

export async function getBurgers(): Promise<Burger[]> {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 3600 } });

    if (!res.ok) throw new Error('💥 Error while fetching data...');

    const data = await res.json();

    const products = data.products.map((product: Burger) => ({
      ...product,
      price: Number(product.price / 100).toFixed(2),
    }));
    return products;
  } catch (error) {
    throw new Error('Unexpected error while getting our menu...');
  }
}
