import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar' // ← Import Navbar
import AOSWrapper from '@/components/AOSWrapper';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Adi',
  description: 'Created with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        
        <Navbar /> {/* ← Pakai Navbar di sini */}
        <AOSWrapper />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
