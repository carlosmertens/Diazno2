const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        section: '7% 93%',
      },
      gridTemplateRows: {
        music: '75% 25%',
      },
      colors: {
        'dusty-gray': '#9A9A9A',
        'mine-shaft': '#2D2D2D',
        emperor: '#545454',
        scorpion: '#5C5C5C',
      },
      backgroundImage: (theme) => ({
        'hero-sm': "url('/hero-sm.jpg')",
        'hero-md': "url('/hero-md.jpg')",
        'hero-lg': "url('/hero-lg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
