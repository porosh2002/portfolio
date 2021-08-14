module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily:{
        'montserrat':['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
