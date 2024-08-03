import React, { useEffect, useRef } from 'react'
import NavBar from './NavBar'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import heroBg from '../assets/images/hero_bg_new.png'
import partnerImg from '../assets/images/starkware.png'

import star from '../assets/svg/hero_star.svg'
import bgYellowElLeft from '../assets/svg/bg_yellow_el_left.svg'
import bgYellowElRight from '../assets/svg/bg_yellow_el_right.svg'
import joinSubtractPng from '../assets/subtract_png/join_subtract.png'
import joinSubtractHoverPng from '../assets/subtract_png/join_subtract_hover.png'
import startEarnPng from '../assets/subtract_png/start_earn.png'
import startEarnHoverPng from '../assets/subtract_png/start_earn_hover.png'
import Marquee from './ui/marquee';
import FancyButton from './FancyButton';

const partnersData = [
  {img: partnerImg, alt: 'partner'},
]

const Hero = () => {

  const rewardRef = useRef(null);

  useEffect(() => {
    AOS.init({
      once: false
    });
  }, [])


  useEffect(() => {
    const letters = document?.querySelectorAll('.letter');
    let currentIndex = 0;
    let timeout
    
    function animateLetter() {
      const letter = letters[currentIndex];
      letter.style.transition = 'transform 0.01s';
      letter.style.transform = 'translateY(-9px)';

      timeout = setTimeout(() => {
        letter.style.transform = 'translateY(0)';
        currentIndex = (currentIndex + 1) % letters.length;
        animateLetter();
      }, 135);
    }
    
    animateLetter();

    return () => {
      clearTimeout(animateLetter);
      clearTimeout(timeout);
    }
  }, [rewardRef])



  return (
    <div className='md:min-h-screen'>
      <div>
        <img src={heroBg} className='absolute top-0 left-0 size-full max-h-[500px] md:max-h-[800px] md:min-h-[120vh] bg-cover bg-no-repeat bg-center' />
      </div>

      <div className='size-full md:min-h-screen z-30 relative'>
        <div className='z-[100] opacity-100'>
          <NavBar />
        </div>

        <div className='flex flex-col justify-center items-center mt-[100px]'>
          <div className='max-w-[1000px] flex flex-col justify-center items-center relative'>
            <h1 data-aos="fade-up" data-aos-delay="400" data-aos-duration="300" data-aos-easing="ease-in-out" className='font-gridular text-[42px] lg:text-[6.98em] text-primary text-center md:leading-[125px] uppercase'>Break Boundaries, 
              <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className='md:-translate-x-12 flex justify-center items-center gap-4 lg:gap-6'>Earn 
                <span ref={rewardRef} className='bg-[#E38070] text-[#1B1B83] text-[40px] lg:text-[84.17px] md:leading-[94.27px] md:px-5 lg:-ms-4 tracking-[0.12rem] flex'>
                  <span class="letter">R</span>
                  <span class="letter">E</span>
                  <span class="letter">W</span>
                  <span class="letter">A</span>
                  <span class="letter">R</span>
                  <span class="letter">D</span>
                  <span class="letter">S</span>
                </span>
              </div>
            </h1>

            <p className='font-bienvenue text-white mt-6 text-[14px] md:text-[20px] leading-5'>Apply now to join the pack and start earning</p>
            <img src={star} alt='yellow element' className='absolute -top-3 lg:top-3 left-0 lg:left-[126px] size-8'/>
            <img src={star} alt='yellow element' className='absolute bottom-7 md:bottom-20 right-0 lg:right-10 size-8'/>
            <img src={bgYellowElLeft} alt='yellow element' className='absolute bottom-5 -left-14 size-6 md:size-14 text-red-500'/>
            <img src={bgYellowElRight} alt='yellow element' className='absolute -top-6 lg:-top-3 right-4 md:-right-3 size-6 md:size-14'/>
          </div>
          <div className='font-gridular mt-12 flex items-center gap-4 md:text-[24px]'>
            <FancyButton
              src_img={joinSubtractPng}
              hover_src_img={joinSubtractHoverPng}
              img_size_classes='w-[146px] md:w-[318px] h-[36.5px] md:h-[65px]'
              className='font-gridular text-[#10105E] text-[14px] md:text-[24px]'
              btn_txt='Join the pack'
              alt_txt='join pack button'
              isArrow={true}
            />
            <FancyButton
              src_img={startEarnPng}
              hover_src_img={startEarnHoverPng}
              img_size_classes='w-[146px] md:w-[318px] h-[36.5px] md:h-[65px]'
              className='font-gridular text-white text-[14px] md:text-[24px]'
              btn_txt='Redacted'
              alt_txt='redacted button'
            />
          </div>
        </div>
      </div>

      <div className='mt-40'>
        <div className='flex flex-col text-center w-full'>
          <p className='text-[20px] font-bienvenue leading-6 text-white uppercase'>Powered by</p>
          <div className='w-full mt-8 flex justify-center items-center gap-16'>
            {/* <Marquee pauseOnHover reverse={true} className="[--duration:10s]"> */}
              {partnersData.map((partner, idx) => (
                <img src={partner.img} alt='partner' key={idx} className='w-[141px] md:w-[206px] h-[25px] md:h-[37px]'/>
              ))}
            {/* </Marquee> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero