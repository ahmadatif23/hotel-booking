/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
  
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1100px',
          '2xl': '1100px',
        },
      },
    },
  },
  plugins: [],
}