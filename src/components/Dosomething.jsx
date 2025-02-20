import React from 'react'

import Dosomethingcard from './Dosomethingcard.jsx'

import dosomethingImage1 from '../assets/dosomethingImage1.webp'
import dosomethingImage2 from '../assets/dosomethingImage2.webp'

function Dosomething() {
  return (
    <div className='my-15 md:my-25 mx-5 md:mx-20 xl:mx-50 md:grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
      
      < Dosomethingcard Heading="Buy a home" dosomethingImage={ dosomethingImage1 } />
      < Dosomethingcard Heading="Sell a home" dosomethingImage={ dosomethingImage2 } />
      < Dosomethingcard Heading="Buy land" dosomethingImage={ dosomethingImage1 } />
      
    </div>
  )
}

export default Dosomething