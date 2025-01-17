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
      },
      objectPosition: {
        'top-50': '50% 0%',
        'left-50': '0% 50%',
        'right-50': '100% 50%',
        'bottom-50': '50% 100%',
      }
    },
  },
  plugins: [],
}

