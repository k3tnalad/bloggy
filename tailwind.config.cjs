/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,mjs,astro}"],
  theme: {
    extend: {
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'],
        'noto': ['Noto Sans Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
