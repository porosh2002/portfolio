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
        'crissxcross': "url('/Assets/crissxcross.png')",
        'light-wool': "url('/Assets/light-wool.png')",
        'low-contrast-linen': "url('/Assets/low-contrast-linen.png')",
        'skulls': "url('/Assets/skulls.png')",
        'sos': "url('/Assets/sos.png')",
       })
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
