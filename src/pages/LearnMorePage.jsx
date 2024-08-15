import React from 'react'
import Card from '../components/Card'
import KF_Card from '../components/KF_Card'
import Faq from '../components/sections/Faq'
import LM_Faq from '../components/LM_Faq'
import { leaderboardJune, tiers_points_data } from '../utils/leaderboard_dummy_data'
import LeaderboardTable from '../components/LeaderBoardTable'
import { Link } from 'react-router-dom'
import FancyButton from '../components/FancyButton'

import startEarnPng from '../assets/subtract_png/start_earn.png'
import startEarnHoverPng from '../assets/subtract_png/start_earn_hover.png'

const keyFeatureData = [
    {
        title: 'Points Allocation',
        description: 'Participants earn points for their contributions across social media and development platforms, such as Discord, GitHub, Twitter, SN Community Forum, Cairo Forum, Stack Overflow, Reddit, YouTube, and more. Points are allocated based on the type and organic impact of each activity.'
    },
    {
        title: 'Tiered Progression',
        description: 'Participants can advance through the hierarchy (Puppy, Red Wolf, Arctic Wolf, Gray Wolf, Celestial Wolf, Fire Wolf, Shadow Wolf, Ice Wolf, Thunder Wolf, Warg, Werewolf, Fenrir, Dire Wolf) based on their points.'
    },
    {
        title: 'Direct Rewards',
        description: 'Once they reach a new WPL tier, whitelisted creators and contributors are rewarded in STRK based on their impact and organic engagement measured in WPL points.'
    },
    {
        title: 'Application Process',
        description: 'Creators and developers must apply to the program with their social accounts and GitHub profiles, respectively. Quality control is maintained through social listening tools and manual review. If you engage in spam activity you might get bitten by the wolf pack.'
    },
    {
        title: 'Development Process',
        description: 'The program will start with a solid and lean backend operational setup, using social listening tools for social intelligence and OnlyDust for secure payments and KYC. The idea is to start with this robust foundation and expand it over time together with the community.'
    },
    {
        title: 'Potential Future Implementations',
        description: 'The program may expand to include features such as team competitions, partnerships, NFTs, and a community council to further engage and reward participants.'
    },
    {
        title: 'Decay Mechanism',
        description: 'To encourage continuous engagement, a decay mechanism will gradually reduce the points of inactive participants over time.'
    },
    {
        title: 'Contributor Restrictions',
        description: 'We cannot accept contributors from the United States due to regulatory risks and contributors from sanctioned territories. We appreciate your understanding.'
    },
]


