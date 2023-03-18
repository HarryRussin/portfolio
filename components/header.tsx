import Link from 'next/link';
import React from 'react';

function HeaderCompoent() {
  return (
   
    <header className="tracking-[0.05rem] font-medium text-gray-500 flex justify-between items-center py-10 px-14 font-prompt">
        <nav className='flex items-center space-x-8 justify-between'>
          <Link href="#" className="  hover:text-black">
          Projects
          </Link>
          
          <Link href="/about" className=" hover:text-black">
              About
          </Link>
          
          <Link href="#" className=" hover:text-black">
              Contact Me
          </Link>
      </nav>
        <div>
            <button className="bg-accent-1 hover:brightness-90 text-white rounded-md px-10 py-1">
            Hire Me
            </button>
        </div>
      </header>
    
    );
  }
  
  export default HeaderCompoent;