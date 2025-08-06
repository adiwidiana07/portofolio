'use client';

import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-48 bg-gradient-to-br from-white via-gray-50 to-yellow-50 text-gray-900 overflow-hidden"
    >
      {/* Optional Background Blurred Circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-32 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-2xl opacity-20"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Text */}
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

        {/* Image */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <Image
            src="/profile.jpg"
            alt="My Photo"
            width={300}
            height={300}
            className="rounded-2xl shadow-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
