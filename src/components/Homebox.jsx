import React from 'react'

import portfolioImage1 from '../assets/homeImage1.webp'

function Homebox() {
  return (
      <div className='shadow-lg rounded-xl'>
          <div><img src={portfolioImage1} alt="Image of the home" className='aspect-20/12 object-cover rounded-t-xl' /></div>
          <div className='m-3'>
              <div className="flex gap-5 text-xs md:text-base"><p>5 Marla</p><p>Rs. 1,00,00,000</p></div>
              <p className="mt-1.5 md:mt-0 text-sm md:text-lg">House 4131 St 4/1 Hamilton U.K</p>
          </div>
      </div>
  )
}

export default Homebox
