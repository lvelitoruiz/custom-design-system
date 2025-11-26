const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, './index.html'),
    path.join(__dirname, './src/**/*.{vue,js,ts,jsx,tsx}'),
    path.join(__dirname, '../../packages/vue/src/**/*.{vue,js,ts,jsx,tsx}'),
  ],
  presets: [require('../../packages/tokens/src/tailwind-preset.js')],
  darkMode: 'class',
  plugins: [],
};

