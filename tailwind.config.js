/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      width: {
        '5xl': '200px'
      },
      height: {
        '5xl': '800px'
      },
      borderRadius: {
        'semifull': '200px'
      }
    },
  },
  plugins: [],
}

