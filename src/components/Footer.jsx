import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-25 md:mt-35 text-center'>

      <div className='w-fit mx-auto mb-10 px-5'>
        <div className="mb-3 w-fit mx-auto flex gap-1.5 items-center">
          <p className="text-xl md:text-2xl font-medium">About Abode</p>
        </div>
        <p className="md:max-w-130 text-sm">We prioritize clarity, efficiency, and results. Our approach is grounded in practicality, not constrained by technology, budget, or convention.</p>
      </div>

      <div className='mx-20 h-[.1px] bg-accent'></div>

      <div className='py-5 px-5 md:px-30 text-center text-sm'>
        <p>Copyright © 2025 by Abode | All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer