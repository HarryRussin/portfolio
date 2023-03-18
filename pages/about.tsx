import React from 'react';
import  HeaderCompoent from "../components/header";

class about extends React.Component {
  render() {
    return (
      
      <div className="text-center tracking-[0.2rem] ">
        <HeaderCompoent />
        <h1 className="text-9xl font-bold font-times text-center mt-40 mb-20"><span className="text-accent-1">Where</span> Am I?</h1>
      <div className="flex flex-row space-x-4" >
        <div className="w-1/3 mb-8 mt-10 p-4">
          <h2 className="font-bold font-times text-5xl">On a friday night</h2>
          <p className="font-prompt text-2xl w-9/12 tracking-[0.1rem] mx-auto text-gray-500 p-4">You'll find me at a bonfire with my friends. Or maybe by the nearby river in a swim suit if it's warmer.</p>
          
        </div>
        <div className="w-1/3 mb-8 mt-10  p-4">
          <h2 className="font-bold font-times  text-5xl">During the weekends</h2>
          <p  className="font-prompt text-2xl tracking-[0.1rem] w-10/12 mx-auto text-gray-500 p-4">I go to a sixth form college in Yorkshire where I study maths, Further maths, Physics and Chemistry.</p>
        </div>
        <div className="w-1/3 mb-8 mt-10  p-4">
          <h2 className="font-bold font-times  text-5xl">In my free time</h2>
          <p className="font-prompt text-2xl tracking-[0.1rem] w-9/12 mx-auto text-gray-500 p-4">I might be skateboarding at the park, with my girlfriend, or even working on projects such as this.</p>
        </div>
      </div>
      <footer style={{ backgroundColor: "#3F3D56" }} className="py-4 flex flex-col min-h-screen">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-sm">
            &copy; 2023 My Website. All rights reserved.
          </p>
        </div>
    </footer>

      


        
      </div>

    

    );
  }
}

export default about;
