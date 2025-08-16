'use client';
// ← Harus client component karena pakai hooks, animasi, dan interaktivitas

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Animasi modern (scale, rotate, fade, dll)
import { Typewriter } from 'react-simple-typewriter'; // Efek teks ketik
import { useInView } from 'react-intersection-observer'; // Deteksi elemen masuk viewport
import VanillaTilt from 'vanilla-tilt'; // Efek tilt 3D interaktif

// Tipe data untuk kotak animasi (background dekorasi)
type AnimatedBox = {
  id: number;
  left: string;
  top: string;
  delay: number;
  size: string;
};

export default function Hero() {
  // Ref untuk efek tilt 3D
  const tiltRef = useRef<HTMLDivElement>(null);

  // Ref + state untuk intersection observer (animasi masuk saat terlihat)
  const { ref: viewRef, inView } = useInView({
    triggerOnce: true, // hanya trigger sekali
    threshold: 0.2,    // 20% elemen masuk layar baru dianggap "in view"
  });

  // Inisialisasi efek tilt
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,        // sudut tilt maksimal
        speed: 400,     // kecepatan animasi tilt
        glare: true,    // aktifkan efek glare (pantulan cahaya)
        'max-glare': 0.3, // tingkat glare maksimal
      });
    }
  }, []);

  // State untuk kotak animasi background
  const [animatedBoxes, setAnimatedBoxes] = useState<AnimatedBox[]>([]);

  // Generate kotak animasi secara random saat mount
  useEffect(() => {
    const generated = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`, // posisi horizontal acak
      top: `${Math.random() * 100}%`,  // posisi vertical acak
      delay: Math.random() * 2,        // delay animasi acak
      size: `${40 + Math.random() * 40}px`, // ukuran 40–80px
    }));
    setAnimatedBoxes(generated);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-20 overflow-hidden bg-gradient-to-br from-gray-100 to-white">
      {/* Background Lingkaran Blur */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 -left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-2xl opacity-20"
      />

      {/* Kotak-kotak animasi background */}
      {animatedBoxes.map((box) => (
        <motion.div
          key={box.id}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }} // muter penuh
          transition={{
            repeat: Infinity, // animasi loop tak terbatas
            duration: 5,      // durasi putaran 5 detik
            ease: 'linear',   // perputaran linear
            delay: box.delay, // delay random biar lebih natural
          }}
          style={{
            position: 'absolute',
            left: box.left,
            top: box.top,
            width: box.size,
            height: box.size,
            borderRadius: '10px',
            backgroundColor: 'rgba(253, 224, 71, 0.5)', // kuning transparan
            zIndex: 1,
          }}
        />
      ))}

      {/* Hero Card (konten utama) */}
      <motion.div
        ref={(el) => {
          tiltRef.current = el; // pasang tilt
          viewRef(el);          // pasang intersection observer
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}} // fade-up kalau in view
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-white px-4 sm:px-6 py-8 sm:py-12 rounded-xl sm:rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg sm:shadow-xl w-full max-w-3xl mx-auto"
      >
        {/* Judul dengan efek typewriter */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-yellow-500 leading-tight">
          <Typewriter
            words={["Hi, I'm Adi Widiana"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h1>

        {/* Deskripsi singkat */}
        <p className="text-base sm:text-lg md:text-xl text-black/90 max-w-xl mx-auto mb-6">
          I'm a passionate web developer who loves building beautiful and functional websites using modern technologies.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            href="#projects"
            className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition text-sm sm:text-base"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            href="#contact"
            className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-50 transition text-sm sm:text-base"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
