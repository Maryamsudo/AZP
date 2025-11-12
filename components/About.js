"use client";
import Image from "next/image";
import { Code, Palette, Zap, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 transition-colors duration-300 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 fade-in-section">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black slide-up">
            About Me
          </h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 mt-2 slide-up delay-1">
            Passionate about ensuring quality, optimizing workflows, and managing
            projects that deliver measurable impact.
          </p>
        </div>

        {/* Main About Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 slide-up delay-2">
          {/* Left - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg animate-float max-w-sm">
              <Image
                src="/aleenapic.png"
                alt="Aleena Zaid"
                width={500}
                height={400}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="w-full md:w-1/2 text-gray-700">
            <h3 className="text-2xl md:text-2xl font-semibold text-gray-900 mb-4 slide-up delay-3">
              Hello! I'm Aleena Zaid
            </h3>

            <p className="mb-4 leading-relaxed text-justify slide-up delay-4">
              I’m a Software Engineering graduate (CGPA 3.74) with hands-on
              experience in customer engagement, software quality, and project
              coordination. I bridge the gap between technical teams and
              business goals to deliver efficient, user-centered solutions that
              create measurable value.
            </p>

            <p className="mb-4 leading-relaxed text-justify slide-up delay-5">
              With a focus on collaboration, process optimization, and
              continuous improvement, I aim to enhance software delivery and
              drive impactful project outcomes in dynamic, tech-driven
              environments.
            </p>

            <p className="leading-relaxed text-justify slide-up delay-6">
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical blog posts, or mentoring aspiring
              developers.
            </p>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 slide-up delay-8">
          {[
            {
              icon: <Code className="w-8 h-8 mb-3 text-black" />,
              title: "Quality Assurance",
              desc: "Ensuring flawless software performance through detailed testing and analysis.",
            },
            {
              icon: <Palette className="w-8 h-8 mb-3 text-black" />,
              title: "Project Management",
              desc: "Planning, organizing, and delivering projects efficiently from start to finish.",
            },
            {
              icon: <Zap className="w-8 h-8 mb-3 text-black" />,
              title: "Process Optimization",
              desc: "Improving workflows and communication to enhance team productivity.",
            },
            {
              icon: <Users className="w-8 h-8 mb-3 text-black" />,
              title: "Team Collaboration",
              desc: "Building strong cross-functional teams for impactful project results.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center"
            >
              <div className="flex justify-center">{card.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .slide-up {
          opacity: 0;
          animation: fadeUp 1s ease-out forwards;
        }
        .delay-1 {
          animation-delay: 0.2s;
        }
        .delay-2 {
          animation-delay: 0.4s;
        }
        .delay-3 {
          animation-delay: 0.6s;
        }
        .delay-4 {
          animation-delay: 0.8s;
        }
        .delay-5 {
          animation-delay: 1s;
        }
        .delay-6 {
          animation-delay: 1.2s;
        }
        .delay-7 {
          animation-delay: 1.4s;
        }
        .delay-8 {
          animation-delay: 1.6s;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
