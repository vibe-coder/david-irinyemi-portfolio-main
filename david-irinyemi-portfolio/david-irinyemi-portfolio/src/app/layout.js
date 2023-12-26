import { Inter, Work_Sans } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const worksans = Work_Sans({ 
  subsets: ['latin'],
  // display: 'swap'
})

export const metadata = {
  title: 'David Irinyemi',
  description: 'David Irinyemi - Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={worksans.className}>{children}</body>
    </html>
  )
}
