/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff385c',
        darkBg: '#0d1321',
        "divBg": '#4d5052',
        darkText: '#fceff9',
        darkBtnBg: '#73628a',
        darkPage: "#313d5a",
        darkBtnBg: "#2952a2",
        darkBtnHoverShadow: "#41ead4"
      }
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024 px'
    }
  },
  plugins: [],
}
