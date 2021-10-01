const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      blue: colors.indigo,
      green: colors.emerald
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
