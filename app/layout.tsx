import type {Metadata} from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Buildimize Group | US Construction Services Partner',
  description: 'Remote construction documentation, drafting, and engineering support for US contractors and building owners nationwide.',
  icons: {
    icon: 'https://lh3.googleusercontent.com/d/11vFZb80wOjXeoqw_uArqu43sRk1yToQo',
  },
  keywords: 'construction documentation, drafting, engineering support, US contractors, permit sets, BIM modeling, project management',
  openGraph: {
    title: 'Buildimize Group | US Construction Services Partner',
    description: 'Remote construction documentation, drafting, and engineering support for US contractors and building owners nationwide.',
    type: 'website',
    locale: 'en_US',
    url: 'https://buildimizegroup.com',
    siteName: 'Buildimize Group',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable}`}>
      <body className="antialiased font-sans font-inter" suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
