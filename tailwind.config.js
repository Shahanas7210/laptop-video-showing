/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // Include your HTML file
    "./src/**/*.{js,ts,jsx,tsx,vue}",  // Add all source files where Tailwind classes are used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}