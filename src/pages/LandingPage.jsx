import React, { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Faq from '../components/sections/Faq'
import Leaderboard from '../components/Leaderboard'
import Features from '../components/sections/Features'
import Footer from '../components/sections/Footer'
import MarqueeSection from '../components/sections/MarqueeSection'

import AOS from 'aos';
import 'aos/dist/aos.css'; 


const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, [])
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