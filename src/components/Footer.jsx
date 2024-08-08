import React from 'react'

import footerBg from '../assets/images/footer_bg.png'
import wolfLogo from '../assets/svg/wolf_logo_footer.svg'

const Footer = () => {

 return (
    <div className='relative'>
      <div className='size-full'>
        <img src={footerBg} className='h-[499px] min-w-[600px] w-full bg-cover bg-center' />
      </div>
      <div className='absolute top-0 left-0 size-full flex flex-col items-center z-30 p-10 pb-5'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-full'>
          <div className='translate-y-36 md:translate-y-14 flex flex-col justify-center md:justify-start items-center md:items-start'>
            <h2 data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className='text-[#16237F] font-gridular text-[24px] md:text-[48px] leading-[26px] md:leading-[52px] max-w-[627px] uppercase text-center md:text-start'>become a part of wpl to earn rewards</h2>
            <button data-aos="fade-up" data-aos-delay="1100" data-aos-duration="700" className='bg-[#16237F] text-white font-bienvenue text-[20px] md:text-[24px] px-6 py-1 flex justify-center items-center mt-4'>Apply now</button>
          </div>
          <div className='flex justify-end items-end text-center md:text-start gap-10 h-full max-w-fit mb-10 -translate-y-2'>
            <div className='flex flex-col gap-4'>
              <p className='text-[11px] font-normal leading-[12px] font-manrope text-[#16237F] cursor-pointer uppercase'>Contact us</p>
              <p className='text-[11px] font-normal leading-[12px] font-manrope text-[#16237F] cursor-pointer uppercase'>Terms and conditions</p>
              <p className='text-[11px] font-normal leading-[12px] font-manrope text-[#16237F] cursor-pointer uppercase'>Privacy Policy</p>
            </div>
            <div className='hidden md:flex flex-col justify-center md:justify-start items-center md:items-start gap-4 h-[68px] '>
              <p className='text-[11px] font-normal leading-[12px] font-manrope text-[#16237F] cursor-pointer uppercase'>About</p>
              <p className='text-[11px] font-normal leading-[12px] font-manrope text-[#16237F] cursor-pointer uppercase'>Brand kit</p>
            </div>
          </div>
        </div>

        <div className='border-b border-[#16237F] w-full'/>
        <div className='flex justify-center md:justify-between items-center w-full mt-5 gap-2 md:gap-0'>
          <p className='text-[#16237F] text-[12px] md:text-[16px] uppercase font-manrope'>Copyright @ Wpl</p>
          <img src={wolfLogo} alt='wolf' className='w-[18px] h-[21px] md:-translate-x-4'/>
          <p className='text-[#16237F] text-[12px] md:text-[16px] uppercase font-manrope hidden md:block'>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default Footer