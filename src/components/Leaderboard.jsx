import React from 'react'

import FancyButton from './FancyButton'
import LeaderBoardTable from './LeaderBoardTable'

import startEarnPng from '../assets/subtract_png/start_earn.png'
import startEarnHoverPng from '../assets/subtract_png/start_earn_hover.png'
import { Link } from 'react-router-dom'
import {leaderboard_dummy_data} from '../utils/leaderboard_dummy_data'


const Leaderboard = () => {
  return (
    <div id="leaderboard_section" className='flex flex-col items-center justify-center mx-5 md:mx-3'>

			{/* Title */}
			<p data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className='font-gridular text-[28px] md:text-[48px] text-[#FAF1B1] my-8'>LEADERBOARD</p>

			{/* Table */}
			<LeaderBoardTable data={leaderboard_dummy_data?.slice(0, 5)}/>

			{/* View full button */}
			<div id="features_section" data-aos="fade-up" data-aos-delay="560" data-aos-duration="700" className="mt-10">
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
  )
}

export default Leaderboard