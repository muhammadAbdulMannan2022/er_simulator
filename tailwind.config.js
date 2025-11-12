/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

      colors: {
        primary: '#10A9B3',
        accent: '#f8dcd7',
        foreground: '#0F0F0F',
        background: '#FBFEFE',
        'dark-gray': '#6A707C',
        grayText: '#8E8E93',
      },
    },
  },
  plugins: [],
};
