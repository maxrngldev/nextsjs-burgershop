import { BurgerDetails } from '@/components/burger-details/burger-details.component';
import { PageContainer } from './page.styles';

export default function DetailsPage({ params }: { params: { slug: string } }) {
  return (
    <PageContainer>
      <BurgerDetails burgerSlug={params.slug} />
    </PageContainer>
  );
}
