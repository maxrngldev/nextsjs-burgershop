import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Burger Shop - Details',
  description: 'Burger Details',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
