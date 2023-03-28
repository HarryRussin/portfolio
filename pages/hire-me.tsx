import { Html } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Footer from '../components/footer'
import HeaderCompoent from '../components/priceHeader'

function HireMe() {
  const [plan, setplan] = useState('basic')
  const router = useRouter()
  {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="UTF-8"></meta>
          <meta
            name="description"
            content="Choose the web development plan that works for you. We offer Basic, Standard, and Premium plans to fit your needs."
          />
          <meta
            name="keywords"
            content="web development, webdev plan, basic plan, standard plan, premium plan"
          />
          <meta name="author" content="Harry Russin" />
          <title>Web Development Plans - Harry Russin</title>
        </Head>
        
        <main className="relative">
          <HeaderCompoent />
          <div className="md:h-[50vh] -z-10 w-full h-[70vh] bg-gradient-to-b absolute top-12 sm:top-20 from-accent-4 to-white"></div>
          <div className="flex justify-center my-16 xlresponsive">
            <div className="text-center  text-white font-prompt tracking-[0.1rem] font-bold">
              <h1 className=" text-6xl lg:text-5x1  flex flex-col">
                CHOOSE THE WEBDEV PLAN
                <span className="text-lg">that works for you.</span>
              </h1>
            </div>
          </div>

          <section className="flex justify-center xlresponsive pb-20 gap-12 items-center flex-wrap lg:flex-nowrap w-full ">
            {/* BASIC */}
            <div className=" flex big-shadow flex-col  text-center justify-between space-y-2 w-64 px-8 py-5 items-center bg-gradient-to-b from-purple2 to-purple3 rounded-xl ">
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
                <p className="absolute -left-3 top-0 text-white font-bold font-prompt text-lg">
                  £
                </p>
              </div>
              <button onClick={() => {
                  setplan('basic')
                  router.push('#contactForm')
                }} className="bg-white hover:brightness-90  text-purple3 font-bold px-6 rounded-lg py-2">
                Select
              </button>
            </div>

            {/* STANDARD */}
            <div className=" flex big-shadow flex-col text-center justify-between space-y-2 py-5 lg:space-y-4 w-64 px-8 lg:py-8 items-center bg-gradient-to-b from-blue1  to-blue2  rounded-xl ">
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
                <p className="absolute -left-3 top-0 text-white font-bold font-prompt text-lg">
                  £
                </p>
              </div>
              <button onClick={() => {
                  setplan('standard')
                  router.push('#contactForm')
                }} className="bg-white hover:brightness-90  text-blue1 font-bold px-6 rounded-lg py-2">
                Select
              </button>
            </div>

            {/* CREATOR */}
            <div className=" flex big-shadow flex-col text-center justify-between space-y-2 w-64 px-8 py-5 items-center bg-gradient-to-b from-blue3 to-blue4 rounded-xl ">
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
                <p className="text-5xl -tracking-[0.1rem] font-bold pb-3 text-white">
                  1100
                </p>
                <p className="absolute -left-3 top-0 text-white font-bold font-prompt text-lg">
                  £
                </p>
              </div>
              <button
                onClick={() => {
                  setplan('creator')
                  router.push('#contactForm')
                }}
                className="bg-white hover:brightness-90  text-blue4 font-bold px-6 rounded-lg py-2"
              >
                Select
              </button>
            </div>
          </section>

          <section className="flex flex-col font-prompt justify-center items-stretch px-32 mt-32 mb-48 py-16">
            <div className="text-center mb-12">
              <h2 className="text-5xl tracking-widest">
                Let&apos;s Work Together
              </h2>
              <p>I&apos;ll Get Back To You Shortly</p>
            </div>

            {/* FORM name and email */}
            <form
              id="contactForm"
              className="flex justify-between h-full space-x-20 mt-8"
            >
              <div className="flex flex-col justify-between w-1/2">
                <input
                  required
                  type="text"
                  placeholder="Name"
                  className="border-b-2 shadow-xl border-black bg-transparent px-1.5"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="border-b-2 shadow-sm border-black bg-transparent px-1.5"
                />

                {/* DROP DOWN */}
                <div>
                  <p className="text-gray-400 pl-1.5">
                    Expected Deadline - leave blank if none*
                  </p>

                  <div className="border-2 shadow-xl relative border-black bg-transparent px-1.5">
                    <input
                      type="date"
                      className="w-full focus:outline-none"
                      placeholder="Expected Deadline"
                      defaultValue={'None'}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div onClick={()=>setplan('basic')} className={`${plan === 'basic'?'w-1/4 bg-accent-2':'bg-bg-dark w-1/3'}   h-24 rounded-md transition-all  text-lg text-white font-bold flex justify-center hover:bg-bg-light items-center`}><p>BASIC</p></div>
                  <div onClick={()=>setplan('standard')} className={`${plan === 'standard'?'w-1/4 bg-accent-2':'bg-bg-dark w-1/3'}   h-24 rounded-md text-lg text-white font-bold transition-all flex justify-center hover:bg-bg-light items-center`}><p>STANDARD</p></div>
                  <div onClick={()=>setplan('creator')} className={`${plan === 'creator'?'w-1/4 bg-accent-2':'bg-bg-dark w-1/3'}   h-24 rounded-md text-lg text-white font-bold  transition-all flex justify-center hover:bg-bg-light items-center`}><p>CREATOR</p></div>
                </div>
              </div>
              <div className="flex flex-col space-y-6 w-1/2">
                <textarea name="" id="" placeholder='A brief description of your project' className='border-2 border-black rounded p-2 box-content' cols={22} rows={9}></textarea>
                <button className='bg-accent-1 py-4 rounded text-lg font-bold text-white tracking-wider '>Deliver The Mail</button>
              </div>
            </form>
          </section>
          <Footer/>
        </main>
      </>
    )
  }
}

export default HireMe
