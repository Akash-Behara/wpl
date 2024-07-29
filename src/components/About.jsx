import React from 'react'

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

import aboutCard1 from '../assets/subtract/about_card_1.svg'
import aboutCard1Img from '../assets/subtract/about_card_1_wolf.svg'

import aboutCard2 from '../assets/subtract/about_card_2.svg'
import aboutCard2Img from '../assets/subtract/about_card_2_wolf.svg'

import aboutLowerCard from '../assets/subtract/about_lower_card.svg'
import aboutRightCard from '../assets/subtract/about_right_card.svg'

import joinSubtract from '../assets/subtract/join_subtract.svg'
import joinSubtractHover from '../assets/subtract/join_subtract_hover.svg'

// Png subtract files
import joinSubtractPng from '../assets/subtract_png/join_subtract.png'
import joinSubtractHoverPng from '../assets/subtract_png/join_subtract_hover.png'

import FancyButton from './FancyButton'
import { AnimatedList } from './ui/animated-list';
import { FollowerPointerCard } from './ui/following-pointer';

const About = () => {
  return (
    <div className='mx-5 md:mx-[130px] mt-32'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-primary font-gridular text-[28px] md:text-[48px] leading-[26px] md:leading-[45px] uppercase'>More About WPL</h1>
            
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
                                    <div className='w-[80%] lg:w-3/4 absolute top-5 md:top-10 left-1/2 -translate-x-1/2 '>
                                        <div className='bg-[#16237f]/20 size-full absolute'/>
                                        <img src={aboutCard1Img} alt='about card 1 img' className=''/>
                                    </div>
                                    <div className='absolute bottom-7 md:bottom-8 w-full text-start ps-8 md:ps-12 pr-3'>
                                        <p className='lg:text-[20px] text-white font-gridular'>How devs can contibute</p>
                                        <p className='text-[14px] lg:text-[16px] text-[#CCCCF8] font-light font-inter'>Devs get to complete milestones and earn rewards!</p>
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
                                    <div className='w-[80%] lg:w-3/4 absolute top-5 md:top-10 left-1/2 -translate-x-1/2 '>
                                        <div className='bg-[#16237f]/20 size-full absolute'/>
                                        <img src={aboutCard2Img} alt='about card 1 img' className=''/>
                                    </div>
                                    <div className='absolute bottom-7 md:bottom-8 w-full text-start ps-8 md:ps-12 pr-3'>
                                        <p className='lg:text-[20px] text-white font-gridular'>How creators can contibute</p>
                                        <p className='text-[14px] lg:text-[16px] text-[#CCCCF8] font-light font-inter'>Creators get to complete milestones and earn rewards!</p>
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
                                    className="absolute -top-1 md:top-0 left-0 w-full h-full rounded-xl text-start p-5"
                                >
                                    <h2 className='text-[11px] md:text-[16px] lg:text-[20px] text-white font-gridular'>Refer a friend to earn 10% of their points</h2>
                                    <p className='text-[8px] md:text-[14px] lg:text-[16px] text-[#CCCCF8] font-light font-inter'>Devs get to complete milestones and earn rewards! Devs get to complete milestones and earn rewards! Devs get to complete milestones and earn rewards!</p>
                                    <button className='text-[#CCCCF8] bg-[#CCCCF85C] px-2 py-0 md:px-8 md:py-2 text-[8px] md:text-[14px] font-medium mt-3 rounded-sm font-inter'>Copy Referral Code</button>
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
                                <div className='mt-6 h-[20%]'>
                                    <p className='text-[16px] md:text-[20px] text-white text-start font-gridular'>New Pack Members</p>
                                    <AnimatedList delay={3000}>
                                        <div className='flex items-center gap-3 mt-6'>
                                            <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                            <p className='text-[14px] md:text-[16px] text-white font-medium font-inter'>Tiamyu Absulsamad</p>
                                        </div>
                                        <div className='flex items-center  gap-3 mt-3'>
                                            <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                            <p className='text-[14px] md:text-[16px] text-white font-medium font-inter'>Tiamyu Absulsamad</p>
                                        </div>
                                        <div className='flex items-center  gap-3 mt-3'>
                                            <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                            <p className='text-[14px] md:text-[16px] text-white font-medium font-inter'>Tiamyu Absulsamad</p>
                                        </div>
                                    </AnimatedList>
                                </div>
                                <div className='border-b border-[#57579D] my-6 h-[20%]'/>
                                <div className='mt-6'>
                                    <p className='text-[16px] md:text-[20px] text-white text-start font-gridular'>Recent Earners</p>
                                    <AnimatedList delay={2000}>
                                        <div className='flex justify-between items-center gap-3 mt-6'>
                                            <div className='flex items-center gap-4'>
                                                <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                                <div className='text-start'>
                                                    <p className='text-[14px] md:text-[16px] text-white font-medium font-inter'>Tiamyu Absulsamad</p>
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
                                                <div className='text-start'>
                                                    <p className='text-[14px] md:text-[16px] text-white font-medium font-inter'>Tiamyu Absulsamad</p>
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
                                                <div className='text-start'>
                                                    <p className='text-[14px] md:text-[16px] text-white font-medium font-inter'>Tiamyu Absulsamad</p>
                                                    <p className='text-[#9292BA] text-[14px] font-light'>Superteam Vietnam: De..</p>
                                                </div>
                                            </div>
                                            <div className='text-[14px] font-light text-white'>
                                                500 USDC
                                            </div>
                                        </div>
                                    </AnimatedList>
                                </div>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
            <div className="my-16">
                <FancyButton
                    src_img={joinSubtractPng}
                    hover_src_img={joinSubtractHoverPng}
                    img_size_classes='w-[208px] md:w-[318px] h-[36.5px] md:h-[65px]'
                    className='font-gridular text-[#10105E] text-[14px] md:text-[24px]'
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