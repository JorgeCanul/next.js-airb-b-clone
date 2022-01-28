module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens : {
        'xs': '320px',
        },
        width: {
          'xs': '38rem',
        },
        fontSize: {
          'xs': '.70rem',
        },
    },
  },
  plugins: [],
}
