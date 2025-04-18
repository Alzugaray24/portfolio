import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Cargar la fuente Inter desde Google Fonts
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matias Alzugaray - Portfolio',
  description: 'Full Stack Developer Portfolio showcasing web and mobile development skills, projects, and expertise.',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'full stack', 'web development'],
  authors: [{ name: 'Matias Alzugaray' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/icon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icons/icon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/icons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon.ico' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#030014] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
} 