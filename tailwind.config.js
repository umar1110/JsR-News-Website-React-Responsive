/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '600px', 
        'sml':'720px',
        'md': '885px', 
        'lg': '1024px', 
        'xl': '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}