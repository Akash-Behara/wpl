import React from 'react'
import wolfLogo from '../assets/svg/wolf_logo.svg'

function NavBar() {
  return (
    <div className='w-full pt-8'>
      <div className='flex justify-between items-center font-bienvenue mx-5 md:mx-[130px]'>
          <div className='flex items-center gap-6'>
            <h2 className='text-primary text-[18px]'>HOME</h2>
            <h2 className='text-primary text-[18px]'>ABOUT</h2>
          </div>
          <img src={wolfLogo} alt='wolf logo' className='translate-x-14 w-14 h-16'/>
          <div className='flex items-center gap-6'>
            <h2 className='text-primary text-[18px]'>EARN</h2>
            <h2 className='text-primary text-[18px]'>LEADERBOARD</h2>
            <h2 className='text-primary text-[18px]'>FAQ</h2>
          </div>
      </div>
    </div>
  )
}

export default NavBar