import type { Metadata } from 'next';

interface MetadataProps {
  params: { slug: string };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const burgerName = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Burger Shop - ${burgerName}`,
    description: `Details of ${burgerName}`,
    applicationName: 'Burger-Shop',
    category: 'food',
    keywords: ['burgers', 'orders', 'restaurant'],
  };
}
