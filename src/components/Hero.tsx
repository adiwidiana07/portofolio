'use client';

import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

const images = ['/images1.jpg', '/images2.jpg', '/images3.jpg'];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
      });
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-20 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-80' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div
        ref={tiltRef}
        className="relative z-10 text-white px-4 sm:px-6 py-8 sm:py-12 rounded-xl sm:rounded-2xl bg-white/5 border border-yellow-400/30 shadow-lg sm:shadow-xl w-full max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-yellow-400 leading-tight">
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
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-6">
          I'm a passionate web developer who loves building beautiful and functional websites using modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition text-sm sm:text-base"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-yellow-600 text-yellow-600 rounded-full hover:bg-yellow-50 transition text-sm sm:text-base"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
