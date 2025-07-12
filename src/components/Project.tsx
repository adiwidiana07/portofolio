'use client';

import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Web-Online Course',
    description: 'Online Course Website With Html Css Js.',
    image: '/project1.jpg',
    link: 'https://desain.digistik.id/allacademy/',
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
];

export default function ShowcaseProjects() {
  return (
    <section id="projects" className="relative px-6 py-28 bg-gradient-to-br from-gray-100 to-white overflow-hidden">
      <div className="absolute top-0 -left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-2xl opacity-20"></div>

      <h2 className="text-4xl font-bold text-center text-yellow-600 mb-16" data-aos="fade-up">
        My Projects
      </h2>

      <div className="space-y-24 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 transition-transform duration-500 hover:scale-[1.02] group ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Image */}
            <div className="md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />
              </a>
            </div>

            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-yellow-600 mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-6">{project.description}</p>
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
