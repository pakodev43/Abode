import React from 'react'

import heroImage from '../assets/hero-desktop-xl.jpg'

const Hero = () => {
  return (
    <div className='relative'>
      <img src={heroImage} alt="Image of houses" className='absolute top-0 left-0 w-full h-full object-cover -z-10' />

      <div className='px-5 md:px-0 md:ps-52 pt-17 pb-20'>
        <p className="text-4xl md:text-6xl md:leading-19 font-black text-white text-center md:text-left">Agents. Tours.<br />Loans. Homes.</p>
        <form className='mt-5 md:mt-9 md:w-fit flex bg-white text-black md:text-lg rounded-xl focus-within:outline-2 hover:outline-2 outline-primary'>
          <input type="text" name="search" id="search" className='py-3.5 md:py-5 px-5 w-full md:min-w-100 focus-within:outline-0 font-medium' placeholder='Enter an address, neighbouhood, or city' />
          <button type="submit" className='py-3.5 md:py-6.5 px-7 hover:bg-primary-300 rounded-r-2xl cursor-pointer'>
            <svg className='w-5' viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="img"><path stroke="none" d="M29.41,26.59,23.77,21A12,12,0,0,0,14,2c-.17,0-.33,0-.5,0s-.33,0-.5,0A11,11,0,0,0,2,13c0,.17,0,.33,0,.5s0,.33,0,.5a12,12,0,0,0,19,9.77l5.64,5.64a2,2,0,0,0,2.82-2.82ZM14,22a8,8,0,1,1,8-8A8,8,0,0,1,14,22Z"></path></svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero