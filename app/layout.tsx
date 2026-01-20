import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

// Import Source Sans 3 from Google Fonts (Next.js 13+)
import { Source_Sans_3 } from 'next/font/google'
import { Footer } from '@/components/web/Footer'

// Initialize the font
const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Regular, SemiBold, Bold
})

export const metadata: Metadata = {
  title: 'Aspiring Legal Network',
  description: 'Aspiring Legal Network',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
