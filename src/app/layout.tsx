import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import './globals.css';
import { MSWComponent } from './_component/MSWComponent';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        {children}
      </body>
    </html>
  );
}
