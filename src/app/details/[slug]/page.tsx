import { BurgerDetails } from '@/components/burger-details/burger-details.component';
import { PageContainer } from './page.styles';
import { Suspense } from 'react';
import { LoaderSpinner } from '@/components/ui/loader-spinner/loader-spinner.component';

export default function DetailsPage({ params }: { params: { slug: string } }) {
  return (
    <PageContainer>
      <Suspense fallback={<LoaderSpinner />}>
        <BurgerDetails burgerSlug={params.slug} />
      </Suspense>
    </PageContainer>
  );
}
