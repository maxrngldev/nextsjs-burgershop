import { Suspense } from 'react';
import { PageContainer } from './page.styles';
import { LoaderSpinner } from '@/components/ui/loader-spinner/loader-spinner.component';
import { BurgerDetails } from '@/components/details/burger-details/burger-details.component';

export default function DetailsPage({ params }: { params: { slug: string } }) {
  return (
    <PageContainer>
      <Suspense fallback={<LoaderSpinner />}>
        <BurgerDetails burgerSlug={params.slug} />
      </Suspense>
    </PageContainer>
  );
}
