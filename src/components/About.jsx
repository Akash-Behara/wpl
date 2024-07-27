import React from 'react'

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

import aboutCard1 from '../assets/subtract/about_card_1.svg'
import aboutCard1Img from '../assets/subtract/about_card_1_wolf.svg'

import aboutCard2 from '../assets/subtract/about_card_2.svg'
import aboutCard2Img from '../assets/subtract/about_card_2_wolf.svg'

import aboutLowerCard from '../assets/subtract/about_lower_card.svg'
import aboutRightCard from '../assets/subtract/about_right_card.svg'

import joinSubtract from '../assets/subtract/join_subtract.svg'

import FancyButton from './FancyButton'

const About = () => {
  return (
    <div className='mx-5 md:mx-[130px] mt-32'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-primary font-gridular text-[48px] leading-[45px] uppercase'>More About WPL</h1>
            
            <div className='mt-10 flex flex-col lg:flex-row items-center gap-8'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col items-center md:flex-row gap-8'>
                        <CardContainer className='relative w-[300px] lg:w-[374px] h-[280px] lg:h-[357px]'>
                            <CardBody className="bg-[#16237f] relative  w-auto sm:w-[30rem] h-auto rounded-xl">
                                <CardItem
                                    translateZ="50"
                                    className=""
                                >
                                    <img src={aboutCard1} alt='about card 1' className='size-full'/>
                                </CardItem>
                                <CardItem
                                    translateZ="60"
                                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                                >
                                    <div className='w-[60%] lg:w-3/4 absolute top-10 left-1/2 -translate-x-1/2 '>
                                        <div className='bg-[#16237f]/20 size-full absolute'/>
                                        <img src={aboutCard1Img} alt='about card 1 img' className=''/>
                                    </div>
                                    <div className='absolute bottom-8 w-full text-start ps-12 pr-3'>
                                        <p className='lg:text-[20px] text-white'>How devs can contibute</p>
                                        <p className='text-[14px] lg:text-[16px] text-[#CCCCF8] font-light'>Devs get to complete milestones and earn rewards!</p>
                                    </div>
                                </CardItem>
                            </CardBody>
                        </CardContainer>

                        <CardContainer className='relative w-[300px] lg:w-[374px] h-[280px] lg:h-[357px]'>
                            <CardBody className="bg-[#16237f] relative  w-auto sm:w-[30rem] h-auto rounded-xl">
                                <CardItem
                                    translateZ="50"
                                    className=""
                                >
                                    <img src={aboutCard2} alt='about card 1' className='size-full'/>
                                </CardItem>
                                <CardItem
                                    translateZ="60"
                                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                                >
                                    <div className='w-[60%] lg:w-3/4 absolute top-10 left-1/2 -translate-x-1/2 '>
                                        <div className='bg-[#16237f]/20 size-full absolute'/>
                                        <img src={aboutCard2Img} alt='about card 1 img' className=''/>
                                    </div>
                                    <div className='absolute bottom-8 w-full text-start ps-12 pr-3'>
                                        <p className='lg:text-[20px] text-white'>How creators can contibute</p>
                                        <p className='text-[14px] lg:text-[16px] text-[#CCCCF8] font-light'>Creators get to complete milestones and earn rewards!</p>
                                        </div>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>

                    <div>
                        <CardContainer className='relative h-full w-full'>
                            <CardBody className="bg-[#16237f] relative w-auto  h-auto rounded-xl">
                                <CardItem translateZ="50">
                                    <img src={aboutLowerCard} alt='about card 1' className='size-full'/>
                                </CardItem>
                                <CardItem
                                    translateZ="60"
                                    className="absolute -top-4 md:top-0 left-0 w-full h-full rounded-xl text-start p-5"
                                >
                                    <h2 className='text-[10px] md:text-[16px] lg:text-[20px] text-white'>Refer a friend to earn 10% of their points</h2>
                                    <p className='text-[8px] md:text-[14px] lg:text-[16px] text-[#CCCCF8] font-light'>Devs get to complete milestones and earn rewards! Devs get to complete milestones and earn rewards! Devs get to complete milestones and earn rewards!</p>
                                    <button className='text-[#CCCCF8] bg-[#CCCCF85C] px-2 py-0 md:px-8 md:py-2 text-[8px] md:text-[14px] font-medium mt-3 rounded-sm'>Copy Referral Code</button>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>

                <div>
                    <CardContainer className=' md:w-[374px] h-[587px] relative'>
                        <CardBody className="bg-[#16237f] relative  w-auto sm:w-[30rem] h-auto rounded-xl">
                            <CardItem
                                translateZ="50"
                                className=""
                            >
                                <img src={aboutRightCard} alt='about card 1' className='size-full'/>
                            </CardItem>
                            <CardItem
                                translateZ="60"
                                className="absolute top-0 left-0 w-full h-full rounded-xl p-5"
                            >
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
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
            <div className="my-16">
                <FancyButton
                    className='font-gridular text-[24px] text-[#10105E]'
                    src_img={joinSubtract}
                    btn_txt='Join the Mission'
                    alt_txt='join mission button'
                    isArrow={true}
                />
            </div>
        </div>
    </div>
  )
}

export default About