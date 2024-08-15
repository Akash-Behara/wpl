import { useEffect } from 'react';
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/sections/Footer'

import RoutesPublic from './routes/Routes'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      offset: 1
    });
  }, [])

  return (
    <div className='min-h-dvh min-w-screen size-full bg-[#16237f] scroll-smooth'>
      <div className='absolute top-0 left-0 w-full z-[100] opacity-100'>
        <NavBar />
      </div>

      <RoutesPublic />

      <Footer />
    </div>
  )
}

export default App
