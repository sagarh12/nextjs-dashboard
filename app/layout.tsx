
import '@/app/ui/global.css';
// Remove the next line as it conflicts with the Google font import
// import { inter } from '@/app/ui/fonts';

import { Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= {'${inter.className} antialiased'}>{children}</body>
    </html>
  );
}
