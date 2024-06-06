import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import { Navbar } from '@/components/navbar/navbar.component';

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
