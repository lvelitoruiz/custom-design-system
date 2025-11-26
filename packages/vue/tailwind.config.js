/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../tokens/src/tailwind-preset.js')],
  content: [
    './src/**/*.{vue,ts,js}',
  ],
};

