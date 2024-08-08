import React from 'react'

import Marquee from "./ui/marquee";

import marqueeCard from '../assets/subtract/marquee_card.svg'

import FancyButton from './FancyButton';

import startEarnPng from '../assets/subtract_png/start_earn.png'
import startEarnHoverPng from '../assets/subtract_png/start_earn_hover.png'

// Wolf pack images
import wolf1 from '../assets/images/wolf_pack/wolf_1.png'
import wolf2 from '../assets/images/wolf_pack/wolf_2.png'
import wolf3 from '../assets/images/wolf_pack/wolf_3.png'
import wolf4 from '../assets/images/wolf_pack/wolf_4.png'
import wolf5 from '../assets/images/wolf_pack/wolf_5.png'
import wolf6 from '../assets/images/wolf_pack/wolf_6.png'
import wolf7 from '../assets/images/wolf_pack/wolf_7.png'
import wolf8 from '../assets/images/wolf_pack/wolf_8.png'
import wolf9 from '../assets/images/wolf_pack/wolf_9.png'
import wolf10 from '../assets/images/wolf_pack/wolf_10.png'
import wolf11 from '../assets/images/wolf_pack/wolf_11.png'
import wolf12 from '../assets/images/wolf_pack/wolf_12.png'
import wolf13 from '../assets/images/wolf_pack/wolf_13.png'
import wolf14 from '../assets/images/wolf_pack/wolf_14.png'

const data = [
    {
        text: '1', 
        occ: "BLACKWOLF", 
        points: 2500,
        image: wolf1
    },
    {
        text: '2', 
        occ: "REDWOLF", 
        points: 2500,
        image: wolf2
    },
    {
        text: '3', 
        occ: "ARTICWOLF", 
        points: 2500,
        image: wolf3
    },
    {
        text: '4', 
        occ: "GRAYWOLF", 
        points: 2500,
        image: wolf4
    },
    {
        text: '5', 
        occ: "CELESTIALWOLF", 
        points: 2500,
        image: wolf5
    },
    {
        text: '6', 
        occ: "FIREWOLF", 
        points: 2500,
        image: wolf6
    },
    {
        text: '7', 
        occ: "PURPLEWOLF", 
        points: 2500,
        image: wolf7
    },
    {
        text: '8', 
        occ: "ICEWOLF", 
        points: 2500,
        image: wolf8
    },
    {
        text: '9', 
        occ: "THUNDERWOLF", 
        points: 2500,
        image: wolf9
    },
    {
        text: '10', 
        occ: "WARG", 
        points: 2500,
        image: wolf10
    },
    {
        text: '11', 
        occ: "WEREWOLF", 
        points: 2500,
        image: wolf11
    },
    {
        text: '12', 
        occ: "FENRIR", 
        points: 2500,
        image: wolf12
    },
    {
        text: '13', 
        occ: "DIREWOLF", 
        points: 2500,
        image: wolf13
    },
    {
        text: '14', 
        occ: "WHITEWOLF", 
        points: 2500,
        image: wolf14
    },
]

const WolfCard = ({key, wolf}) => {
    return (
        <div key={key} className='card relative w-[207px] lg:w-[207px] h-[228px] lg:h-[228px]'>
            <div className='content'>
                <div className='front'>
                    <img src={marqueeCard} alt='about card 1' className='size-full'/>
                    <div className='w-[80%] absolute bottom-4 left-1/2 -translate-x-1/2 '>
                        <div className='bg-[#16237f]/40 size-full absolute'/>
                        <img src={wolf.image} alt='about card 1 img' />    
                    </div>
                    <div className='absolute top-8 w-full text-start ps-7 pr-3'>
                        <p className='text-[#E38070] font-bevan'>#{wolf.text}</p>
                        <p className='text-[25px] text-primary font-bienvenue'>{wolf.occ}</p>
                    </div>
                </div>
                <div className='back'>
                    <img src={marqueeCard} alt='about card 1'/>
                    <div className='absolute top-8 w-full text-start ps-7 pr-3'>
                        <p className='text-[25px] text-primary font-bienvenue'>{wolf.occ}</p>
                        <div className='border border-b-white opacity-30 my-2'></div>
                        <div className='mb-2'>
                            <p className='text-[#E38070] font-bevan'>RANK</p>
                            <p className='font-inter opacity-80'>#{wolf.text}</p>
                        </div>
                        <div>
                            <p className='text-[#E38070] font-bevan'>XP REQUIRED</p>
                            <p className='font-inter backdrop-opacity-80'>{wolf.points} WP</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

const MarqueeSection = () => {
  return (
    <div className='md:h-screen flex flex-col justify-center items-center mt-14'>
        <div className='mb-16'>
            <h2 className='text-[28px] md:text-[48px] max-w-[230px] text-center md:max-w-full font-gridular text-primary uppercase'>Join the wolfpack, earn your rank!</h2>
        </div>

        <Marquee pauseOnHover reverse={true} className="[--duration:20s]">
            {data.map((wolf) => (
                <WolfCard key={wolf.text} wolf={wolf} />
            ))}
        </Marquee>

        <Marquee pauseOnHover reverse={false} className="[--duration:20s]">
            {data.map((wolf) => (
                <WolfCard key={wolf.text} wolf={wolf} />
            ))}
        </Marquee>

        <div className='block md:hidden'>
            <Marquee pauseOnHover reverse={true} className="[--duration:20s]">
                {data.map((wolf) => (
                    <WolfCard key={wolf.text} wolf={wolf} />
                ))}
            </Marquee>
        </div>

        <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className="mt-16 hidden md:block">
            <FancyButton
                src_img={startEarnPng}
                hover_src_img={startEarnHoverPng}
                img_size_classes='w-[146px] md:w-[318px] h-[36.5px] md:h-[65px]'
                className='font-gridular text-white text-[14px] md:text-[24px]'
                btn_txt='Join the pack'
                alt_txt='joint the pack button'
            />
        </div>
    </div>
  )
}

export default MarqueeSection