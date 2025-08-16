// Import file CSS global untuk styling yang berlaku di seluruh aplikasi
import './globals.css'

// Import type Metadata dari Next.js (dipakai untuk SEO, title, description, dll)
import type { Metadata } from 'next'

// Import komponen Navbar, AOSWrapper, dan CustomCursor dari folder components
import Navbar from '@/components/Navbar'   // ← Navigasi utama
import AOSWrapper from '@/components/AOSWrapper' // ← Untuk animasi on scroll
import CustomCursor from '@/components/CustomCursor' // ← Kursor custom

// Metadata halaman default (SEO)
export const metadata: Metadata = {
  title: 'Adi', // Judul default website
  description: 'Created with Next.js and Tailwind CSS', // Deskripsi untuk SEO
}

// RootLayout adalah layout utama aplikasi
// `children` adalah konten halaman yang akan di-render di dalam layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode // Tipe data children = elemen React
}) {
  return (
    // Elemen root HTML
    <html lang="en" className="scroll-smooth"> 
      {/* scroll-smooth → bikin scroll halus (smooth scrolling) */}
      
      <body>
        {/* Navbar selalu muncul di semua halaman */}
        <Navbar /> 
        
        {/* AOSWrapper → biasanya dipakai untuk inisialisasi Animate On Scroll (AOS) */}
        <AOSWrapper />
        
        {/* CustomCursor → mengganti kursor default dengan kursor custom */}
        <CustomCursor />
        
        {/* children → konten halaman spesifik (Home, About, Project, dll) */}
        {children}
      </body>
    </html>
  )
}
