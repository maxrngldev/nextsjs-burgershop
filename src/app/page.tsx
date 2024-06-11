import { getBurgers } from '@/actions/get-burgers.action';
import { BurgersList } from '@/components/burgers-list/burgers-list.component';

export default async function Home() {
  const burgers = await getBurgers();

  return (
    <section>
      <BurgersList burgers={burgers} />
    </section>
  );
}
