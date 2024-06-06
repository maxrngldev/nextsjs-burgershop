import { BurgersList } from './_components/burgers-list/burgers-list.component';
import { Burger } from './_models/Burgers';

const tempData: Burger[] = [
  {
    id: 1,
    img: '',
    title: 'Burger #1',
    price: 10.99,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis sequi eum expedita quos nobis eveniet eos quidem officia',
  },
  {
    id: 2,
    img: '',
    title: 'Burger #2',
    price: 9.99,
    description: 'This is an awesome burger',
  },
  {
    id: 3,
    img: '',
    title: 'Burger #3',
    price: 12.99,
    description: 'This is a nice combo',
  },
  {
    id: 4,
    img: '',
    title: 'Burger #4',
    price: 7.99,
    description: 'Our most economic burger',
  },
  {
    id: 5,
    img: '',
    title: 'Burger #5',
    price: 10.99,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis sequi eum expedita quos nobis eveniet eos quidem officia',
  },
];

export default function Home() {
  return (
    <main>
      <BurgersList burgers={tempData} />
    </main>
  );
}
