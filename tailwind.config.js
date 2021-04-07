module.exports = {
  purge: {
    content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],

    options: {
      safelist: [
        'w-4', 'h-4', 'w-6', 'h-6', 'w-8', 'h-8', 'w-12', 'h-12',
        'py-5', 'py-7', 'py-2'
      ],
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
