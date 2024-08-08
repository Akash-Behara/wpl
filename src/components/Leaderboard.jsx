import React from 'react'

import FancyButton from './FancyButton'
import LeaderBoardTable from './LeaderBoardTable'

import startEarnPng from '../assets/subtract_png/start_earn.png'
import startEarnHoverPng from '../assets/subtract_png/start_earn_hover.png'

const Leaderboard = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-5 md:mx-3'>

			{/* Title */}
			<p className='font-gridular text-[28px] md:text-[48px] text-[#FAF1B1] my-8'>LEADERBOARD</p>

			{/* Table */}
			<LeaderBoardTable />

			{/* View full button */}
			<div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className="mt-10">
				<FancyButton
					src_img={startEarnPng}
					hover_src_img={startEarnHoverPng}
					img_size_classes='w-[236px] md:w-[318px] h-[35.2px] md:h-[55px]'
					className='font-gridular text-white text-[14px] md:text-[16px]'
					btn_txt='View Full Leaderboard'
					alt_txt='view full leaderboard button'
				/>
			</div>
    </div>
  )
}

export default Leaderboard