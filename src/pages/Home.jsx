import React from 'react'

import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Dosomething from '../components/Dosomething.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Dosomething />
      {/* <About /> */}
      <Footer />
    </>
  )
}

export default Home
