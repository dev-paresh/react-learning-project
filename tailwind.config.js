/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: '#E6E6FA',
          200: '#D9D9E8',
          300: '#C0C0E3',
          400: '#A3A3D8',
          500: '#A99BCF',
          600: '#8B7BCE',
          700: '#7F6BBE',
          800: '#6B5DAF',
          900: '#4B3F8F',

        },
      },
    },
  },
  plugins: [],
}

