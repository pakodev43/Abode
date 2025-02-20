import React from 'react'
import { Link } from 'react-router-dom'

import Homebox from './Homebox.jsx'

const Homesboxindex = () => {
    return (
        <div className='my-10 md:my-15 mx-5 md:mx-20 xl:mx-35'>
            <p className="mb-5 text-xl md:text-3xl font-medium">Checkout Homes for a calm residence</p>

            <div className='md:flex items-center gap-15'>
                <div className='md:grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    <Homebox />
                    <Homebox />
                    <Homebox />
                </div>
                <div className='mt-5 md:mt-0'>
                    <Link to="/homes" className="px-7 py-5 rounded-2xl bg-primary hover:bg-primary-350 flex items-center justify-between md:block"><span className='md:hidden text-white font-medium text-lg'>Explore Homes</span> <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path className='fill-white' d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></Link>
                </div>
            </div>
        </div>
    )
}

export default Homesboxindex