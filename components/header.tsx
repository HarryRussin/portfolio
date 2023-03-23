import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

function HeaderComponent() {

  const [hasBgOnScroll, sethasBgOnScroll] = useState(false)
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
    <div className="z-50">
      <header ref={navRef} className={`tracking-[0.05rem] items-center flex-col justify-center fixed ${hasBgOnScroll?'bg-white':'bg-transparent'} transition-all top-0 w-full hidden sm:flex xl:text-lg font-medium text-gray-500 pt-6 px-14 font-prompt`}>
        <div className=" justify-between w-full items-center flex">
          <nav className="flex items-center space-x-8 justify-between">
            <Link href="/" replace className="  hover:text-black">
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
            <Link href={'/hire-me'}>
            <button className="bg-accent-1 hover:brightness-90 text-white rounded-md px-10 py-1">
              Hire Me
            </button>
            </Link>
          </div>
        </div>
        {hasBgOnScroll&&
        <hr className="border border-gray-600 mt-6 w-[95%]" />
}       
      </header>

      <header className=" sm:hidden px-2 fixed pt-1 w-full bg-white top-0 flex flex-col items-center">
        <div className="flex justify-between pb-1 w-full items-center">
          <p className="text-4xl font-times font-bold">HR</p>
          <HiOutlineMenuAlt3 className="w-10 h-10" />
        </div>
        <hr className="border border-gray-900 w-[95%]" />
      </header>
    </div>
  )
}

export default HeaderComponent
