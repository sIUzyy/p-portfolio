/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Bebas Neue', 'sans-serif'],
        'p': ['Jost', 'sans-serif'],
        'title': ['Josefin Sans', 'sans-serif'],
        'h1': ['Josefin Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}