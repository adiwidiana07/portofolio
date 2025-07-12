'use client';

import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Contact() {
  const icons = [
    {
      href: 'https://github.com/adiwidiana07',
      icon: <FaGithub size={30} color="#000" />, // GitHub warna hitam
      label: 'GitHub',
    },
    {
      href: 'http://www.linkedin.com/in/i-putu-adi-widiana-5139a5267',
      icon: <FaLinkedin size={30} color="#0077B5" />, // LinkedIn biru
      label: 'LinkedIn',
    },
    {
      href: 'https://www.instagram.com/widianaadi11?igsh=MW8zaHZ5dmgzM3Zhdg==',
      icon: <FaInstagram size={30} color="#E4405F" />, // Instagram pink kemerahan
      label: 'Instagram',
    },
    {
      href: 'https://www.tiktok.com/@adiwidiana4?_t=ZS-8xwGRsUsQEM&_r=1',
      icon: <FaTiktok size={30} color="#000000" />, // TikTok hitam (atau bisa pakai gradasi SVG kalau mau custom)
      label: 'TikTok',
    },
    {
      href: 'https://wa.me/6287865019646',
      icon: <FaWhatsapp size={30} color="#25D366" />, // WhatsApp hijau
      label: 'WhatsApp',
    },
  ];

  return (
    <section id="contact" className="px-6 py-20 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">Contact Me</h2>

      <p className="text-gray-700 mb-6">
        Feel free to reach out to me on any platform below:
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        {icons.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="transition transform hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
