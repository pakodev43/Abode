import React from 'react'

import { Link } from 'react-router-dom'

import Header from '../components/Header.jsx'
import Homebox from '../components/Homebox.jsx'
import Footer from '../components/Footer.jsx'

import homeImage1 from '../assets/homeImage1.webp'

const Homeindividual = () => {
    return (
        <>
            <Header />

            <div className='mx-5 md:mx-15 mt-10 md:grid grid-cols-[4fr_3fr] gap-10'>
                <div>
                  <img src={ homeImage1 } alt="Image of the home" className='w-full object-cover aspect-20/12 rounded-2xl' />
                </div>

                <div className='mt-7 md:mt-20 mb-10 md:mb-15 mx-5'>
                    <Link to="/">
                        <p className="font-medium font-tertiary md:text-xl flex gap-3 md:mb-1">5 Marla &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs. 1,00,00,000</p>
                        <p className='text-2xl md:text-4xl text-primary'><span className='font-bold font-tertiary'>House 4131 St 4/1 Hamilton U.K</span></p>
                        <p className="mt-1 md:my-5 md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, dolores nobis modi repellendus consequuntur mollitia.</p>
                        <a href="" className='mt-5 md:mt-10 w-fit py-4 md:py-5 px-6 md:px-7 rounded-2xl flex gap-3 text-white bg-primary font-medium'><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className='fill-white' d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><span>Contact the owner</span></a>
                    </Link>
                </div>
            </div>


            <div className='my-20 mx-5 md:mx-15'>
              <Link to='/homes' className='flex items-center justify-center gap-5 py-5 md:py-15 rounded-2xl text-xl md:text-3xl font-medium text-primary bg-primary-300'><span>More houses</span> <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path className='fill-primry' d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></Link>
            </div>

            <Footer />
        </>
    )
}

export default Homeindividual