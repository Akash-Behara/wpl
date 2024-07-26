import React from 'react'

import aboutCard1 from '../assets/subtract/about_card_1.svg'
import aboutCard1Img from '../assets/subtract/about_card_1_wolf.svg'

import aboutCard2 from '../assets/subtract/about_card_2.svg'
import aboutCard2Img from '../assets/subtract/about_card_2_wolf.svg'

import aboutLowerCard from '../assets/subtract/about_lower_card.svg'
import aboutRightCard from '../assets/subtract/about_right_card.svg'

const About = () => {
  return (
    <div className='mx-5 md:mx-[130px] mt-32'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-primary font-gridular text-[48px] leading-[45px] uppercase'>More About WPL</h1>
            
            <div className='mt-10 flex flex-col lg:flex-row items-center gap-8'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col items-center md:flex-row gap-8'>
                        <div className='relative w-[300px] lg:w-[374px] h-[280px] lg:h-[357px]'>
                            <img src={aboutCard1} alt='about card 1' className='size-full'/>
                            <img src={aboutCard1Img} alt='about card 1 img' className='w-[60%] lg:w-3/4 absolute top-10 left-1/2 -translate-x-1/2'/>
                            <div className='absolute bottom-8 w-full text-start ps-12 pr-3'>
                                <p className='lg:text-[20px] text-white'>How devs can contibute</p>
                                <p className='text-[14px] lg:text-[16px] text-[#CCCCF8] font-light'>Devs get to complete milestones and earn rewards!</p>
                            </div>
                        </div>
                        <div className='relative w-[300px] lg:w-[374px] h-[280px] lg:h-[357px]'>
                            <img src={aboutCard2} alt='about card 1' className='size-full'/>
                            <img src={aboutCard2Img} alt='about card 1 img' className='w-[60%] lg:w-3/4 absolute top-10 left-1/2 -translate-x-1/2'/>
                            <div className='absolute bottom-8 w-full text-start ps-12 pr-3'>
                                <p className='lg:text-[20px] text-white'>How creators can contibute</p>
                                <p className='text-[14px] lg:text-[16px] text-[#CCCCF8] font-light'>Creators get to complete milestones and earn rewards!</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative text-start'>
                        <img src={aboutLowerCard} alt='about lower card' className='size-full'/>
                        <div className='absolute top-1/2 left-10 -translate-y-1/2'>
                            <h2 className='text-[12px] md:text-[16px] lg:text-[20px] text-white'>Refer a friend to earn 10% of their points</h2>
                            <p className='text-[10px] md:text-[14px] lg:text-[16px] text-[#CCCCF8] font-light'>Devs get to complete milestones and earn rewards! Devs get to complete milestones and earn rewards! Devs get to complete milestones and earn rewards!</p>
                            <button className='text-[#CCCCF8] bg-[#CCCCF85C] px-2 md:px-8 md:py-2 text-[14px] font-medium mt-3 rounded-sm'>Copy Referral Code</button>
                        </div>
                    </div>
                </div>

                <div className='w-[374px] h-[587px] relative'>
                    <img src={aboutRightCard} alt='about lower card' className='size-full'/>
                    <div className='absolute top-0 left-0 size-full p-6'>
                        <div className='mt-6'>
                            <p className='text-[20px] text-white text-start'>New Pack Members</p>
                            <div className='flex items-center gap-3 mt-6'>
                                <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                <p className='text-white font-medium'>Tiamyu Absulsamad</p>
                            </div>
                            <div className='flex items-center  gap-3 mt-3'>
                                <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                <p className='text-white font-medium'>Tiamyu Absulsamad</p>
                            </div>
                            <div className='flex items-center  gap-3 mt-3'>
                                <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                <p className='text-white font-medium'>Tiamyu Absulsamad</p>
                            </div>
                        </div>
                        <div className='border-b border-[#57579D] my-6'/>
                        <div className='mt-6'>
                            <p className='text-[20px] text-white text-start'>Recent Earners</p>

                            <div className='flex justify-between items-center gap-3 mt-6'>
                                <div className='flex items-center gap-4'>
                                    <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                    <div>
                                        <p className='text-white font-medium'>Tiamyu Absulsamad</p>
                                        <p className='text-[#9292BA] text-[14px] font-light'>Superteam Vietnam: De..</p>
                                    </div>
                                </div>
                                <div className='text-[14px] font-light text-white'>
                                    500 USDC
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-3 mt-6'>
                                <div className='flex items-center gap-4'>
                                    <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                    <div>
                                        <p className='text-white font-medium'>Tiamyu Absulsamad</p>
                                        <p className='text-[#9292BA] text-[14px] font-light'>Superteam Vietnam: De..</p>
                                    </div>
                                </div>
                                <div className='text-[14px] font-light text-white'>
                                    500 USDC
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-3 mt-6'>
                                <div className='flex items-center gap-4'>
                                    <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                    <div>
                                        <p className='text-white font-medium'>Tiamyu Absulsamad</p>
                                        <p className='text-[#9292BA] text-[14px] font-light'>Superteam Vietnam: De..</p>
                                    </div>
                                </div>
                                <div className='text-[14px] font-light text-white'>
                                    500 USDC
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About