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
        'Header': '0px 0px 0px 5px',
        'BodyMass': '0px 0px 160px 0px',
        'Calories': '0px 0px 0px 110px'
      },
      height: {
        '85': '22rem', 
        '100': '26rem',
        '120': '32rem',
        '150': '35rem',
        '155': '37rem',
        '160': '40rem'
      },
      width: {
        'custom': '85vw',
      },
    },
  },
  plugins: [],
}
