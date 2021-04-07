module.exports = {
  purge: {
    content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],

    options: {
      safelist: ['w-6', 'h-6', 'w-8', 'h-8'],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