const LearnMorePage = () => {
  return (
    <div className='pt-52 flex flex-col mx-5 lg:mx-[130px] mb-56'>

        {/* Intro */}
        <div className='flex flex-col mb-32'>
            <div className='text-[36px] md:text-[48px] leading-[45.6px] font-bienvenue text-[#FAF1B1] uppercase mb-10'>Starkware wolfpack league</div>
            <div className='text-[16px] md:text-[20px] leading-[23.4px] font-bienvenue text-white opacity-[82%] uppercase mb-5'>the Starknet Community Engagement Program </div>
            <div className='max-w-[680px]'>
                <div className='text-[14px] md:text-[16px] leading-[24px] font-inter text-[#CCCCF8] mb-4'>A StarkWare initiative to boost innovation and growth in the Starknet ecosystem is coming out of the woods, backed by a whopping 5 million STRK budget for the first phase!</div>
                <div className='text-[14px] md:text-[16px] leading-[24px] font-inter text-[#CCCCF8]'>The WPL Community Engagement Program is an initiative designed to cultivate a thriving community of Starknet creators who actively contribute and engage across various platforms. By identifying and rewarding impactful creators and contributors, the program aims to boost valuable education and innovation within the Starknet ecosystem.</div>
            </div>
        </div>

        {/* Key Features */}
        <div className='flex flex-col mb-32'>
            <div className='text-[36px] md:text-[48px] leading-[45.6px] font-bienvenue text-[#FAF1B1] uppercase mb-10'>Key Features</div>
            <div className="grid grid-cols-12 gap-6 mt-16 xl:mt-0">
                {keyFeatureData.map(({title, description}, index) => (
                    <KF_Card key={index} title={title} description={description}/>
                ))}
            </div>
        </div>

        {/* FAQ */}
        <div className="flex flex-col mb-12">
            <div className='text-[36px] md:text-[48px] leading-[45.6px] font-bienvenue text-[#FAF1B1] uppercase mb-10'>StarkWare Wolf Pack League FAQ</div>
            <LM_Faq />
        </div>

        {/* WPL Tiers */}
        <div className="flex flex-col mb-32">
            <div className='text-[36px] md:text-[48px] leading-[45.6px] font-bienvenue text-[#FAF1B1] uppercase mb-10'>The WPL Tiers</div>
        </div>
            

        {/* TIPS AND POITNS */}
        <div className='mb-32'>
            <div className='text-center md:text-start'>
                <div className='text-[36px] md:text-[48px] leading-[45.6px] font-bienvenue text-[#FAF1B1] uppercase mb-10'>Tiers & Points</div>
                <div className='max-w-[680px] gap-6 flex flex-col'>
                    <p className='font-[300] text-[#CCCCF8] leading-6'>
                        The WPL program is designed to be flexible, with point values and reward amounts potentially adjusted based on ongoing data analysis to ensure fairness and effectiveness. The number of points needed for each tier and corresponding USD rewards (paid in STRK) may change as we assess the program
                    </p>
                    <p className='font-[300] text-[#CCCCF8] leading-6'>
                        Additionally, the program may be modified, suspended, or terminated at our discretion. Payouts will be processed through <a href='https://app.onlydust.com/' target='_blank' className='underline'>OnlyDust</a>, requiring registration and KYC with a GitHub username for eligibility. 
                    </p>
                </div>
                <div className='flex justify-center md:justify-start w-full mt-12'>
                    <LeaderboardTable data={tiers_points_data} pos={'justify-start'}/>
                </div>

                <div className='mt-4'>
                    <p className='text-[12px] text-[#CCCCF8]'> * Points and Rewards are subject to change</p>
                </div>
            </div>
        </div>

        {/* LEADERBOARD JUNE */}
        <div>
            <div className='text-center md:text-start'>
                <div className='text-[36px] md:text-[48px] leading-[45.6px] font-bienvenue text-[#FAF1B1] uppercase mb-10'>Leaderboard end of June</div>
                <div className='gap-6 flex flex-col'>
                    <p className='font-[300] text-[#CCCCF8] leading-[22px]'>
                        If you've reached one or more tiers, you're eligible to claim rewards for those tiers. Register on <a href='https://app.onlydust.com/' target='_blank' className='underline'>OnlyDust</a> using your GitHub account, follow their rules, and complete KYC to receive your rewards. If you haven't reached a tier yet, keep contributing and adding value. Remember to avoid spam and pump talk at all times. 
                    </p>
                </div>
                <div className='flex justify-center md:justify-start w-full mt-10'>
                    <LeaderboardTable data={leaderboardJune?.slice(0, 5)} pos={'justify-start'}/>
                </div>
                <div id="features_section" data-aos="fade-up" data-aos-delay="560" data-aos-duration="700" className="mt-10 flex justify-center items-center w-full">
                    <Link to='/leaderboard'>
                        <FancyButton
                            src_img={startEarnPng}
                            hover_src_img={startEarnHoverPng}
                            img_size_classes='w-[236px] md:w-[318px] h-[35.2px] md:h-[55px]'
                            className='font-gridular text-white text-[14px] md:text-[16px]'
                            btn_txt='View Full Leaderboard'
                            alt_txt='view full leaderboard button'
                        />
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default LearnMorePage