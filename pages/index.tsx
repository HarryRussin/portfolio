import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Portfolio_card from '../components/portfolio_card'
import Header from '../components/header'
import Footer from '../components/footer'

function index() {
  return (
    <div className=" min-h-screen min-w-screen relative overflow-hidden">
      <Header />
      {/* Hero section */}
      <section className="pt-48 px-52 font-times flex justify-between">
        <div className="">
          <h1 className="text-7xl font-bold mb-4 text-accent-1">
            Hi, I'm Harry
          </h1>
          <h2 className="text-7xl font-bold">
            Web Designer &<br />
            Developer
          </h2>
          <p className="pt-4 text-gray-700 font-prompt">
            Empowering small businesses with a digital presence
          </p>
          <button className="font-prompt text-sm pt-16 text-accent-1">
            <p className="">CONTACT ME --&gt; </p>
          </button>
        </div>

        <Image
          src={'/undraws/programmer_in_chair.svg'}
          width={400}
          height={400}
          alt="programmer in a chair"
        />
      </section>

      <div className="absolute w-[400vw] h-[400vh] -z-10 -rotate-[40deg] -right-[228.5vw] top-0 bg-grey-light"></div>

      {/* projects */}
      <section className="xl:px-32 2xl:px-52 lg:px-30 px-8 my-96 pt-32">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl font-bold font-times">Latest Projects</h2>
          <div className="flex items-center space-x-4">
            <p className="text-sm font-prompt font-bold">all projects</p>
            <div className="w-8 h-8 bg-bg-dark rounded-md"></div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center xl:space-x-8 xl:justify-between my-20">
          <Portfolio_card
            id={1}
            name="Contact25"
            link="https://contact25.com"
            img='/project_cover_imgs/contact25.png'
          />
          <div className="mt-20">
            <Portfolio_card
              id={2}
              name="Luna Bakehouse"
              link="https://lunabakes.vercel.app"
            />
          </div>
          <div className="mt-40">
            <Portfolio_card id={3} name="Blobparty" link="#" />
          </div>
        </div>
      </section>

      <section className="h-[30rem] py-64 bg-bg-dark z-2 flex relative justify-center items-center text-white">
        <h5 className="text-5xl font-times mb-32 text-center">Making Waves In Design</h5>
        <img
          width="full"
          height={'100px'}
          alt="waves"
          className="z-1 absolute bottom-0"
          src="/wave.svg"
          style={{}}
        />
      </section>

      {/* Services */}
      <section className="flex flex-col items-center lg:flex-row space-y-12 lg:space-y-0 justify-between lg:mx-24 py-48">
        <div className="text-center relative mt-12 mx-24">
          <h2 className="font-times font-bold text-7xl">My Services</h2>
          <p className="font-prompt text-2xl pt-2 pb-24 text-gray-700">
            I do all kinds of neat stuff
          </p>
          <Image
            alt="a man looking at a project/system overview breakdown"
            src={'/undraws/looking_at_stuff.svg'}
            width={500}
            height={700}
          />
        </div>

        <div className="flex h-fit md:mt-24 md:flex-row text-white flex-col space-y-8 md:space-y-0 md:space-x-8 box-border">
          <div className="flex flex-col space-y-8">
            <div className="w-[280px] h-[140px] p-4 bg-bg-dark rounded-xl flex flex-col justify-between">
              <h5 className="font-times text-2xl">SEO</h5>
              <p className="font-prompt text-sm text-gray-300">
                SEO is writing information for search engines. It is essential
                to get your site seen online.
              </p>
            </div>
            <div className="w-[280px] h-[220px] p-4 bg-bg-dark rounded-xl flex flex-col justify-between">
              <h5 className="font-times text-2xl">Web Development</h5>
              <p className="font-prompt text-sm text-gray-300">
              With 4 years of experience working on a vast array of projects, I’ll be sure to deliver on your needs 
              </p>
            </div>
            <div className="w-[280px] h-[200px] p-4 bg-gradient-to-t from-accent-3 to-accent-2 rounded-xl flex flex-col justify-between">
              <h5 className="font-times text-2xl">UI Design</h5>
              <p className="font-prompt text-sm text-gray-300">
              The design and feel of the website, with a focus on showing your personality and unique brand image
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-8 pt-0 sm:pt-12">
          <div className="w-[280px] h-[200px] p-4 bg-bg-dark md:bg-gradient-to-b from-accent-3 to-accent-2 rounded-xl flex flex-col justify-between">
            <h5 className="font-times text-2xl">UX Design</h5>
            <p className="font-prompt text-sm text-gray-300">
              A focus placed on the quality of the user experience and culturally relevant solutions
            </p>
          </div>
          <div className="w-[280px] h-[140px] p-4 bg-bg-dark rounded-xl flex flex-col justify-between">
            <h5 className="font-times text-2xl">Analytics</h5>
            <p className="font-prompt text-sm text-gray-300">
            Explore how many people are visit your site. How long do they stay? What do they do?
            </p>
          </div>
          <div className="w-[280px] h-[220px] p-4 md:from-bg-dark md:to-bg-dark bg-gradient-to-b from-accent-3 to-accent-2  rounded-xl flex flex-col justify-between">
            <h5 className="font-times text-2xl">Backend</h5>
            <p className="font-prompt text-sm text-gray-300">
            Fast and lightweight backends are my specialty. I’ll make certain your site won’t crash when you need it most
            </p>
          </div>
          </div>

        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default index
