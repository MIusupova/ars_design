import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { montserratCyrillic, poppins, quicksand } from '../shared/config/fonts';
import { JsonLd } from '../shared/config/JsonLd';
import { SITE_URL } from '../shared/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${poppins.variable} ${montserratCyrillic.variable} ${quicksand.variable}`}>
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
