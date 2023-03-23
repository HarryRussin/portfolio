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
          3:'#CE4FFB',
          4:'#8882CF'
        },
        bg:{
          light:'#3F3D56',
          dark:'#2F2E41'
        }
        ,
        grey:{
          light:'#F1F1F1',
          dark:'#D9D9D9'
        },
        blues:"#2596BE",
        purple1:"#8882CF",
        purple2:"#CE4FFB",
        purple3:"#8B2BEB",
        blue1: "#2596BE",
        blue2: "#007BCE",
        blue3: "#00F3F3",
        blue4: "#259BF0",
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}