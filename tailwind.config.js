/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "primary": "#0C7DF8",
        "secondary": "#00193C",
        "tartiary": "#707070",
        "pink": "#EE9AE5"

      },
      boxShadow: {
        '3xl': '0px 10px 50px rgba(0, 0, 0, 0.15)',
      }


    },
  },

  plugins: [require("daisyui")],
}

