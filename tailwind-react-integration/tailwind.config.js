/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    extend: {},
  },
  variants: { 
    extend: {} 
  },
  plugins: [],
}



