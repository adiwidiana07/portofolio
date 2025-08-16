'use client';
// ← harus client component karena pakai React hooks & interaksi DOM

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  // Ref untuk elemen kursor utama (lingkaran kecil)
  const cursorRef = useRef<HTMLDivElement>(null);

  // Ref untuk trail (lingkaran besar transparan yang mengikuti kursor)
  const trailRef = useRef<HTMLDivElement>(null);

  // State untuk mengecek apakah cursor custom aktif atau tidak
  const [enabled, setEnabled] = useState(true);

  // Hook untuk deteksi ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setEnabled(window.innerWidth >= 768); 
      // Custom cursor hanya aktif di layar >= 768px (tablet/desktop)
      // Di mobile/HP → pakai kursor default
    };

    handleResize(); // Panggil saat komponen pertama kali mount

    // Event listener saat window di-resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hook untuk update posisi kursor
  useEffect(() => {
    if (!enabled) return; // kalau disabled, jangan jalankan logic

    const moveCursor = (e: MouseEvent) => {
      // Update posisi kursor utama (langsung mengikuti mouse)
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }

      // Update posisi trail (animasi smooth mengikuti kursor)
      if (trailRef.current) {
        trailRef.current.animate(
          [
            { left: trailRef.current.style.left, top: trailRef.current.style.top },
            { left: e.clientX + 'px', top: e.clientY + 'px' },
          ],
          {
            duration: 300, // waktu animasi (ms)
            fill: 'forwards', // posisi akhir dipertahankan
          }
        );
      }
    };

    // Tambahkan event listener untuk mousemove
    window.addEventListener('mousemove', moveCursor);

    // Cleanup event listener saat komponen unmount
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [enabled]);

  // Kalau cursor custom tidak aktif (mobile), return null
  if (!enabled) return null;

  return (
    <>
      {/* Kursor utama (lingkaran kecil berwarna kuning) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-yellow-500 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150"
        // fixed → selalu ikut layar
        // pointer-events-none → biar tidak mengganggu klik
        // mix-blend-difference → blending mode biar terlihat di semua background
      />

      {/* Trail (lingkaran besar transparan mengikuti cursor dengan delay) */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-yellow-300 pointer-events-none z-[9998] mix-blend-difference opacity-60"
        // border → lingkaran outline
        // opacity-60 → agak transparan
      />
    </>
  );
}
