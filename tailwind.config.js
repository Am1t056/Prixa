/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',  // Bootstrap small screen breakpoint
        'md': '768px',  // Bootstrap medium screen breakpoint
        'lg': '1024px',  // Bootstrap large screen breakpoint
        'xl': '1400px', // Bootstrap extra-large screen breakpoint
      },
    },
  
  },
  plugins: [],
}
