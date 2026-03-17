import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta'
})

export const metadata: Metadata = {
  title: 'Niban Recruitment Agency | Connecting Talent Globally',
  description: 'Niban Recruitment Agency helps connect talent from Burundi to opportunities worldwide through work visa assistance, study abroad guidance, and flight booking services.',
  keywords: ['recruitment', 'work abroad', 'study abroad', 'visa assistance', 'Burundi', 'flight booking'],
}

export const viewport = {
  themeColor: '#1e56a0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
