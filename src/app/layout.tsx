import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter, Montserrat, Cabin, Merriweather } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Home/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: '300',
});
const cabin = Cabin({ subsets: ['latin'], variable: '--font-cabin' });

export const metadata: Metadata = {
  title: 'Lk-portfolio',
  description: 'My web development portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${merriweather.variable} ${cabin.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
