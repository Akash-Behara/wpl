import React from 'react'
import wolfLogo from '../assets/svg/wolf_logo.svg'

function NavBar() {
  return (
    <div className='w-full pt-10'>
      <div className='flex justify-between items-center font-bienvenue mx-24'>
          <div className='flex items-center gap-4'>
            <h2 className='text-[]'>HOME</h2>
            <h2 className='text-[]'>ABOUT</h2>
          </div>
          <img src={wolfLogo} alt='wolf logo' className='translate-x-2'/>
          <div className='flex items-center gap-4'>
            <h2 className='text-[]'>EARN</h2>
            <h2 className='text-[]'>LEADERBOARD</h2>
            <h2 className='text-[]'>FAQ</h2>
          </div>
      </div>
    </div>
  )
}

export default NavBar