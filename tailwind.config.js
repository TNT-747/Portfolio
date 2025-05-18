/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: '#030711',
        light: '#f8fafc',
        primary: '#3b82f6',
        accent: '#6366f1',
      }
    },
  },
  plugins: [],
}

