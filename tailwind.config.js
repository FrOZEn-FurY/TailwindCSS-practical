/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
        "smm": "500px"
      },
      colors: {
        'tahiti': '#cffafe'
      }
    },
  },
  plugins: [],
}

