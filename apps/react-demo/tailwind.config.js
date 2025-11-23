const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    path.join(__dirname, '../../packages/react/src/**/*.{js,ts,jsx,tsx}'),
  ],
  presets: [require('../../packages/tokens/src/tailwind-preset.js')],
  darkMode: 'class',
  plugins: [],
}