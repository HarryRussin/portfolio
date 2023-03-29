import Link from 'next/link';
import React,{useState} from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

function HeaderCompoent() {
  const [openNav, setopenNav] = useState(false)
  return (
   
    <div className="z-50 relative">
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

      <header className={`sm:hidden px-2 overflow-hidden pt-1 w-full ${openNav?'h-full':'h-12'} transition-all fixed text-white bg-accent-4 top-0 flex flex-col items-center`}>
        <div className="flex justify-between pb-1 w-full items-center">
        <Link href='/'><p className="text-4xl font-times font-bold">HR</p></Link>

          <HiOutlineMenuAlt3 onClick={()=>setopenNav(!openNav)} className="w-10 h-10" />
        </div>
        <nav className="pt-32  text-2xl font-times">
          <ul className='flex flex-col space-y-8'>
          <li className=' flex'>○<Link href={'/'} ><p className='ml-2 link'>Home</p></Link></li>
          <li className='flex'>○<Link href={'/contact'} ><p className='ml-2 link'> Contact</p></Link></li>
          <li className='flex'>○<Link href={'/hire-me'} ><p className='ml-2 link'> Hire Me</p></Link></li>
          </ul>
        </nav>
      </header>
    </div>
    
    );
  }
  
  export default HeaderCompoent;