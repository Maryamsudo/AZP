"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Experience() {
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    const newOrbs = Array.from({ length: 6 }).map(() => ({
      width: Math.random() * 100 + 100,
      height: Math.random() * 100 + 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 6 + 6,
    }));
    setOrbs(newOrbs);
  }, []);

  const experienceData = [
    {
      title: "Hackta Connect",
      duration: "April 2025 - July 2025",
      details: [
        "Worked as Digital Campaign Analyst, executed automated ad campaigns and traffic",
        "Generation strategies to boost client website visibility and performance analytics",
      ],
      icon: <FaBriefcase />,
    },
    {
      title: "Prime Bpo & Telecommunication",
      duration: "July 2025 - Sep 2025",
      details: [
        "Worked as a Customer Engagement Specialist at Prime BPO for two months",
        "Driving client engagement and contributing to lead generation in a B2B campaign.",
      ],
      icon: <FaBriefcase />,
    },
    {
      title: "Globe Design Solutions",
      duration: "Sep 2025 - Present",
      details: [
        "Driving business growth as a Business Development Executive by generating leads",
        "Building strong client relationships, and executing targeted B2B campaigns.",
        "Focused on market research, strategic outreach, and delivering measurable results.",
      ],
      icon: <FaBriefcase />,
    },
    {
      title: "Bachelor of Science in Software Engineering",
      company: "PMAS Arid Agriculture University",
      duration: "2021 - 2025",
      details: [
        "Strengthened core concepts and explored advanced realms of the software world.",
        "GPA: 3.7/4.0 ",
      ],
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6 py-20 w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-black/20 blur-3xl"
            style={{
              width: `${orb.width}px`,
              height: `${orb.height}px`,
              top: `${orb.top}%`,
              left: `${orb.left}%`,
            }}
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold mb-3">Experience & Education</h2>
        <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          My professional journey and academic background in software development.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full"></div>

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`mb-10 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-5/12"></div>

            <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-white border-4 border-gray-600 rounded-full shadow-md">
              {exp.icon}
            </div>

            <div className="w-5/12 bg-gray-50 p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
              <p className="text-gray-600 text-sm">{exp.company}</p>
              <p className="text-xs text-gray-500 mb-3">{exp.duration}</p>
              <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
