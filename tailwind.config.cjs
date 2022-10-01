/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,mjs,astro}"],
  theme: {
    colors: {
      'light-100': '#F2EFE9',
      'dark-100': '#252627',
      'accent': '#FA9500',
      'font-light': '#1E1F20',
      'font-dark': '#fff',
    },
    extend: {
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'],
        'noto': ['Noto Sans Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
