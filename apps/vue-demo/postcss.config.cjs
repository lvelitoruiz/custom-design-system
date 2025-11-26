const path = require('path');

module.exports = {
  plugins: {
    tailwindcss: path.join(__dirname, 'tailwind.config.cjs'),
    autoprefixer: {},
  },
};

