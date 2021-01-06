const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/*.js', './components/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dusty-gray': '#9A9A9A',
        'mine-shaft': '#2D2D2D',
        emperor: '#545454',
        scorpion: '#5C5C5C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
