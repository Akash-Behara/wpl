import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/sections/Footer'

import RoutesPublic from './routes/Routes'

function App() {

  return (
    <div className='min-h-dvh min-w-screen size-full bg-[#16237f] scroll-smooth overflow-hidden'>
      <div className='absolute top-0 left-0 w-full z-[100] opacity-100'>
        <NavBar />
      </div>

      <RoutesPublic />

      <Footer />
    </div>
  )
}

export default App
