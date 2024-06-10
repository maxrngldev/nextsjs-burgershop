import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Burger Shop - Cart',
  description: 'User cart checkout',
  applicationName: 'Burger-Shop',
  category: 'food',
  keywords: ['burgers', 'orders', 'restaurant'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
