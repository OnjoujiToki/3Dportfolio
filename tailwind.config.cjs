/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#fde7e1',
        secondary: '#976d65',
        tertiary: '#9eb0ec',
        'black-100': '#ffbeb6',
        'black-200': '#ecab9e',
        'white-100': '#9eb0ec',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #ecab9e',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
