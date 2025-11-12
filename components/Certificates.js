'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaMicrosoft, FaUniversity } from 'react-icons/fa';
import { SiCoursera, SiClickup, SiTrello, SiMeta } from 'react-icons/si';

export default function Certificates() {
  const sectionRef = useRef(null);

  const certificateData = [
    {
      title: 'TES Certificate for Graphic Designing',
      year: '2021',
      institute: 'University Institute of Information Technology',
      logo: <FaUniversity className="text-blue-700 text-2xl" />,
    },
    {
      title: 'Certificate for Web Development',
      year: '2021',
      institute: 'University Institute of Information Technology',
      logo: <FaUniversity className="text-blue-700 text-2xl" />,
    },
    {
      title: 'Project Management',
      year: '2024',
      institute: 'Google (Coursera)',
      logo: <FaGoogle className="text-red-500 text-2xl" />,
    },
    {
      title: 'Version Control',
      year: '2024',
      institute: 'Meta (Coursera)',
      logo: <SiMeta className="text-blue-500 text-2xl" />,
    },
    {
      title: 'Oversee a Project with ClickUp',
      year: '2025',
      institute: 'Coursera Project Network',
      logo: <SiClickup className="text-purple-500 text-2xl" />,
    },
    {
      title: 'Streamlined Project Management with Trello: AI Integration',
      year: '2025',
      institute: 'Coursera Project Network',
      logo: <SiTrello className="text-blue-400 text-2xl" />,
    },
    {
      title: 'Lean Software Development',
      year: '2025',
      institute: 'University of Minnesota (Coursera)',
      logo: <SiCoursera className="text-sky-600 text-2xl" />,
    },
    {
      title: 'Mastering Scrum Framework for Agile Development',
      year: '2025',
      institute: 'Board Infinity (Coursera)',
      logo: <SiCoursera className="text-sky-600 text-2xl" />,
    },
    {
      title: 'Project Risk Management',
      year: '2025',
      institute: 'Coursera Instructor Network',
      logo: <SiCoursera className="text-sky-600 text-2xl" />,
    },
    {
      title: 'Digital Marketing',
      year: '2025',
      institute: 'University of California, Irvine (Coursera)',
      logo: <SiCoursera className="text-sky-600 text-2xl" />,
    },
    {
      title: 'Google Ads for Beginners',
      year: '2025',
      institute: 'Coursera Project Network',
      logo: <FaGoogle className="text-red-500 text-2xl" />,
    },
    {
      title: 'User Interface Design and Prototyping',
      year: '2025',
      institute: 'Microsoft (Coursera)',
      logo: <FaMicrosoft className="text-blue-700 text-2xl" />,
    },
    {
      title: 'Content, Advertising & Social IMC',
      year: '2025',
      institute: 'Northwestern University (Coursera)',
      logo: <FaUniversity className="text-indigo-600 text-2xl" />,
    },
    {
      title: 'Design Thinking for Innovation',
      year: '2025',
      institute: 'University of Virginia (Coursera)',
      logo: <FaUniversity className="text-orange-500 text-2xl" />,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setShowAll(false);
  }, []);

  const visibleCertificates = showAll ? certificateData : certificateData.slice(0, 4);

  const toggleShow = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setShowAll(false), 300);
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="py-20 bg-gray-50 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] overflow-hidden text-gray-900 flex flex-col items-center justify-center px-6"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Certificates & Achievements</h2>
        <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-xl mx-auto">
          A showcase of my professional learning and certifications from global platforms.
        </p>
      </div>

      {/* Certificate List */}
      <div className="w-full max-w-4xl space-y-6">
        {visibleCertificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="shrink-0">{cert.logo}</div>
            <div>
              <h3 className="text-lg font-semibold">
                {cert.title}{' '}
                <span className="text-gray-800">| {cert.year}</span>
              </h3>
              <p className="text-sm text-gray-600">{cert.institute}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More / Show Less Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleShow}
        className="mt-10 px-6 py-2 rounded-full bg-black text-white font-medium hover:opacity-80 transition-all"
      >
        {showAll ? 'Show Less' : 'Load More'}
      </motion.button>
    </section>
  );
}
