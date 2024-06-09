import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Burger Shop - Cart',
  description: 'User cart checkout',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
