import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

function HeaderComponent() {

  const [hasBgOnScroll, sethasBgOnScroll] = useState(false)
  const [openNav, setopenNav] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    window.onscroll = function () {
      appearOnScroll()
    }
  }, [])

  function appearOnScroll() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      sethasBgOnScroll(true)
    } else {
      sethasBgOnScroll(false)
    }
  }

  return (
    <div className="z-20">
      <header ref={navRef} className={`tracking-[0.05rem] items-center flex-col justify-center fixed ${hasBgOnScroll?'bg-white py-6 px-14':'bg-transparent pt-3 px-8'} transition-all top-0 w-full hidden sm:flex xl:text-lg font-medium text-gray-500  font-prompt`}>
        <div className=" justify-between w-full items-center flex">
          <nav className="flex items-center space-x-8 justify-between">
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
            <Link href={'/hire-me'}>
            <button className="bg-accent-1 relative shadow-xl group overflow-hidden rounded-md px-10 py-1">
              <p className='z-40 text-white'>Hire Me</p>
              <div className="group-hover:w-[150%] z-30 transition-all h-full duration-500 bg-gradient-to-l from-accent-2 to-accent-3 absolute top-0 w-0 -left-5"></div>
            </button>
            </Link>
          </div>
        </div>
      </header>

      <header className={`sm:hidden px-2 fixed pt-1 w-full transition-all overflow-hidden bg-white ${openNav?'h-full':'h-12'} duration-300 top-0 flex flex-col items-center`}>
        <div className="flex justify-between pb-1 w-full items-center">
          <Link href='/'><p className="text-4xl font-times font-bold">HR</p></Link>
          <HiOutlineMenuAlt3 onClick={()=>setopenNav(!openNav)} className="w-10 h-10" />
        </div>
        <hr className="border border-gray-900 w-[95%]" />
        <nav className="pt-32  text-2xl font-times">
          <ul className='flex flex-col space-y-8'>
          <li className=' flex'>○<Link href={'/'} ><p className='ml-2 link'>Home</p></Link></li>
          <li className='flex'>○<Link href={'/contact'} ><p className='ml-2 link'> Contact</p></Link></li>
          <li className='flex'>○<Link href={'/hire-me'} ><p className='ml-2 link'> Hire Me</p></Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
