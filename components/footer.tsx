import Image from 'next/image'
import React from 'react'
import {BsInstagram,BsLinkedin,BsFacebook} from 'react-icons/bs'
import {SlSocialSpotify} from 'react-icons/sl'
import {AiOutlinePhone} from 'react-icons/ai'
import {GoMail} from 'react-icons/go'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-bg-light text-gray-300 font-prompt relative w-full p-16'>
        <div className="flex md:w-[70%] max-w-[1400px] justify-between w-full lg:flex-row space-y-8 lg:space-y-0 flex-col items-center">
            <div className=" w-full">
                <h3 className='text-white text-4xl font-semibold font-times'>Harry Russin</h3>
                <p>website design & development</p>
            </div>

            <div className="flex justify-between items-center w-full">
                <Link replace href={'https://www.instagram.com/harry_a_russin'}>
            <BsInstagram className='w-10 h-10'/>
            </Link>
            <Link replace href={'https://www.linkedin.com/in/harry-russin-8662b9267/'}>

            <BsLinkedin className='w-10 h-10'/>
            </Link>
            <Link replace href={'https://open.spotify.com/user/0soszp65ps6ucp1tv9rubonhv'}>
            
            <SlSocialSpotify className='w-10 h-10'/>
            </Link>
            <Link replace href={'https://www.facebook.com/profile.php?id=100068125926728'}>
            <BsFacebook className='w-10 h-10'/>
            </Link>
            </div>
        </div>

        <div className="flex lg:w-[60%] flex-col space-y-8 md:space-y-0 md:flex-row w-full mt-8 justify-between items-start md:items-center">
            <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-2">
                    <AiOutlinePhone className='h-6 w-6'/>
                    <p>+44 79-476-88762</p>
                </div>
                <div className="flex items-center space-x-2">
                    <GoMail className='w-6 h-6'/>
                    <p>harryrussindev@gmail.com</p>
                </div>
            </div>

            <div className="flex md:flex-col space-x-8 space-y-0 md:space-x-0 md:space-y-6">
                <p>about</p>
                <p>contact</p>
                <p>hire me</p>
            </div>

            <div className="flex md:flex-col space-x-8 md:space-x-0 md:space-y-6">
                <p>cookie policy</p>
                <p>privacy policy</p>
            </div>
        </div>
        <Image width={300} height={200} alt='aircraft svg' src={'/undraws/plane.svg'} className='absolute -top-20 right-8'/>
    </footer>
  )
}

export default Footer