import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '../styles/globals.scss';

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
          <div className="contents">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
