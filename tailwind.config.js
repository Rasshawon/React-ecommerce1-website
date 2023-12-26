/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      "Black":"#1E2832",
      "primaryBg":"#F5FAFA",
      "Blue":"#03244A",
      "Grey": "#404040"
    },
    fontFamily: {
      "primary":['Roboto', "sans-serif"],
    }
    },
  },
  plugins: [],
}

