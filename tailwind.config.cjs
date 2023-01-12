/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'grean-whatsapp':'#00A884',
        'black-whatsapp':'#111B21',
        'white-whatsapp':'#E5E3DF',
        'placeholder-whatsapp':'#54656F',
      }
    },
    
  },
  plugins: [],
}