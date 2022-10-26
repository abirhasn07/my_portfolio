/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ECDDD0",
        "secondary": "#968C71"
        ,
        "accent": "#22272E"

      },
      fontFamily: {
        'poppins': `'Poppins', sans-serif;`
      },
      container: {
        center: true
      },
      fontSize: {
        "base": "26px"
      }
    },
  },
  plugins: [],
}