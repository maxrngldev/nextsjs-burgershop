'use client';

import { BurgerDetails } from '@/components/burger-details/burger-details.component';
import { PageContainer } from './page.styles';
import { useBurgersStore } from '@/stores/burgers.store';

export default function DetailsPage({ params }: { params: { slug: string } }) {
  const burgers = useBurgersStore((state) => state.burgers);

  const burger = burgers.find((burger) => burger.slug === params.slug);

  if (!burger) {
    throw new Error('No burger found!');
  }

  return (
    <PageContainer>
      <BurgerDetails burger={burger} />
    </PageContainer>
  );
}
