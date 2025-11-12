module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",        // Add this
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-black",
    "text-gray-700",
    "text-gray-900",
    "text-gray-600",
    "text-gray-100",
    "dark:text-gray-100",
    "dark:text-gray-300",
    "dark:text-gray-400",
    "dark:text-indigo-400",
    "bg-white",
    "bg-gray-50",
    "bg-gray-800",
    "hover:shadow-xl",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
