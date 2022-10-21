/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto Condensed', 'sans-serif'],
    },
    container: {
      screens: {
        'lg': '1230px'
      },
    },
    extend: {
      colors: {
        'orange-1': 'rgba(232,130,21,0.7)',
        'orange-2': '#fa8c16',
        'orange-3': 'rgba(255,231,186,0.6)',
        'orange-4': '#ff792c',
        'orange-5': '#e57905'
      },
    },
  },
  plugins: [],
}
