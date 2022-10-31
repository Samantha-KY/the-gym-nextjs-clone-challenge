/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, jsx}", "./components/**/*.{js, jsx}"
  ],
  theme: {
    extend: {
      colors:{
        "near-sky-blue": "#0ea5e9"
      }
    },
  },
  plugins: [],
}
