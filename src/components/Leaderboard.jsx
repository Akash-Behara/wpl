import React from 'react'

import view_box_full from '../assets/subtract/view_full_box.png'
import FancyButton from './FancyButton'

const tableData = {
	headers:[
		'Rank',
		'Name',
		'WPL Points',
		'Bounty Points',
		'Rewards',
		'Total Points',
	],
	player_data:[
		{
			rank: 1,
			player_name: 'John Doe',
			wpl_points: 1000,
			bounty_points: 1500,
			rewards: 2500,
			total_points: 2500
		},
		{
			rank: 2,
			player_name: 'John Doe',
			wpl_points: 1000,
			bounty_points: 1500,
			rewards: 2500,
			total_points: 2500
		},
		{
			rank: 3,
			player_name: 'John Doe',
			wpl_points: 1000,
			bounty_points: 1500,
			rewards: 2500,
			total_points: 2500
		},
		{
			rank: 4,
			player_name: 'John Doe',
			wpl_points: 1000,
			bounty_points: 1500,
			rewards: 2500,
			total_points: 2500
		},
		{
			rank: 5,
			player_name: 'John Doe',
			wpl_points: 1000,
			bounty_points: 1500,
			rewards: 2500,
			total_points: 2500
		}
	]
}

const Leaderboard = () => {
  return (
    <div className='flex flex-col items-center justify-center my-10'>

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

			{/* View full button */}
			<FancyButton
				src_img={view_box_full}
				className='font-gridular text-[16px] text-white'
				btn_txt='View Full Leaderboard'
			/>
    </div>
  )
}

export default Leaderboard