const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, './src/**/*.{html,ts,js}'),
    path.join(__dirname, '../../packages/angular/src/**/*.{html,ts,js}'),
  ],
  presets: [require('../../packages/tokens/src/tailwind-preset.js')],
  darkMode: 'class',
  plugins: [],
}
