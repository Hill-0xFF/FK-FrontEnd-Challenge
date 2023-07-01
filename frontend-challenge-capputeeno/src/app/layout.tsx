import './globals.css'
import { Saira } from 'next/font/google'
import Header from '@/components/Header'

const saira = Saira({ 
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700'],
})

export const metadata = {
  title: 'Capputeeno challenge',
  description: 'Testing React, Next.js and Styled Component skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Header/>

        {children}
      </body>
    </html>
  )
}
