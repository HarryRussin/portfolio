import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-bg-light text-gray-300 font-prompt relative w-full p-16'>
        <div className="flex w-[70%] justify-between items-center">
            <div className="">
                <h3 className='text-white text-4xl font-semibold font-times'>Harry Russin</h3>
                <p>website design & development</p>
            </div>

            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
        </div>

        <div className="flex w-[60%] mt-8 justify-between items-center">
            <div className="flex flex-col space-y-6">
                <div className="flex space-x-2">
                    <p>icon</p>
                    <p>+44 79-476-88762</p>
                </div>
                <div className="flex space-x-2">
                    <p>icon</p>
                    <p>harryrussindev@gmail.com</p>
                </div>
            </div>

            <div className="flex flex-col space-y-6">
                <p>about</p>
                <p>contact</p>
                <p>hire me</p>
            </div>

            <div className="flex flex-col space-y-6">
                <p>cookie policy</p>
                <p>privacy policy</p>
            </div>
        </div>
        <Image width={300} height={200} alt='aircraft svg' src={'/undraws/plane.svg'} className='absolute -top-20 right-8'/>
    </footer>
  )
}

export default Footer