module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './*.html',
    './src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          modalBG:'#343a40ed',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
