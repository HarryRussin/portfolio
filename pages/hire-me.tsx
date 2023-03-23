import Image from 'next/image'
import React from 'react'
import HeaderCompoent from '../components/priceHeader'

class about extends React.Component {
  render() {
    return (
      <main>
        <HeaderCompoent />
        <div className="md:h-[50vh] h-[70vh] bg-gradient-to-b from-accent-4 to-white"></div>
        <div className="flex justify-center xlresponsive">
          <div className="text-center absolute top-28 sm:top-32  text-white font-prompt tracking-[0.1rem] font-bold">
            <h1 className=" text-6xl lg:text-5x1  ">CHOOSE A PLAN</h1>
            <h2>that works for you.</h2>
          </div>
        </div>

        <section className="flex justify-center xlresponsive pb-20 gap-12 items-center flex-wrap lg:flex-nowrap absolute w-full left-1/2 top-80 -translate-x-1/2 ">
          {/* BASIC */}
          <div className=" flex flex-col shadow-2xl text-center justify-between space-y-2 w-64 px-8 py-5 items-center bg-gradient-to-b from-purple2 to-purple3 rounded-xl ">
            <div className="w-32 h-32 relative">
              <Image
                src={'/svgs/basicLogo.svg'}
                fill
                alt="basic webdev plan logo image"
              />
            </div>
            <h5 className=" text-3xl text-white">Basic</h5>
            <p className="text-grey-dark">
              1-3 Pages • Template Design • SSL Certificate • 1 Year Hosting
            </p>
            <div className="relative">
            <p className="text-5xl tracking-[0.1rem] font-bold pb-3 text-white">
              200
            </p>  
            <p className='absolute -left-3 top-0 text-white font-bold font-prompt text-lg'>$</p>
            </div>
            <button className="bg-white hover:brightness-90  text-purple3 font-bold px-6 rounded-lg py-2">
              Select
            </button>
          </div>

          {/* STANDARD */}
          <div className=" flex flex-col shadow-2xl text-center justify-between space-y-2 py-5 lg:space-y-4 w-64 px-8 lg:py-8 items-center bg-gradient-to-b from-blue1  to-blue2  rounded-xl ">
            <div className="w-32 h-32 relative">
              <Image
                src={'/svgs/standard_Logo.svg'}
                fill
                alt="basic webdev plan logo image"
              />
            </div>
            <h5 className=" text-3xl text-white">Standard</h5>
            <p className="text-grey-dark">
              1-8 Pages • Custom Design • Basic SEO • Social Media Integration
            </p>
            <div className="relative">
            <p className="text-5xl tracking-[0.1rem] font-bold pb-3 text-white">
              800
            </p>  
            <p className='absolute -left-3 top-0 text-white font-bold font-prompt text-lg'>$</p>
            </div>
            <button className="bg-white hover:brightness-90  text-blue1 font-bold px-6 rounded-lg py-2">
              Select
            </button>
          </div>

          {/* CREATOR */}
          <div className=" flex flex-col shadow-2xl text-center justify-between space-y-2 w-64 px-8 py-5 items-center bg-gradient-to-b from-blue3 to-blue4 rounded-xl ">
            <div className="w-32 h-32 relative">
              <Image
                src={'/svgs/creatorLogo.svg'}
                fill
                alt="basic webdev plan logo image"
              />
            </div>
            <h5 className=" text-3xl text-white">Creator</h5>
            <p className="text-grey-dark">
              8+ Pages • Custom Content • Logins & Accounts • Advanced SEO
            </p>
            <div className="relative">
            <p className="text-5xl tracking-[0.1rem] font-bold pb-3 text-white">
              1100
            </p>  
            <p className='absolute -left-3 top-0 text-white font-bold font-prompt text-lg'>$</p>
            </div>
            <button className="bg-white hover:brightness-90  text-blue4 font-bold px-6 rounded-lg py-2">
              Select
            </button>
          </div>
        </section>

        <section className='flex flex-col justify-center bg-red-500 items-center mt-96 py-16'>
            <h2>Let&apos;s Work Together</h2>
            <p>I&apos;ll Get Back To You Shortly</p>

            <div className="flex justify-center items-center">

              {/* FORM name and email */}
              <form className="flex flex-col space-y-4">
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>

                {/* DROP DOWN */}
                <div className="">
                <input type="date" placeholder='Expected Deadline' defaultValue={'None'}/>
                </div>

                <div className="flex justify-between">
                  <div className="w-1/4 bg-blue-500 h-10 rounded-md"></div>
                  <div className="w-1/4 h-10 bg-blue-500 rounded-md"></div>
                  <div className="w-1/4 h-10 bg-blue-500 rounded-md"></div>
                </div>
              </form>
            </div>
        </section>
      </main>
    )
  }
}

export default about
