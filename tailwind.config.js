module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
      },
    },
    extend: {
      margin: {
        '-half-screen': '50vw',
        '-half-width': '50%',
      },
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus'],
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
};
