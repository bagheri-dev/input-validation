/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor : {
        "color-primery" : "#969696"
      },
      fontFamily : {
        "IRANYekan" : "IRANYekanWebReqular"
      }
    },
  },
  plugins: [],
}