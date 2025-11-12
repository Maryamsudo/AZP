"use client";
import Link from "next/link";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  // Static theme just for icon display — no effect on site
  const [theme, setTheme] = useState("light");

  // Dummy toggle that only changes icon visually, no functionality
  const handleDummyToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-colors duration-300">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-black text-white rounded-lg w-10 h-10 flex items-center justify-center font-semibold text-lg transition-colors duration-300">
            AZ
          </div>
          <span className="font-semibold text-lg text-gray-900">
            Portfolio
          </span>
        </div>

        {/* Links + Fake Theme Button */}
        <div className="flex items-center space-x-6 text-gray-800 font-medium hidden md:flex">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Experience", "#experience"],
            ["Certificates", "#certificate"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="relative group transition duration-300"
            >
              <span className="group-hover:text-black transition-colors duration-300">
                {label}
              </span>
              <span className="absolute bottom-[-3px] left-0 w-0 group-hover:w-full h-[2px] bg-black transition-all duration-300"></span>
            </Link>
          ))}

          {/* Theme Button (No Functionality) */}
          <button
            onClick={handleDummyToggle}
            className="ml-2 p-2 rounded-full bg-gray-200 hover:scale-110 transition-transform duration-300"
            aria-label="Theme Button (No Functionality)"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-700" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
