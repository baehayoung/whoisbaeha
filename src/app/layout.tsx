import type { Metadata } from 'next';
import Header from '@/components/Header';

import css from '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'WhoisBaeha',
  description: 'Who is Baeha? Thias is Baeha\'s portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
