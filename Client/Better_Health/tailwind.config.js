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
        LightBlue: '#068ea936'
      },
      boxShadow: {
        'custom-dark': '1px 1px 4px black',
      },
      borderRadius: {
        'BodyMass': '0px 0px 160px 0px',
        'Calories': '0px 0px 0px 110px'  // Adds a new custom radius value
      },
      height: {
        '85': '22rem', // Custom height value
        '100': '26rem'
      },
    },
  },
  plugins: [],
}
