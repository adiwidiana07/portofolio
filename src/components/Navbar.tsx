'use client'; // Next.js directive agar komponen ini dijalankan di client side (bukan server)

import React, { useState, useEffect } from 'react';
import { FaFileDownload, FaBars, FaTimes } from 'react-icons/fa'; // Import ikon dari react-icons
import { motion, AnimatePresence } from 'framer-motion'; // Untuk animasi modal

export default function Navbar() {
  // State untuk membuka/tutup menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // State untuk membuka/tutup modal preview CV
  const [showPreview, setShowPreview] = useState(false);

  // Fungsi toggle menu mobile (hamburger)
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Fungsi download CV
  const handleDownload = () => {
    const link = document.createElement('a'); // buat elemen <a>
    link.href = '/cv.pdf'; // lokasi file CV
    link.download = 'cv.pdf'; // nama file saat di-download
    document.body.appendChild(link); // tempel ke body
    link.click(); // klik otomatis
    document.body.removeChild(link); // hapus lagi
  };

  // 🔒 Lock scroll saat modal terbuka
  // Kalau modal terbuka, scroll background dikunci
  useEffect(() => {
    if (showPreview) {
      document.body.style.overflow = 'hidden'; // nonaktifkan scroll
    } else {
      document.body.style.overflow = 'auto'; // aktifkan scroll lagi
    }
  }, [showPreview]);

  return (
    <>
      {/* 🔹 Navbar utama */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg px-6 py-4 flex justify-between items-center z-50">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">Adi Widiana</h1>

        {/* Navigasi Tengah - Desktop */}
        {/* Hanya tampil di layar md ke atas */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#projects" className="hover:text-black">Projects</a></li>
          <li><a href="#contact" className="hover:text-black">Contact</a></li>
        </ul>

        {/* Ikon kanan */}
        <div className="flex items-center gap-4 text-gray-600 text-xl">
          {/* Tombol Preview CV */}
          <button
            onClick={() => setShowPreview(true)} // buka modal preview CV
            aria-label="Preview CV"
            title="Lihat CV"
            className="hover:text-black"
          >
            <FaFileDownload /> {/* Ikon download */}
          </button>

          {/* Hamburger Menu - Mobile */}
          {/* Tampil hanya di layar kecil (md:hidden) */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="md:hidden text-2xl hover:text-black"
          >
            {/* Kalau menuOpen true tampil X, kalau false tampil garis tiga */}
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {/* Muncul hanya saat menuOpen = true */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 md:hidden">
            <ul className="flex flex-col gap-4 text-gray-600 font-medium">
              <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-black">About</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-black">Projects</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-black">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* 🔹 Preview CV Modal */}
      {/* Pakai AnimatePresence supaya animasi exit berjalan */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }} // kondisi awal (transparan)
            animate={{ opacity: 1 }} // kondisi setelah muncul (opacity 1)
            exit={{ opacity: 0 }} // animasi keluar (fade out)
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            {/* Modal box */}
            <motion.div
              key="modal"
              initial={{ scale: 0.8, opacity: 0 }} // awal kecil & transparan
              animate={{ scale: 1, opacity: 1 }} // animasi membesar dan muncul
              exit={{ scale: 0.8, opacity: 0 }} // animasi mengecil saat keluar
              transition={{ duration: 0.2 }} // durasi animasi
              className="bg-white rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[50%] max-h-[90vh] overflow-auto p-4"
            >
              {/* Judul modal */}
              <h2 className="text-xl font-bold mb-2">Preview CV</h2>

              {/* Iframe untuk menampilkan CV */}
              <iframe
                src="/cv.pdf" // file CV yang akan ditampilkan
                width="100%"
                height="500px"
                className="border mb-4"
              ></iframe>

              {/* Tombol Aksi */}
              <div className="flex justify-end gap-2">
                {/* Tombol Download */}
                <button
                  onClick={handleDownload}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Download
                </button>

                {/* Tombol Tutup modal */}
                <button
                  onClick={() => setShowPreview(false)} // menutup modal
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
