'use client';
// ← Harus ditandai sebagai client component karena menggunakan hook React (useEffect)

import { useEffect } from 'react';
import AOS from 'aos';           // Import library AOS
import 'aos/dist/aos.css';       // Import file CSS bawaan AOS

export default function AOSWrapper() {
  useEffect(() => {
    // Inisialisasi AOS saat komponen pertama kali di-render
    AOS.init({
      duration: 800, // Durasi animasi (800ms)
      once: true,    // true = animasi hanya jalan sekali saat elemen masuk viewport
                     // false = animasi akan terulang setiap kali di-scroll
    });
  }, []); 
  // [] = dependency array kosong → hanya jalan sekali (saat komponen mount)

  // Komponen ini tidak merender apa pun (hanya menjalankan efek AOS)
  return null;
}
