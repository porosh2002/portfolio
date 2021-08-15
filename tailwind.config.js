module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily:{
        'montserrat':['Montserrat', 'sans-serif']
      },
      gradientColorStops: theme => ({
        'primary': '#FE6B8B',
        'secondary': '#FF8E53',
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
