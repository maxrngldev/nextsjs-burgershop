import type { Metadata } from 'next';
import { Navbar } from './_components/navbar/navbar.component';
import StyledComponentsRegistry from '@/lib/registry';

import './global.css';

export const metadata: Metadata = {
  title: 'Burger Shop',
  description: 'A practice project with NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
