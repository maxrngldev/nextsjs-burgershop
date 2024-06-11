import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import { Navbar } from '@/components/navbar/navbar.component';

import './global.css';
import { BurgersStoreProvider } from '@/providers/burgers-store.provider';

export const metadata: Metadata = {
  title: 'Burger Shop',
  description: 'The best burgers around this country!',
  applicationName: 'Burger-Shop',
  category: 'food',
  keywords: ['burgers', 'orders', 'restaurant'],
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
          <BurgersStoreProvider>
            <header>
              <Navbar />
            </header>

            <main>{children}</main>
          </BurgersStoreProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
