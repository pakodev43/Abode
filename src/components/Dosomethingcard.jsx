import React from 'react'
import { Link } from 'react-router-dom'

function Dosomethingcard({ Heading, dosomethingImage }) {
  return (
    <div className="mb-5 md:mb-0 p-10 pt-0 pb-15 md:pb-20 text-center bg-white rounded-2xl shadow-[0_0_10px_rgb(0,0,0,0.2)]">
        <img src={ dosomethingImage } alt="Image of buing a home" className='mb-1 md:mb-3 max-w-30 md:max-w-40 mx-auto' />
        <p className="text-2xl mb-3 font-bold">{ Heading }</p>
        <p className="mb-8 md:text-lg text-accent-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, corporis.</p>
        <Link className='py-3 md:py-4 px-7 rounded-xl bg-primary-200 text-primary font-bold hover:bg-primary hover:text-white'>Find a local agent</Link>
      </div>
  )
}

export default Dosomethingcard