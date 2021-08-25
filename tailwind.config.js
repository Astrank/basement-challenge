module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: {
          black: "#1D1D1D",
          grey: "#151515"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
