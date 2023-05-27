import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='px-[200px]'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
