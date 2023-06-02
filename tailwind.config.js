/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
    screens: {
      lg: {max: '1040px'},
      md: {max: '790px'}
    }
  },
  plugins: [],
}

