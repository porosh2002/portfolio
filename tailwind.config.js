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
          whatsApp:'rgb(0,230,118)',
          telegram:'rgb(38,165,228)',
          skype:'#00AFF0'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
