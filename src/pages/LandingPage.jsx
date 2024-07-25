import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Faq from '../components/Faq'

const LandingPage = () => {
  return (
    <div className='bg-[#16237f] size-full'>
      <Hero />
      <About />
      <Faq />
    </div>
  )
}

export default LandingPage