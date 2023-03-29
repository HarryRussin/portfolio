import Image from 'next/image'
import React, { useState } from 'react'
import Footer from '../components/footer'
import HeaderComponent from '../components/header'

function Contact() {
  const date = new Date()
  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.getMonth()

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  const [submitted, setsubmitted] = useState(true)

  function handleSubmit(e: FormDataEvent) {
    setsubmitted(false)
    e.preventDefault()

    let data = {
      name,
      email,
      message,
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setsubmitted(true)
        setname('')
        setemail('')
        setmessage('')
      }
      else{console.log('Response failed')}
    })
  }

  return (
    <main>
      <HeaderComponent />

      <div className="pt-44 flex flex-col text-center items-center">
        <h1 className="font-times text-6xl font-bold">
          Let&apos;s get in touch
        </h1>
        <div className="flex space-x-12 mt-1 text-gray-600 font-prompt">
          <p>United Kingdom | Yorkshire</p>
          <p>
            {day}/{month}/{year}
          </p>
        </div>

        <div className="flex-col flex md:flex-row justify-between lg:px-10 space-y-8 md:space-y-0 mb-36 md:space-x-32 mt-16 items-center">
          <Image
            alt="mailbox image undraw"
            src={'/undraws/mail.svg'}
            width={'400'}
            className='hidden md:block'
            height={'300'}
          />
          <form
            // @ts-ignore
            onSubmit={handleSubmit}
            className="flex flex-col w-80 h-full space-y-3 text-white"
          >
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              className="w-full border px-4 py-2 rounded-2xl bg-bg-light placeholder:text-gray-100"
            />
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="message"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded-2xl bg-bg-light placeholder:text-gray-100"
            />
            <textarea
              onChange={(e) => setmessage(e.target.value)}
              value={message}
              name="query"
              id=""
              placeholder="Your Query..."
              cols={30}
              rows={5}
              className="w-full border px-4 py-2 rounded-2xl bg-bg-light placeholder:text-gray-100"
            ></textarea>
            <button
              type="submit"
              className={`w-full py-2 ${
                !submitted
                  ? 'bg-accent-4'
                  : 'bg-gradient-to-b transition-all from-blue1 to-blue3'
              } rounded-2xl hover:from-blue2 hover:to-blue1 font-bold`}
            >
              {submitted ? (
                <p>Send Message</p>
              ) : (
                <p className="animate-pulse">Sending...</p>
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Contact
