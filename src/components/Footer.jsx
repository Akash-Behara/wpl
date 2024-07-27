import React from 'react'

import footerBg from '../assets/images/footer_bg.png'
import wolfLogo from '../assets/svg/wolf_logo_footer.svg'

const Footer = () => {
  return (
    <div className='relative'>
      <div>
        <img src={footerBg} className='h-[600px] min-w-[1200px] bg-cover bg-center ' />
      </div>
      <div className='absolute top-0 left-0 size-full flex flex-col items-center z-30 p-10'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-full'>
          <div className='translate-y-36 md:translate-y-10 flex flex-col justify-center md:justify-start items-center md:items-start'>
            <h2 className='text-[#16237F] font-gridular text-[24px] md:text-[48px] leading-[52px] max-w-[627px] uppercase text-center md:text-start'>become a part of wpl to earn rewards</h2>
            <button className='bg-[#16237F] text-white font-bienvenue text-[20px] md:text-[24px] px-6 py-1 flex justify-center items-center mt-4'>Apply now</button>
          </div>
          <div className='flex justify-end items-end text-center md:text-start gap-10 h-full max-w-fit'>
            <div className='flex flex-col gap-4'>
              <p className='text-[11px] font-normal text-[#16237F] cursor-pointer uppercase'>Contact us</p>
              <p className='text-[11px] font-normal text-[#16237F] cursor-pointer uppercase'>Terms and conditions</p>
              <p className='text-[11px] font-normal text-[#16237F] cursor-pointer uppercase'>Privacy Policy</p>
            </div>
            <div className='hidden md:flex flex-col justify-center md:justify-start items-center md:items-start gap-4 h-[82px] '>
              <p className='text-[11px] font-normal text-[#16237F] cursor-pointer uppercase'>About</p>
              <p className='text-[11px] font-normal text-[#16237F] cursor-pointer uppercase'>Brand kit</p>
            </div>
          </div>
        </div>

        <div className='border-b-2 bg-[#16237F] w-full my-4'/>
        <div className='flex justify-between items-center w-full'>
          <p className='text-[#16237F] text-[12px] md:text-[16px] uppercase'>Copyright @ Wpl</p>
          <img src={wolfLogo} alt='wolf' className='w-[18px] h-[21px] -translate-x-4'/>
          <p className='text-[#16237F] text-[12px] md:text-[16px] uppercase'>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default Footer