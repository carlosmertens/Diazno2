const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/*.js', './components/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.warmGray,
      amber: colors.amber,
      red: colors.red,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
