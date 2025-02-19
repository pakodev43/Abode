import { React, useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logoBlue.png'

const Header = () => {
    const [topNav, settopNav] = useState(false)
  
    return (
      <header className='px-2.5 md:px-45 py-4 md:py-5 flex items-center justify-between w-full'>

        <nav className='hidden md:block'>
          <ul className="flex gap-5 md:gap-10 md:font-medium text-2xl md:text-base flex-col md:flex-row pt-23 px-10 md:p-0">
            <li><Link to="/buy" className='pb-1 hover:border-b-2'>Buy</Link></li>
            <li><Link to="/sell" className='pb-1 hover:border-b-2'>Sell</Link></li>
          </ul>
        </nav>

        <div className='flex gap-2 items-center'>
          <img src={ logo } alt="Abode" className='w-7' />
          <Link to="/"><p className='text-xl md:text-2xl text-primary font-medium'>Abode</p></Link>
        </div>
  
        <nav className={topNav ? 'block fixed top-0 right-0 h-full w-full bg-white z-10' : 'hidden md:block'}>
          <ul className="flex md:gap-10 md:font-medium text-lg md:text-base flex-col md:flex-row pt-23 md:p-0">
            <li className="px-10 border-t-1 md:p-0 md:border-0 border-primary-350"><Link to="/buy" className='w-full block py-3 md:py-0 md:pb-1 md:hover:border-b-2 md:hidden'>Buy</Link></li>
            <li className="px-10 border-t-1 md:p-0 md:border-0 border-primary-350"><Link to="/sell" className='w-full block py-3 md:py-0 md:pb-1 md:hover:border-b-2 md:hidden'>Sell</Link></li>
            <li className="px-10 border-y-1 md:p-0 md:border-0 border-primary-350"><a href="mailto:pakodev.info@gmail.com" className='w-full block py-3 md:py-0 md:pb-1 md:hover:border-b-2'>Find an agent</a></li>
          </ul>
        </nav>
  
        <div className='md:hidden flex gap-3'>
          <button className='z-10' onClick={() => { settopNav(!topNav) }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg></button>
        </div>
      </header>
    )
}

export default Header