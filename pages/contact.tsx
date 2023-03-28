import Image from 'next/image'
import React from 'react'
import Footer from '../components/footer'
import HeaderComponent from '../components/header'

function Contact() {
    const date = new Date()
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.getMonth()

  return (
    <main>
        <HeaderComponent/>

        <div className="pt-44 flex flex-col items-center">
            <h1 className='font-times text-6xl font-bold'>Let&apos;s get in touch</h1>
            <div className="flex space-x-12 mt-1 text-gray-600 font-prompt">
            <p>United Kingdom | Yorkshire</p>
            <p>{day}/{month}/{year}</p>
            </div>

            <div className="flex justify-between mb-36 space-x-32 mt-16 items-center">
                <Image alt='mailbox image undraw' src={'/undraws/mail.svg'} width={'400'} height={'300'}/>
                <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col w-80 h-full space-y-3 text-white">
                    <input type="text" placeholder='Name' className='w-full border px-4 py-2 rounded-2xl bg-bg-light placeholder:text-gray-100'/>
                    <input type="email" placeholder='Email' className='w-full border px-4 py-2 rounded-2xl bg-bg-light placeholder:text-gray-100'/>
                    <textarea name="query" id="" placeholder='Your Query...' cols={30} rows={5} className='w-full border px-4 py-2 rounded-2xl bg-bg-light placeholder:text-gray-100'></textarea>
                    <button type='submit' className='w-full py-2 rounded-2xl bg-gradient-to-b from-blue1 to-blue3'>Send Message</button>
                </form>
            </div>
        </div>
        <Footer/>
    </main>
  )
}

export default Contact