'use client';
// ← Harus client component karena pakai interaktivitas (hover, dll)

import React from 'react';
// Import ikon dari react-icons
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Contact() {
  // Array berisi data social media (href, icon, label)
  const icons = [
    {
      href: 'https://github.com/adiwidiana07',
      icon: <FaGithub size={30} color="#000" />, // GitHub → ikon hitam
      label: 'GitHub',
    },
    {
      href: 'http://www.linkedin.com/in/i-putu-adi-widiana-5139a5267',
      icon: <FaLinkedin size={30} color="#0077B5" />, // LinkedIn → biru
      label: 'LinkedIn',
    },
    {
      href: 'https://www.instagram.com/widianaadi11?igsh=MW8zaHZ5dmgzM3Zhdg==',
      icon: <FaInstagram size={30} color="#E4405F" />, // Instagram → pink kemerahan
      label: 'Instagram',
    },
    {
      href: 'https://www.tiktok.com/@adiwidiana4?_t=ZS-8xwGRsUsQEM&_r=1',
      icon: <FaTiktok size={30} color="#000000" />, // TikTok → hitam
      label: 'TikTok',
    },
    {
      href: 'https://wa.me/6287865019646',
      icon: <FaWhatsapp size={30} color="#25D366" />, // WhatsApp → hijau
      label: 'WhatsApp',
    },
  ];

  return (
    <section 
      id="contact" 
      className="px-6 py-20 bg-white text-center"
      // id="contact" → supaya bisa di-scroll dari navbar (href="#contact")
      // px-6 py-20 → padding horizontal & vertical
      // bg-white → background putih
      // text-center → teks rata tengah
    >
      {/* Judul Section */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        Contact Me
      </h2>

      {/* Deskripsi */}
      <p className="text-gray-700 mb-6">
        Feel free to reach out to me on any platform below:
      </p>

      {/* Deretan Ikon Sosial Media */}
      <div className="flex justify-center gap-6 flex-wrap">
        {icons.map((item) => (
          <a
            key={item.label} // key unik untuk tiap item map
            href={item.href} // link ke sosial media
            target="_blank" // buka di tab baru
            rel="noopener noreferrer" // keamanan saat buka tab baru
            aria-label={item.label} // aksesibilitas (screen reader)
            className="transition transform hover:scale-110"
            // hover:scale-110 → ikon membesar saat hover
            // transition transform → animasi halus
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
