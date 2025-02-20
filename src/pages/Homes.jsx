import React from 'react'

import { Link } from 'react-router-dom'

import Header from '../components/Header.jsx'
import Homebox from '../components/Homebox.jsx'
import Footer from '../components/Footer.jsx'

const Homes = () => {
    return (
        <>
            <Header />

            <div className='mt-7 md:mt-20 mb-10 md:mb-15 mx-5 md:mx-30'>
                <Link to="/">
                    <p className="font-medium font-tertiary md:text-lg flex gap-3 md:mb-1"><svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg><span>Back</span></p>
                    <p className='text-2xl md:text-4xl text-primary'><span className='font-bold font-tertiary'>Explore Homes to live in</span></p>
                </Link>
            </div>

            <div className='mx-2.5 md:mx-15 xl:mx-30 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2.5 md:gap-x-5 gap-y-5 md:gap-y-10'>

              <Homebox />
              <Homebox />
              <Homebox />
              <Homebox />
              <Homebox />
              <Homebox />
              <Homebox />
              <Homebox />
              <Homebox />
              <Homebox />
              <Homebox />
              <Homebox />

            </div>

            <Footer />
        </>
    )
}

export default Homes