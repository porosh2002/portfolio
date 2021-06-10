module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          modalBG:'#343a4091',
      },
      backgroundImage: theme => ({
        'flowers-pattern': "url('/Assets/flowers.png')",
       })
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
