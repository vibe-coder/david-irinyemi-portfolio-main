import { Inter, Work_Sans, Silkscreen, Staatliches, Big_Shoulders_Display } from 'next/font/google'

import './globals.css'
import NavBar from './Navbar'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

const staatliches = Staatliches({ 
  subsets: ['latin'],
  weight: '400'
  // display: 'swap'
})

const big_shoulders_display = Big_Shoulders_Display({
  subsets: ['latin'],
  weight:'900'
})

export const metadata = {
  title: 'David Irinyemi',
  description: 'David Irinyemi - Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={big_shoulders_display.className}>
        <div className='overflow-x-hidden bg-peach'>
          <NavBar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
