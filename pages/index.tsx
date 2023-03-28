import React, { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion'
import Image from 'next/image'
import Portfolio_card from '../components/portfolio_card'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'

function index() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const year = new Date().getFullYear()

  useEffect(() => {
    console.log(scrollYProgress)
  }, [scrollYProgress])

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
  }

  const x = useParallax(scrollYProgress, 500)

  return (
    <>
      <Head>
        {/* <meta
          httpEquiv="refresh"
          content="5;url=https://portfolio-harryrussin.vercel.app"
        ></meta> */}
        <meta
          name="description"
          content="Hi, I'm Harry. I'm a web designer and developer who empowers small businesses with a digital presence. Learn how to create stunning websites with me."
        />
          <meta name="author" content="Harry Russin" />
        <title>Portfolio & Home Page - Harry Russin</title>
      </Head>

      <div className=" min-h-screen transition-all min-w-screen relative overflow-hidden">
        {/* Hero section */}
        <section className=" md:pt-56 pt-32 xlresponsive sm:px-52 px-12 font-times flex-col-reverse items-center lg:items-start gap-10 lg:gap-0 lg:flex-row flex justify-between">
          <div
            className="mb-8
        \"
          >
            <h1 className="md:text-7xl text-6xl font-bold text-accent-1">
              Hi, I'm Harry
              <br />
              <span className="md:text-7xl lg:mt-4 block text-6xl text-black font-bold">
                Web Designer &<br />
                Developer
              </span>
            </h1>

            <p className="pt-4 text-gray-700 font-prompt">
              Empowering small businesses with a digital presence
            </p>
            <Link href={'/contact'}>
              <button className="font-prompt group flex bg-accent-1 overflow-hidden relative items-center space-x-2 p-2 rounded-md text-sm mt-16 text-white">
                <div className="group-hover:w-[150%] transition-all h-full duration-500 bg-gradient-to-l from-accent-2 to-accent-3 absolute top-0 w-0 -left-5"></div>
                <p className=" h-5">CONTACT ME</p>
                <AiOutlineArrowRight className="h-5 w-8" />
              </button>
            </Link>
          </div>

          <Image
            src={'/undraws/programmer_in_chair.svg'}
            width={400}
            height={400}
            className="hidden md:block"
            alt="programmer in a chair"
          />
        </section>

        <div className="absolute w-[400vw] h-[400vh] -z-10 -rotate-[40deg] -right-[235vw] top-0 bg-grey-light"></div>

        {/* projects */}
        <section className="xl:px-32 2xl:px-52 xlresponsive lg:px-32 px-12 md:my-96 my-32 md:pt-32">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold font-times">Latest Projects</h2>
            <div className="flex items-center flex-col space-x-4">
              <p className="text-sm font-prompt font-bold">As of {year}</p>
              <hr className='border-black border-2 w-28'/>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-14 md:gap-0 items-center md:space-x-8 md:justify-between my-20">
            <Portfolio_card
              id={1}
              name="Contact25"
              link="https://contact25.com"
              img="/project_cover_imgs/contact25.png"
            />
            <div className="md:mt-20">
              <Portfolio_card
                id={2}
                name="Luna Bakehouse"
                link="https://lunabakes.vercel.app"
                img="/project_cover_imgs/luna_bakes.png"
              />
            </div>
            <div className="md:mt-40">
              <Portfolio_card
                id={3}
                name="Blobparty"
                link="https://blobparty.vercel.app"
                img="/project_cover_imgs/blobparty.png"
              />
            </div>
          </div>
        </section>

        <section className="h-[30rem] py-64 bg-bg-dark z-2 flex bg-fixed bg-cover relative justify-center items-center text-white">
          <h5
            className="text-5xl font-times pt-2 text-center "
          >
            Making Waves In Design
          </h5>
          <motion.img
            ref={ref}
            alt="waves"
            className="z-1 absolute left-0 pointer-events-none h-[300px] -bottom-4"
            src="/wave.png"
            style={{ translateX: x,scaleX: 5}}
          />
        </section>

        {/* Services */}
        <section className="flex flex-col xlresponsive items-center lg:flex-row space-y-12 lg:space-y-0 justify-evenly py-48">
          <div className="text-center relative mt-2 px-24">
            <h2 className="font-times font-bold text-7xl">My Services</h2>
            <p className="font-prompt text-2xl pt-2 pb-24 text-gray-700">
              I do all kinds of neat stuff
            </p>
            <Image
              alt="a man looking at a project/system overview breakdown"
              src={'/undraws/looking_at_stuff.svg'}
              className="hidden md:block"
              width={500}
              height={700}
            />
          </div>

          <div className="flex h-fit md:mt-24 px-24 md:flex-row text-white flex-col md:space-x-8 box-border">
            <div className="flex flex-col space-y-8">
              <div className="w-[280px] big-shadow h-[140px] p-4 bg-bg-dark rounded-xl flex flex-col justify-between">
                <h5 className="font-times text-2xl">SEO</h5>
                <p className="font-prompt text-sm text-gray-300">
                  SEO is writing information for search engines. It is essential
                  to get your site seen online.
                </p>
              </div>
              <div className="w-[280px] big-shadow h-[220px] p-4 bg-bg-dark rounded-xl flex flex-col justify-between">
                <h5 className="font-times text-2xl">Web Development</h5>
                <p className="font-prompt text-sm text-gray-300">
                  With 4 years of experience working on a vast array of
                  projects, I’ll be sure to deliver on your needs
                </p>
              </div>
              <div className="w-[280px] big-shadow h-[200px] p-4 bg-gradient-to-t from-accent-3 to-accent-2 rounded-xl flex flex-col justify-between">
                <h5 className="font-times text-2xl">UI Design</h5>
                <p className="font-prompt text-sm text-gray-300">
                  The design and feel of the website, with a focus on showing
                  your personality and unique brand image
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-8 md:pt-12 pt-8">
              <div className="w-[280px] big-shadow h-[200px] p-4 bg-bg-dark md:bg-gradient-to-b from-accent-3 to-accent-2 rounded-xl flex flex-col justify-between">
                <h5 className="font-times text-2xl">UX Design</h5>
                <p className="font-prompt text-sm text-gray-300">
                  A focus placed on the quality of the user experience and
                  culturally relevant solutions
                </p>
              </div>
              <div className="w-[280px] big-shadow h-[140px] p-4 bg-bg-dark rounded-xl flex flex-col justify-between">
                <h5 className="font-times text-2xl">Analytics</h5>
                <p className="font-prompt text-sm text-gray-300">
                  Explore how many people are visit your site. How long do they
                  stay? What do they do?
                </p>
              </div>
              <div className="w-[280px] big-shadow h-[220px] p-4 md:from-bg-dark md:to-bg-dark bg-gradient-to-b from-accent-3 to-accent-2  rounded-xl flex flex-col justify-between">
                <h5 className="font-times text-2xl">Backend</h5>
                <p className="font-prompt text-sm text-gray-300">
                  Fast and lightweight backends are my specialty. I’ll make
                  certain your site won’t crash when you need it most
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <Header />
      </div>
    </>
  )
}

export default index
