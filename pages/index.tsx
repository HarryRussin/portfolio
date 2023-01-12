import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AnimateSharedLayout, motion } from 'framer-motion'
import AboutPage from '../components/about'

const pages = 4

const spring = {
  type: 'spring',
  stiffness: 500,
  damping:25,
}

const Pagination = ({
  i,
  page,
  onClick,
}: {
  i: number
  page: number
  onClick: () => void
}) => (
  <li className="relative w-5 h-5" onClick={onClick}>
    <div className={`dot ${i === page && 'selectedPage'}`}></div>

    {i === page && (
      <motion.div
        layoutId="outline"
        initial={false}
        transition={spring}
        className="h-6 w-6 border-[3px] border-black rounded-full absolute bg-transparent"
      />
    )}
  </li>
)

const Home: NextPage = () => {
  const [page, setpage] = useState(0)

  function changePage(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowLeft':
        setpage(page <= 0 ? pages - 1 : page - 1)
        break
      case 'ArrowRight':
        setpage(page >= pages - 1 ? 0 : page + 1)
        break
      case 'KeyA':
        setpage(page <= 0 ? pages - 1 : page - 1)
        break
      case 'KeyD':
        setpage(page >= pages - 1 ? 0 : page + 1)
        break
      default:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', changePage)

    return () => {
      window.removeEventListener('keydown', changePage)
    }
  }, [page])

  return (
    <div className="flex h-screen border-l-[32px] border-t-[32px] border-black box-border">
      <Head>
        <title>Harry Russin - A Digital Creator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* LEFT */}
      <div className="w-1/2 bg-[#EBE4D8] relative"></div>

      {/* RIGHT */}
      <div className="w-1/2 bg-[#ECDFC7]"></div>

      {/* MAIN CONTENT */}
      <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {page === 0 ? (
          <div className=" text-center ">
            <h1 className="font-major text-8xl mb-3 w-max">HARRY RUSSIN</h1>
            <h3 className="font-major text-2xl">digital creator</h3>
          </div>
        ) : page === 1 ? (
          <AboutPage />
        ) : page === 2 ? (
          <></>
        ) : (
          page === 3 && <></>
        )}
      </div>

      <div className="group absolute">
        <div className="bg-black w-[8vw] group-hover:w-[6.5vw] group-hover:h-[6.5vw] transition-all h-[8vw] rounded-br-full absolute"></div>
        <div className="bg-black w-[7.5vw] h-[7.5vw] group-hover:w-[6.95vw] group-hover:h-[6.95vw] transition-all rounded-br-full border-[#EBE4D8] absolute border-r-[0.5vw] border-b-[0.5vw]"></div>
      </div>

      <AnimateSharedLayout>
        <ul className="absolute left-1/2 -translate-x-1/2 bottom-8 flex space-x-3">
          {[...new Array(pages)].map((q, i) => (
            <Pagination key={i} i={i} page={page} onClick={() => setpage(i)} />
          ))}
        </ul>
      </AnimateSharedLayout>

      <div className="bg-black w-[44px] h-screen absolute top-0 right-[3vw] flex flex-col items-center justify-end">
        <div className="flex flex-col space-y-4 mb-12">
          <BsInstagram className="text-gray-500 w-6 h-6" />
          <AiOutlineLinkedin className="text-gray-500 w-6 h-6" />

          <BsTwitter className="text-gray-500 w-6 h-6" />
        </div>
      </div>
    </div>
  )
}

export default Home
