import Link from 'next/link';
import React from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

function HeaderCompoent() {
  return (
   
    <div className="z-50">
      <header className="tracking-[0.05rem] items-center flex-col justify-center bg-accent-4 w-full hidden sm:flex xl:text-lg font-medium text-gray-500 py-6 px-14 font-prompt">
        <div className=" justify-between w-full items-center flex">
          <nav className="flex items-center text-white space-x-8 justify-between">
            <Link href="/" replace className="  hover:text-black">
              Projects
            </Link>

            {/* <Link href="/about" className=" hover:text-black">
              About
            </Link> */}

            <Link href="/contact" className=" hover:text-black">
              Contact Me
            </Link>
          </nav>
          <div>
            <button className="bg-black hover:brightness-90 text-white relative overflow-hidden group rounded-md px-10 py-1">
              Hire Me
              <div className="group-hover:w-[150%] z-30 transition-all h-[110%] duration-500 bg-gradient-to-r from-accent-1 to-blue-400 absolute top-0 w-0 -left-5"></div>

            </button>
          </div>
        </div>
      </header>

      <header className=" sm:hidden px-2 pt-1 w-full text-white bg-accent-4 top-0 flex flex-col items-center">
        <div className="flex justify-between pb-1 w-full items-center">
          <p className="text-4xl font-times font-bold">HR</p>
          <HiOutlineMenuAlt3 className="w-10 h-10" />
        </div>
      </header>
    </div>
    
    );
  }
  
  export default HeaderCompoent;