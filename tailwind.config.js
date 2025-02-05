/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  safelist: [
    "sticky", "top-0", "z-30", "bg-fire-light-blue", "rounded-b-3xl", "pb-2", "hidden",
    "absolute", "top-4", "object-contain", "w-28", "my-6"
  ],
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
        'casualfull': '700px',
        'semicasualfull': '150px',
      },
      inset: {
        'quater': '45%',
        'thquater': '15%',
      },
      colors: {
        'fire-blue': '#0171f8',
        'fire-light-blue': '#017cf9',
        'fire-lighter-blue': '#108ff7',
        'fire-pink': '#ec636d',
        'light-gry': '#eeeeee'
      },
      fontFamily: {
        'quicksand': ['Quicksand'],
        'roboto': ['Roboto']
      },
      fontSize: {
        '5xl': '2rem',
        '6xl': '2.5rem',
      },
      boxShadow: {
        'custom-xs': '0 1px 1px rgba(0, 0, 0, 0.02)'
      }
    },
  },
  plugins: [],
}

