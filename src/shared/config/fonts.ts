import localFont from 'next/font/local';

export const poppins = localFont({
  src: [
    { path: '../../assets/fonts/Poppins-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../assets/fonts/Poppins-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
});
