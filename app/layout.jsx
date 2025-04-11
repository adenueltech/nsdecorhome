import { Playfair_Display, Manrope } from 'next/font/google';
import '@/styles/main.scss';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Head from 'next/head';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: false,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  title: 'NS-Decor - Where Style Meets Sophistication"',
  description: 'Own the Furniture of Your Dreams',
  keywords: 'chairs, furniture, buy chairs, buy furniture',
  openGraph: {
    images:
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719892368/scandinavian-living-room-interior-design-zoom-background_1_rui1xk.jpg',
  },
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <Head>
        <link rel="icon" href="/public/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/public/icon.jpg>" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta property="og:title" content="NS DECOR" />
        <meta
          property="og:description"
          content="A variety of elegant chairs that blend style and comfort. Explore our modern and chic chair collection."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719892368/scandinavian-living-room-interior-design-zoom-background_1_rui1xk.jpg"
        />
        <meta property="og:url" content="https://NS DECOR-furniture.vercel.app/" />
        \
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NS DECOR" />
        <meta
          name="twitter:description"
          content="A variety of elegant chairs that blend style and comfort. Explore our modern and chic chair collection."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719892368/scandinavian-living-room-interior-design-zoom-background_1_rui1xk.jpg"
        />
        <meta name="twitter:site" content="@The_vine__" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
