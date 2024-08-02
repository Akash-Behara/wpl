import React from 'react'

import Marquee from "./ui/marquee";

import marqueeCard from '../assets/subtract/marquee_card.svg'

import FancyButton from './FancyButton';

import startEarnPng from '../assets/subtract_png/start_earn.png'
import startEarnHoverPng from '../assets/subtract_png/start_earn_hover.png'

const data = [
    {
        text: '1', 
        occ: "BLACKWOLF", 
        points:2500
    },
    {
        text: '2', 
        occ: "REDWOLF", 
        points:2500
    },
    {
        text: '3', 
        occ: "ARTICWOLF", 
        points:2500
    },
    {
        text: '4', 
        occ: "GRAYWOLF", 
        points:2500
    },
    {
        text: '5', 
        occ: "CELESTIALWOLF", 
        points:2500
    },
    {
        text: '6', 
        occ: "FIREWOLF", 
        points:2500
    },
    {
        text: '7', 
        occ: "PURPLEWOLF", 
        points:2500
    },
    {
        text: '8', 
        occ: "ICEWOLF", 
        points:2500
    },
    {
        text: '9', 
        occ: "THUNDERWOLF", 
        points:2500
    },
    {
        text: '10', 
        occ: "WARG", 
        points:2500
    },
    {
        text: '11', 
        occ: "WEREWOLF", 
        points:2500
    },
    {
        text: '12', 
        occ: "FENRIR", 
        points:2500
    },
    {
        text: '13', 
        occ: "DIREWOLF", 
        points:2500
    },
    {
        text: '14', 
        occ: "WHITEWOLF", 
        points:2500
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
                        <img src={`src/assets/images/wolf_pack/wolf_${wolf.text}.png`} alt='about card 1 img' className=''/>    
                    </div>
                    <div className='absolute top-8 w-full text-start ps-7 pr-3'>
                        <p className='text-[#E38070]'>#{wolf.text}</p>
                        <p className='text-[25px] text-primary font-bienvenue'>{wolf.occ}</p>
                    </div>
                </div>
                <div className='back'>
                    <img src={marqueeCard} alt='about card 1'/>
                    <div className='absolute top-8 w-full text-start ps-7 pr-3'>
                        <p className='text-[25px] text-primary font-bienvenue'>{wolf.occ}</p>
                        <div className='border border-b-white opacity-30 my-2'></div>
                        <div className='mb-2'>
                            <p className='text-[#E38070]'>RANK</p>
                            <p className=''>#{wolf.text}</p>
                        </div>
                        <div>
                            <p className='text-[#E38070]'>XP REQUIRED</p>
                            <p className=''>{wolf.points} WP</p>
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
            <h2 className='text-[28px] md:text-[48px] max-w-[230px] text-center md:max-w-full font-gridular text-primary uppercase'>Get into the wolfpack</h2>
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

        <div className="mt-16 hidden md:block">
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