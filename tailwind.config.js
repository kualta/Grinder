/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Varela Round', 'sans-serif'],
      heading: ['Varela Round', 'sans-serif'],
      japanese: ['M PLUS Rounded 1c', 'sans-serif']
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
