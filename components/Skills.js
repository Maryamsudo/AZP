'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  // Floating blobs animation variants
  const blobVariants = {
    float1: {
      y: [0, 40, 0],
      x: [0, 30, 0],
      transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
    },
    float2: {
      y: [0, -30, 0],
      x: [0, -20, 0],
      transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
    },
    float3: {
      y: [0, 25, 0],
      x: [0, 15, 0],
      transition: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  // Skill data for each tab
  const skillsData = {
    frontend: [
      "Trello",
      "Jira",
      "GitHub",
      "Microsoft Project",
      "ClickUp",
      "Slack",
    ],
    backend: [
      "VS Code",
      "Android Studio",
      "Visual Studio",
      "NetBeans",
      "Expo",
      "Figma",
      "Router",
    ],
    tools: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Google Docs",
      "Google Sheets",
      "AdsPower",
      "Anti-detect Browsers",
      "Remote Work Tools",
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Agile/Scrum",
      "Code Review",
      "Mentoring",
      "Project Management",
      "Time Management",
    ],
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white text-black px-6 py-20 w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]"
    >
      {/* --- FLOATING BLACK BLOBS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={blobVariants}
          animate="float1"
          className="absolute top-10 left-20 w-64 h-64 bg-black/20 rounded-full blur-3xl"
        />
        <motion.div
          variants={blobVariants}
          animate="float2"
          className="absolute bottom-20 right-32 w-72 h-72 bg-black/30 rounded-full blur-3xl"
        />
        <motion.div
          variants={blobVariants}
          animate="float3"
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-black/10 rounded-full blur-2xl"
        />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">
          Skills & Technologies
        </h2>
        <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
         <p className=" dark:text-gray-400 slide-up delay-1 mx-auto leading-relaxed  text-gray-700 mb-12">
            A comprehensive overview of my technical skills and the technologies I work with on a regular basis.
          </p>
       
        {/* --- Tabs Section --- */}
        <div className="flex justify-center items-center mb-10">
          <div className="flex bg-gray-200 rounded-full overflow-hidden shadow-inner">
            {[
              { key: 'frontend', label: 'Project Management Tools' },
              { key: 'backend', label: 'Software Development Tools' },
              { key: 'tools', label: 'Office & Productivity' },
              { key: 'soft', label: 'Soft Skills' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-3 font-semibold transition-all duration-300 rounded-full
                  ${
                    activeTab === tab.key
                      ? 'bg-white shadow-md text-black scale-105'
                      : 'text-gray-600 hover:text-black'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- Skills Box --- */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-50 border border-gray-300 rounded-2xl shadow-sm px-6 py-8 max-w-5xl mx-auto flex flex-wrap justify-center gap-4"
        >
          {skillsData[activeTab].map((skill, i) => (
            <div
              key={i}
              className="px-4 py-2 bg-gray-200 rounded-lg shadow-sm text-sm font-medium text-black"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
