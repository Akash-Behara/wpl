import board_profile from '../assets/svg/board_profile.svg'

const LeaderboardTable = () => {

  const data = [
    { rank: 1, name: 'Tiamiyu Absulsamad', wplPoints: 1000, bountyPoints: 1500, rewards: '$2500', totalPoints: 2500 },
    { rank: 2, name: 'Tiamiyu Absulsamad', wplPoints: 1000, bountyPoints: 1500, rewards: '$2500', totalPoints: 2500 },
    { rank: 3, name: 'Tiamiyu Absulsamad', wplPoints: 1000, bountyPoints: 1500, rewards: '$2500', totalPoints: 2500 },
    { rank: 4, name: 'Tiamiyu Absulsamad', wplPoints: 1000, bountyPoints: 1500, rewards: '$2500', totalPoints: 2500 },
    { rank: 5, name: 'Tiamiyu Absulsamad', wplPoints: 1000, bountyPoints: 1500, rewards: '$2500', totalPoints: 2500 },
  ];

  return (
    <div className="flex items-center justify-center mx-5">
      <table className="lg:w-[1187px] w-[357px] h[259px] bg-[#0F1971] text-white leading-[24px]">
        <thead>
          <tr className='bg-[#0F1C79] text-[#CCCCF8]'>
            <th className="py-3 leading-[12px] md:px-14 px-6 10px md:text-[12px] font-normal border-t border-l border-table_border_blue">
              <span className="hidden md:inline">Rank</span>
              <span className="md:hidden">#</span>  
            </th>
            <th className="py-3 leading-[9.6px] md:px-14 px-6 8px md:text-[12px] font-normal border-t  border-table_border_blue">Name</th>
            <th className="py-3 leading-[9.6px] md:px-14 px-6 8px md:text-[12px] font-normal border-t  border-table_border_blue hidden md:table-cell">WPL Points</th>
            <th className="py-3 leading-[9.6px] md:px-14 px-6 8px md:text-[12px] font-normal border-t  border-table_border_blue hidden md:table-cell">Bounty Points</th>
            <th className="py-3 leading-[9.6px] md:px-14 px-6 8px md:text-[12px] font-normal border-t  border-table_border_blue">Rewards</th>
            <th className="py-3 leading-[9.6px] md:px-14 px-6 8px md:text-[12px] font-normal border-t border-r border-table_border_blue">Total Points</th>
          </tr>
        </thead>
        <tbody className='border border-table_border_blue'>
          {data.map((row, index) => (
            <tr key={index} className="text-center 10px md:text-[14px] font-medium border-t border-table_border_blue">
              <td className="py-3 md:px-14 px-6 font-normal border-l border-table_border_blue">{`#${row.rank}`}</td>
              <td className="py-3 md:px-14 px-6 flex items-center justify-center border-l border-table_border_blue">
                <img
                  src={board_profile}
                  alt="Profile"
                  className="w-[27px] rounded-full mr-2"
                />
                {row.name}
              </td>
              <td className="py-3 md:px-14 px-6 border-l border-table_border_blue hidden md:table-cell">{row.wplPoints}</td>
              <td className="py-3 md:px-14 px-6 border-l border-table_border_blue hidden md:table-cell">{row.bountyPoints}</td>
              <td className="py-3 md:px-14 px-6 border-l border-table_border_blue" >{row.rewards}</td>
              <td className="py-3 md:px-14 px-6 border-l border-r border-table_border_blue">{row.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
