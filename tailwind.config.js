/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          600: '#006E3F',
          700: '#005a33',
          800: '#004D2C',
          900: '#003d23',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          600: '#C9A24A',
          700: '#b8923d',
        },
        sand: {
          DEFAULT: '#E4CFA3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
