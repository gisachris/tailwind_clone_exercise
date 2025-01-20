/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      width: {
        '5xl': '200px',
        'xplarge': '25rem',
        '85': '23rem'
      },
      height: {
        '5xl': '900px'
      },
      borderRadius: {
        'semifull': '200px',
        'casualfull': '700px'
      },
      inset: {
        'quater': '45%',
        'thquater': '15%',
      },
      backgroundColor: {
        'fire-blue': '#0171f8',
        'fire-light-blue': '#017cf9',
        'fire-lighter-blue': '#108ff7',
      },
      colors: {
        'fire-pink': '#ec636d'
      },
      fontFamily: {
        'quicksand': ['Quicksand'],
        'roboto': ['Roboto']
      },
      boxShadow: {
        'custom-xs': '0 1px 1px rgba(0, 0, 0, 0.02)'
      }
    },
  },
  plugins: [],
}

