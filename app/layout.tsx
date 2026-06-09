import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Archivus | US Construction Services Partner',
  description: 'Remote construction documentation, drafting, and engineering support for US contractors and building owners nationwide.',
  keywords: 'construction documentation, drafting, engineering support, US contractors, permit sets, BIM modeling, project management',
  openGraph: {
    title: 'Archivus | US Construction Services Partner',
    description: 'Remote construction documentation, drafting, and engineering support for US contractors and building owners nationwide.',
    type: 'website',
    locale: 'en_US',
    url: 'https://archivus.com',
    siteName: 'Archivus',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans" suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
