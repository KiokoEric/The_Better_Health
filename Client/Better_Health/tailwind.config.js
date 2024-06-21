/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: '#068ea9',
      },
      boxShadow: {
        'custom-dark': '1px 1px 4px black',
      },
    },
  },
  plugins: [],
}
