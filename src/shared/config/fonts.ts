import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

export const poppins = localFont({
  src: [
    { path: '../../assets/fonts/Poppins-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../assets/fonts/Poppins-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

// В Poppins нет кириллицы — русский текст раньше уходил в системный Arial.
// Montserrat — близкая геометрическая гарнитура с кириллицей; она подхватывает
// только кириллические символы, французская вёрстка на Poppins не меняется.
export const montserratCyrillic = Montserrat({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
  variable: '--font-cyrillic',
  display: 'swap',
});
