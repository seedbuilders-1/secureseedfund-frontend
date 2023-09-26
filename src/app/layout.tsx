import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { IBM_Plex_Sans as IBMPlexSans } from 'next/font/google'

export const metadata = {
  title: 'SecureSeedFund',
  description: 'Next.js App Router + Material UI v5',
};

const ibmPlexSans = IBMPlexSans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.variable}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
