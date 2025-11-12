"use client";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const titles = [
    "Project Management Specialist",
    "Quality Assurance Analyst",
    "Process Optimizer",
    "Strategic Planner",
    "Team Coordinator",
    "Continuous Improvement Enthusiast",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]"
    >
      {/* 🔵 Floating Orbs Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-64 h-64 bg-black opacity-20 rounded-full blur-3xl animate-orb1"></div>
        <div className="absolute w-72 h-72 bg-black opacity-25 rounded-full blur-3xl animate-orb2"></div>
        <div className="absolute w-60 h-60 bg-black opacity-15 rounded-full blur-2xl animate-orb3"></div>

        <style jsx>{`
          @keyframes orb1 {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            50% {
              transform: translate(80px, -100px) scale(1.2);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          @keyframes orb2 {
            0% {
              transform: translate(150px, 50px) scale(1);
            }
            50% {
              transform: translate(-50px, 100px) scale(1.3);
            }
            100% {
              transform: translate(150px, 50px) scale(1);
            }
          }
          @keyframes orb3 {
            0% {
              transform: translate(-100px, -80px) scale(1);
            }
            50% {
              transform: translate(50px, 120px) scale(1.1);
            }
            100% {
              transform: translate(-100px, -80px) scale(1);
            }
          }

          .animate-orb1 {
            animation: orb1 12s ease-in-out infinite;
            top: 20%;
            left: 15%;
          }
          .animate-orb2 {
            animation: orb2 15s ease-in-out infinite;
            top: 40%;
            right: 10%;
          }
          .animate-orb3 {
            animation: orb3 18s ease-in-out infinite;
            bottom: 15%;
            left: 40%;
          }
        `}</style>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm Aleena Zaid<span className="text-black"></span>
      </h1>

      {/* Rotating Subtitle */}
      <h2 className="text-xl md:text-1xl text-gray-500 mb-6 transition-all duration-500 ease-in-out">
        {titles[currentIndex]}
      </h2>

      <p
        className="text-gray-600 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        I transform complex ideas into well-managed, high-quality projects
        blending organization, communication, and vision to deliver results that inspire.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <a
          href="#contact"
          className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          Get In Touch
        </a>
        <a
          href="#about"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Learn More
        </a>
      </div>

     
      {/* Social Icons */}
<div className="flex gap-6">
  {[
    { href: "https://github.com/aleenazaid", Icon: Github },
    { href: "https://www.linkedin.com/in/aleena-zaid-708659260/", Icon: Linkedin },
    { 
      href: "mailto:aleenazaid7@gmail.com", 
      Icon: Mail, 
      gmailHref: "https://mail.google.com/mail/?view=cm&fs=1&to=aleenazaid7@gmail.com" 
    },
  ].map(({ href, gmailHref, Icon }, index) => (
    <a
      key={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        // Only intercept if gmailHref exists
        if (gmailHref) {
          e.preventDefault();
          const gmailTab = window.open(gmailHref, "_blank");
          if (!gmailTab || gmailTab.closed || typeof gmailTab.closed === "undefined") {
            window.location.href = href;
          }
        }
      }}
      className="p-3 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-all duration-300"
    >
      <Icon className="w-6 h-6 text-gray-600 hover:text-white transition-colors duration-300" />
    </a>
  ))}
</div>


    </section>
  );
}
