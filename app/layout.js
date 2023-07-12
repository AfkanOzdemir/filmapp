import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Categories from '@/components/categories'
const inter = Inter({ subsets: ['latin'] })
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
export const metadata = {
  title: 'Film App | Next.js + TailwindCSS',
  description: 'A film app built with Next.js and TailwindCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <body className={`${inter.className} !bg-slate-950 h-full w-full flex flex-col justify-between overflow-x-hidden`}>
          <Header />
          <Categories />
          <main className='h-auto'>
            {children}
          </main>
          <Footer />
        </body>
      </SkeletonTheme>
    </html>
  )
}
