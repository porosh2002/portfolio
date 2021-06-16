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
