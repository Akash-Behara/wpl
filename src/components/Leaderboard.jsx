import React from 'react'

import view_box_full from '../assets/subtract/view_full_box.png'
import FancyButton from './FancyButton'
import LeaderBoardTable from './LeaderBoardTable'

const Leaderboard = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-5'>

			{/* Title */}
			<p className='font-gridular text-[48px] text-[#FAF1B1] my-8'>LEADERBOARD</p>

			{/* Table */}
			{/* <div className='mb-8'>
				<table className='border-collapse border border-slate-500 w-full text-center text-white'>
					<thead>
						<tr className='border border-slate-500'>
							{tableData.headers.map((header,i) => {
								return(
									<th className='px-6 py-3' key={i}>{header}</th>
								)}
							)}
						</tr>
					</thead>
					<tbody className=''>
						{tableData.player_data.map(player => {
							return(
								<tr className='' key={player.rank}>
									<td className=''>{player.rank}</td>
									<td>{player.player_name}</td>
									<td>{player.wpl_points}</td>
									<td>{player.bounty_points}</td>
									<td>{player.rewards}</td>
									<td>{player.total_points}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div> */}

			<LeaderBoardTable />

			{/* View full button */}
			<div className="mt-10">
				<FancyButton
					src_img={view_box_full}
					className='font-gridular text-[16px] text-white'
					btn_txt='View Full Leaderboard'
				/>
			</div>
    </div>
  )
}

export default Leaderboard