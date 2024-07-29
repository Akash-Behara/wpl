import React from 'react'

import Marquee from "./ui/marquee";

import marqueeCard from '../assets/subtract/marquee_card.svg'
import marqueeWolf from '../assets/svg/marquee_wolf.svg'
import FancyButton from './FancyButton';

import startEarnPng from '../assets/subtract_png/start_earn.png'
import startEarnHoverPng from '../assets/subtract_png/start_earn_hover.png'

const data = [
    {text: '#1', occ: "REDWOLF"},
    {text: '#2', occ: "ICEWOLF"},
    {text: '#3', occ: "THUNDERWOLF"},
    {text: '#4', occ: "BLACKWOLF"},
]

const WolfCard = ({key, wolf}) => {
    return (
        <div key={key} className='card relative w-[207px] lg:w-[207px] h-[228px] lg:h-[228px]'>
            <div className='content'>
                <div className='front'>
                    <img src={marqueeCard} alt='about card 1' className='size-full'/>
                    <div className='w-[80%] absolute bottom-4 left-1/2 -translate-x-1/2 '>
                        <div className='bg-[#16237f]/30 size-full absolute'/>
                        <img src={marqueeWolf} alt='about card 1 img' className=''/>
                    </div>
                    <div className='absolute top-8 w-full text-start ps-7 pr-3'>
                        <p className='text-[#E38070]'>{wolf.text}</p>
                        <p className='text-[25px] text-primary font-bienvenue'>{wolf.occ}</p>
                    </div>
                </div>
                <div className='back'>
                    BACK
                </div>
            </div>
        </div>
    )
}

const MarqueeSection = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center mt-14'>
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