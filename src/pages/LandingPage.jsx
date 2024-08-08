import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Faq from '../components/Faq'
import Leaderboard from '../components/Leaderboard'
import Features from '../components/Features'
import Footer from '../components/Footer'
import MarqueeSection from '../components/MarqueeSection'

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
      <Footer />
    </div>
  )
}

export default LandingPage