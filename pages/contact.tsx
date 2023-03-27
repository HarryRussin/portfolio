import Image from 'next/image'
import React from 'react'
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

            <div className="flex justify-between items-center">
                <Image alt='mailbox image undraw' src={'/undraws/mail.svg'} width={'400'} height={'300'}/>
                <form className="flex flex-col space-y-3">
                    <input type="text" className='w-48 border'/>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Contact