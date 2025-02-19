import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-desktop-xl.jpg'

const Hero = () => {
  return (
    <div className='relative'>
      <img src={heroImage} alt="Image of houses" className='absolute top-0 left-0 w-full h-full object-cover -z-10' />

      <div className='px-5 md:px-0 md:ps-55 py-20'>
        <p className="text-4xl md:text-6xl md:leading-19 font-black text-white">Agents. Tours.<br />Loans. Homes.</p>
        <form className='mt-5 md:mt-10 w-fit flex bg-white text-black md:text-lg rounded-xl focus-within:outline-2 hover:outline-2 outline-primary'>
          <input type="text" name="search" id="search" className='py-3.5 md:py-6.5 px-7 w-full md:min-w-125 focus-within:outline-0' placeholder='Enter an address, neighbouhood, or city' />
          <button type="submit" className='py-3.5 md:py-6.5 px-7 hover:bg-primary-300 rounded-r-2xl cursor-pointer'>
            <svg className='w-5' viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="img"><path stroke="none" d="M29.41,26.59,23.77,21A12,12,0,0,0,14,2c-.17,0-.33,0-.5,0s-.33,0-.5,0A11,11,0,0,0,2,13c0,.17,0,.33,0,.5s0,.33,0,.5a12,12,0,0,0,19,9.77l5.64,5.64a2,2,0,0,0,2.82-2.82ZM14,22a8,8,0,1,1,8-8A8,8,0,0,1,14,22Z"></path></svg>
          </button>
        </form>
      </div>
    </div>
    // <div className='md:mb-8 py-15 md:py-30 px-2.5 ps-10 md:ps-80 max-w-[105rem] mx-auto'>
    //     <div className='mb-10 md:mb-15'>
    //         <p className="mb-1 md:mb-2 md:text-xl">The Pakistan-based Digital Agency providing</p>
    //         <p className="text-4xl md:text-6xl mb-2 md:mb-4 md:leading-16.5">Web development<br /> for Enterprise<br /> and individuals.</p>
    //         {/* <p className="text-4xl md:text-6xl mb-2 md:mb-4">for Enterprises</p> */}
    //         {/* <p className="text-4xl md:text-6xl mb-2 md:mb-4">and individuals.</p> */}
    //         {/* <p className="text-3xl md:text-5xl">We got you</p> */}
    //     </div>
    //     <div className='flex flex-wrap md:gap-7 gap-3.5 gap-y-7 md:gap-y-0'>
    //         <div><Link to="/portfolio" className='text-primary border-primary border-2 hover:outline-1 py-2 md:py-2.5 px-4.5 md:px-5 rounded-xl font-medium md:text-lg'>See our work</Link></div>
    //         <div><a href="mailto:pakodev.info@gmail.com" className='bg-primary text-white border-primary border-2 hover:outline-1 hover:outline-primary py-2 md:py-2.5 px-4.5 md:px-5 rounded-xl font-medium md:text-lg'>Disscus your project with us</a></div>
    //     </div>
    // </div>
  )
}

export default Hero