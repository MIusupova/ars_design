import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';
import { montserratCyrillic, poppins, wordmark } from '../shared/config/fonts';
import { JsonLd } from '../shared/config/JsonLd';
import { SITE_URL } from '../shared/config/site';

const GA_ID = 'G-9Y34X774JH';

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
    <html lang="fr" suppressHydrationWarning className={`${poppins.variable} ${montserratCyrillic.variable} ${wordmark.variable}`}>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
