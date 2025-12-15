'use client'; 
// 🔹 Next.js directive agar komponen ini dirender di client (bukan server).

import React from 'react';
import Image from 'next/image'; 
// 🔹 Import komponen bawaan Next.js untuk optimisasi gambar (lebih cepat & responsif).

// 🔹 Data project ditaruh di array "projects" supaya mudah di-loop (dynamic rendering).
const projects = [
  {
    title: 'Web-Online Course', // Judul project
    description: 'Online Course Website With Html Css Js.', // Deskripsi singkat project
    image: '/project1.jpg', // Path gambar (di folder public)
    link: 'https://desain.digistik.id/allacademy/', // Link demo project
  },
  {
    title: 'Time Keeper App',
    description: 'App time-keeper With Html Css Js.',
    image: '/project2.jpg',
    link: 'https://adiwidiana07.github.io/time-keeper/',
  },
  {
    title: 'Football Coaching App',
    description: 'Platform Football Coaching With Html Css Js.',
    image: '/project3.jpg',
    link: 'https://desain.digistik.id/mfc/',
  },
  {
    title: 'Computer lab loan',
    description: 'Platform Computer lab loan With Laravel.',
    image: '/Project4.png',
    link: 'https://github.com/adiwidiana07/labpplg-main',
  },
];

// 🔹 Komponen utama untuk menampilkan section daftar project
export default function ShowcaseProjects() {
  return (
    <section 
      id="projects" 
      className="relative px-6 py-28 bg-gradient-to-br from-gray-100 to-white overflow-hidden"
      // Section dengan padding, background gradasi, dan overflow hidden
    >
      {/* 🔹 Background dekorasi blur kuning */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-2xl opacity-20"></div>

      {/* 🔹 Judul section */}
      <h2 
        className="text-4xl font-bold text-center text-yellow-600 mb-16" 
        data-aos="fade-up" // animasi AOS muncul dari bawah
      >
        My Projects
      </h2>

      {/* 🔹 Container utama project list */}
      <div className="space-y-24 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <div
            key={index} // wajib unik saat looping
            className={`flex flex-col md:flex-row items-center gap-10 transition-transform duration-500 hover:scale-[1.02] group 
              ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            // 🔹 Struktur flex:
            // - Mobile = column
            // - Desktop = row
            // - Genap → normal, Ganjil → dibalik (row-reverse) biar selang-seling
            data-aos="fade-up" // animasi scroll
            data-aos-delay={index * 200} // tiap project muncul dengan delay bertahap
          >
            {/* 🔹 Bagian Gambar */}
            <div className="md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  // 🔹 Efek hover zoom in pada gambar
                />
                {/* 🔹 Overlay transparan hitam untuk efek elegan */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />
              </a>
            </div>

            {/* 🔹 Bagian Teks */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-yellow-600 mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-6">{project.description}</p>

              {/* 🔹 Tombol Live Demo */}
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="px-5 py-2 rounded-full bg-yellow-600 text-white font-medium hover:bg-yellow-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
