'use client';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="relative flex flex-col items-center text-center px-6 overflow-hidden w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] pb-0 min-h-screen">
  {/* 🌑 Floating Black Orbs Background */}
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
        top: 10%;
        left: 15%;
      }
      .animate-orb2 {
        animation: orb2 15s ease-in-out infinite;
        top: 50%;
        right: 10%;
      }
      .animate-orb3 {
        animation: orb3 18s ease-in-out infinite;
        bottom: 10%;
        left: 40%;
      }
    `}</style>
  </div>


      {/* 📨 Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-7"></div>
        <p className="text-center text-gray-600 mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaEnvelope className="text-black text-xl" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">aleenazaid7@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaPhoneAlt className="text-black text-xl" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+92 349 6711778</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaMapMarkerAlt className="text-black text-xl" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">Islamabad</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-10 text-left">
            <h4 className="font-semibold mb-2 text-lg dark:text-black">Send me a message</h4>
            <p className="text-gray-600 mb-6">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows="4"
                  className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition w-40"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
