module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#181818',
     'secondary': '#212121',
     'tertiary': '#323232',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
