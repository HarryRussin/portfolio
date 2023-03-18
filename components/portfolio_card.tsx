import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Portfolio_card({
  id,
  name,
  link,
  img,
}: {
  id: number
  name: string
  link: string
  img: string
}) {
  return (
    <figure className=''>
      <Link href={link} replace>
        <div className="lg:h-[250px] h-[200px] relative w-[250px] lg:w-[300px] rounded-3xl bg-gray-700">
          <div className="w-full h-full overflow-hidden">
            <Image alt={`${name} `} className='rounded-3xl object-cover hover:opacity-70 transition-all scale-[100.5%]' src={img} fill />
          </div>
          <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-xl bg-bg-dark flex justify-center items-center">
            <p className="text-5xl text-white font-prompt">0{id}</p>
          </div>
        </div>
      <figcaption className="text-3xl link mt-2 font-prompt">
        <h4>{name}</h4>
      </figcaption>
      </Link>

    </figure>
  )
}

export default Portfolio_card
