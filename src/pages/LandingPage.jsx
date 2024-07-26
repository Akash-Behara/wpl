import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Faq from '../components/Faq'
import Leaderboard from '../components/Leaderboard'
import Features from '../components/Features'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className='bg-[#16237f] size-full'>
      <Hero />
      <About />
      <Leaderboard />
      <Features />
      <Faq />
      <Footer />
    </div>
  )
}

export default LandingPage