/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      marker: ["Permanent Marker", "cursive"],
      coda: ['Coda', "cursive"]
    },
    extend: {},
  },
  plugins: [],
}
