import React, { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Faq from '../components/sections/Faq'
import Leaderboard from '../components/Leaderboard'
import Features from '../components/sections/Features'
import Footer from '../components/sections/Footer'
import MarqueeSection from '../components/sections/MarqueeSection'



const LandingPage = () => {
  
  return (
    <div className='bg-[#16237f] size-full overflow-x-hidden'>
      <Hero />
      <About />
      <Leaderboard />
      <Features />
      <MarqueeSection />
      <Faq />
    </div>
  )
}

export default LandingPage