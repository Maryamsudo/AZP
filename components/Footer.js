'use client';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 -mt-10 py-12 px-8 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3  gap-10">
        {/* Left Section — About + Icons */}
        <div>
          <div className="flex   items-center gap-2 justify-start mb-3">
            <div className="bg-black text-white w-9 h-9 flex items-center justify-center rounded-md font-semibold">
              AZ
            </div>
            <span className="font-semibold text-gray-800">Aleena Zaid</span>
          </div>

          <p className="text-gray-600 mb-7">
            Software Engineer passionate about building amazing web experiences. Always learning, always growing.
          </p>

          <div className="flex gap-4">
            <a href="#" className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition">
              <FaGithub />
            </a>
            <a href="#" className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="#" className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Empty middle column for spacing */}
        <div></div>

        {/* Right Section — Quick Links + Projects */}
        <div className=" flex flex-col sm:flex-row justify-end gap-16 ">
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-lg text-black">Quick Links</h4>
            <ul className="text-gray-600 space-y-2 text-base">
              <li>
                <button onClick={() => handleScroll('home')} className="hover:text-gray-800 transition">Home</button>
              </li>
              <li>
                <button onClick={() => handleScroll('about')} className="hover:text-gray-800 transition">About</button>
              </li>
              <li>
                <button onClick={() => handleScroll('skills')} className="hover:text-gray-800 transition">Skills</button>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold mb-3 text-lg text-black">Projects</h4>
            <ul className="text-gray-600 space-y-2 text-base">
              <li>
                <button onClick={() => handleScroll('projects')} className="hover:text-gray-800 transition">All Projects</button>
              </li>
              <li>
                <button onClick={() => handleScroll('experience')} className="hover:text-gray-800 transition">Experience</button>
              </li>
              <li>
                <button onClick={() => handleScroll('contact')} className="hover:text-gray-800 transition">Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 Aleena Zaid. All rights reserved.</p>
      </div>
    </footer>
  );
}
