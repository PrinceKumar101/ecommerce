/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        primary_color:{
          dark_background:{
            DEFAULT:"#000000",
            rgb:"0, 0, 0",
            hsl:"11, 100%, 0%"
          },
          light_background:"white",
          button_default:"#DB4444",
          button_light:"#3FB7EF",
          
        }
      }
    },
  },
  plugins: [],

}

