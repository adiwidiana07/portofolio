'use client';
import Image from 'next/image';
import React from 'react';
export default function About(){
    return (
   <section id="about" className="px-6 py-48 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Teks */}
        <div data-aos="fade-up">
          <h2 className="text-3xl lg:text-6xl font-bold text-yellow-600 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a dedicated web developer with a strong passion for building beautiful, responsive, and functional websites. I focus on using modern tools like <span className="font-semibold">Next.js</span> and <span className="font-semibold">Tailwind CSS</span> to bring ideas to life.
          </p>
        </div>

        {/* Gambar */}
        <div className="flex justify-center" data-aos="fade-up">
          <Image
          src="/profile.jpg" // ✅ path dari public
            alt="My Photo"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
    );
}