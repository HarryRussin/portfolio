/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        times:["Times New Roman","Serif"],
        prompt:["Prompt","Sans-Serif"]
      }
      ,colors:{
        accent:{
          1:'#2596BE',
          2:'#8B2BEB',
          3:'#CE4FFB'
        },
        bg:{
          light:'#3F3D56',
          dark:'#2F2E41'
        }
        ,
        grey:{
          light:'#F1F1F1',
          dark:'#D9D9D9'
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}