'use client'; 
// ← Wajib di Next.js App Router kalau komponen butuh interaksi client-side
// (misalnya AOS animasi, event handler, dll)

import Image from 'next/image'; // Import komponen optimasi gambar bawaan Next.js
import React from 'react';

export default function About() {
  return (
    <section
      id="about" // ← untuk anchor link (misalnya dari navbar: href="#about")
      className="relative px-6 py-48 bg-gradient-to-br from-white via-gray-50 to-yellow-50 text-gray-900 overflow-hidden"
      // Styling Tailwind:
      // - relative → posisi relatif (penting untuk background absolute)
      // - px-6 py-48 → padding
      // - bg-gradient-to-br → gradasi background (dari kiri atas ke kanan bawah)
      // - text-gray-900 → teks abu gelap
      // - overflow-hidden → elemen absolute di luar area akan disembunyikan
    >
      {/* Elemen background dekorasi (lingkaran blur) */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-32 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-2xl opacity-20"></div>

      {/* Kontainer utama */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* max-w-6xl → lebar maksimum kontainer */}
        {/* mx-auto → rata tengah */}
        {/* grid md:grid-cols-2 → grid 2 kolom saat layar medium ke atas */}
        {/* gap-12 → jarak antar kolom */}
        {/* items-center → konten di grid rata tengah vertikal */}
        {/* z-10 → biar ada di atas background blur */}

        {/* Bagian Teks */}
        <div data-aos="fade-up">
          <h2 className="text-3xl lg:text-6xl font-bold text-yellow-600 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a dedicated web developer with a strong passion for building beautiful, responsive, and functional websites.
            I focus on using modern tools like{' '}
            <span className="font-semibold text-yellow-700">Next.js</span> and{' '}
            <span className="font-semibold text-yellow-700">Tailwind CSS</span> to bring ideas to life.
          </p>
        </div>

        {/* Bagian Gambar */}
        <div 
          className="flex justify-center" 
          data-aos="fade-up" // animasi AOS
          data-aos-delay="200" // animasi muncul sedikit lebih lambat
        >
          <Image
            src="/profile.jpg" // Lokasi gambar (di folder public/profile.jpg)
            alt="My Photo" // Alt text untuk SEO & aksesibilitas
            width={300}
            height={300}
            className="rounded-2xl shadow-xl object-cover"
            // rounded-2xl → sudut melengkung
            // shadow-xl → bayangan
            // object-cover → gambar menyesuaikan ukuran tanpa distorsi
            priority // gambar akan di-load lebih cepat (preload)
          />
        </div>
      </div>
    </section>
  );
}
