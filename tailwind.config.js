/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all components for class names
    "./public/index.html",
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      desaiPink: '#dd298a',
      dfPink: '#CF306E',
      lightPink: '#FCE4EC',
      dark: '#731742',
    },
  },
},
  plugins: [
  require('@tailwindcss/aspect-ratio'),
],

};
