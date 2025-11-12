"use client";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const featuredProjects = [
    {
      title: 'Field To Fork App',
      description:
        'A farmer-to-consumer mobile app connecting local farmers directly with buyers for fresh produce and transparent trading.',
      image: '/f2f.png',
      tech: ['ReactNative', 'Node.js', 'Expo', 'Cloudinary', 'Firebase'],
      demo: '#',
      code: '#',
    },
    {
      title: 'JavaChip Coffee Website',
      description:
        'A modern coffee shop website offering an elegant digital experience with smooth navigation and cozy branding.',
      image: '/jc.png',
      tech: ['Html', 'CSS', 'Javascript', 'Figma', 'Framer Motion'],
      demo: '#',
      code: '#',
    },
  ];

  const otherProjects = [
    {
      title: 'SuperMarket Billing System',
      description:
        'A billing system designed to automate product management, generate invoices, and streamline operations efficiently.',
      image: '/SBS.png',
      tech: ['C++', 'OOP', 'File Handling', '+1'],
      demo: '#',
      code: '#',
    },
    {
      title: 'Online Chat App',
      description:
        'A real-time Android chat application enabling secure messaging, user authentication, and instant notifications.',
      image: '/CHAT.png',
      tech: ['Android Studio', 'Java', 'Firebase', '+1'],
      demo: '#',
      code: '#',
    },
    {
      title: 'Portfolio Landing Page',
      description:
        'A simple yet elegant personal portfolio website built to showcase projects and contact information.',
      image: '/Pf.png',
      tech: ['HTML', 'CSS', 'JavaScript', '+1'],
      demo: '#',
      code: '#',
    },
  ];

  return (
    <section 
      id="projects"
      className="min-h-screen bg-gray-50 text-gray-900 px-6 py-20 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2 text-black">Featured Projects</h2>
        <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
        <p className="text-gray-600 mb-12">A showcase of my recent work and personal projects</p>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-64 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-medium shadow hover:bg-gray-200 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-medium shadow hover:bg-gray-200 transition"
                  >
                    <FaCode /> Code
                  </a>
                </div>
              </div>

              <div className="p-6 text-left flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="bg-gray-100 px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-2">Other Notable Projects</h3>
        <p className="text-gray-600 mb-12">
          A collection of additional works showcasing various skills and tools
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {otherProjects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left flex flex-col flex-1">
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="bg-gray-100 px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
