'use client';

import React, { useState } from 'react';
import { FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg px-6 py-4 flex justify-between items-center z-50">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">Adi Widiana</h1>

        {/* Navigasi Tengah - Desktop */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#projects" className="hover:text-black">Projects</a></li>
          <li><a href="#contact" className="hover:text-black">Contact</a></li>
        </ul>

        {/* Ikon Sosial + Hamburger */}
        <div className="flex items-center gap-4 text-gray-600 text-xl">
          {/* Tombol Preview */}
          <button
            onClick={() => setShowPreview(true)}
            title="Lihat CV"
            className="hover:text-black"
          >
            <FaFileDownload />
          </button>

          {/* Hamburger Menu - only on mobile */}
          <button onClick={toggleMenu} className="md:hidden text-2xl hover:text-black">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
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

      {/* Preview CV */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[50%] max-h-[90vh] overflow-auto p-4">
            <h2 className="text-xl font-bold mb-2">Preview CV</h2>
            <iframe
              src="/cv.pdf"
              width="100%"
              height="500px"
              className="border mb-4"
            ></iframe>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleDownload}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Download
              </button>
              <button
                onClick={() => setShowPreview(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
