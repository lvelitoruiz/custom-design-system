const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    path.join(__dirname, '../../node_modules/@luisvelito/react/**/*.js'),
  ],
  presets: [require('@luisvelito/react/preset')],
  darkMode: 'class',
  plugins: [],
}