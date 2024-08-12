import { useEffect, useState } from 'react';
import board_profile from '../assets/svg/board_profile.svg'
import NumberTicker from './magicui/number-ticker';
import { AnimatedList } from './ui/animated-list';

const dummy = [
  { rank: 1, name: 'Tiamiyu Absulsamad', wplPoints: 1000, bountyPoints: 1500, role:"Redwolf", rewards: '$2500', totalPoints: 2500 },
  { rank: 2, name: 'Tiamiyu Absulsamad', wplPoints: 1000, bountyPoints: 1500, role:"Whitewolf", rewards: '$2500', totalPoints: 6738 },
  { rank: 3, name: 'Tiamiyu Absulsamad', wplPoints: 1000, bountyPoints: 1500, role:"Blackwolf", rewards: '$2500', totalPoints: 9000 },
  { rank: 4, name: 'Tiamiyu Absulsamad', wplPoints: 1000, bountyPoints: 1500, role:"Firewolf", rewards: '$2500', totalPoints: 2500 },
  { rank: 5, name: 'Tiamiyu Absulsamad', wplPoints: 1000, bountyPoints: 1500, role:"Dierwolf", rewards: '$2500', totalPoints: 230 },
];

const LeaderboardTable = () => {

  const [data, setData] = useState(dummy);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        return prevData.map((row) => {
          return {
            ...row,
            totalPoints: row.totalPoints + Math.floor(Math.random() * 100),
          };
      })})

    }, 5000);

    clearInterval(interval);
    return () => clearInterval(interval);
  }, []);


  return (
    <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className="flex items-center justify-center mx-5">
      <table className="lg:w-[1187px] w-full min-w-[410px] h-[259px] bg-[#0F1971] text-white leading-[24px]">
        <thead>
          <tr className='bg-[#0F1C79] text-[#CCCCF8]'>
            <th className="py-3 leading-[12px] md:px-14 px-6 10px md:text-[12px] font-normal border-t border-l border-table_border_blue">
              <span className="hidden md:inline">Rank</span>
              <span className="md:hidden">#</span>  
            </th>
            <th className="py-4 leading-[9.6px] text-[8px] lg:px-14 px-6 md:text-[12px] font-normal border-t  border-table_border_blue font-inter">Name</th>
            <th className="py-4 leading-[9.6px] text-[8px] lg:px-1 px-6 md:text-[12px] font-normal border-t  border-table_border_blue font-inter hidden md:table-cell">WPL Points</th>
            <th className="py-4 leading-[9.6px] text-[8px] lg:px-1 px-6 md:text-[12px] font-normal border-t  border-table_border_blue font-inter hidden md:table-cell">Bounty Points</th>
            <th className="py-4 leading-[9.6px] text-[8px] lg:px-14 px-6 md:text-[12px] font-normal border-t  border-table_border_blue font-inter hidden md:table-cell">Role</th>
            <th className="py-4 leading-[9.6px] text-[8px] lg:px-14 px-6 md:text-[12px] font-normal border-t  border-table_border_blue font-inter">Rewards</th>
            <th className="py-4 leading-[9.6px] text-[8px] lg:px-1 px-6 md:text-[12px] font-normal border-t border-r border-table_border_blue font-inter">Total Points</th>
          </tr>
        </thead>
        <tbody className='border border-table_border_blue w-full'>
            {data.map((row, index) => (
              <tr key={index} className="text-center text-[10px] md:text-[14px] font-medium border-t border-table_border_blue">
                <td className="py-4 md:px-14 px-6 font-normal border-l border-table_border_blue">{`#${row.rank}`}</td>
                <td className="py-4 md:px-9 px-1 flex items-center justify-center border-l border-table_border_blue font-inter ">
                  <img
                    src={board_profile}
                    alt="Profile"
                    className="w-[27px] rounded-full mr-1 md:mr-2"
                  />
                  {row.name}
                </td>
                <td className="py-4 lg:px-14 px-6 border-l border-table_border_blue font-inter  hidden md:table-cell">{row.wplPoints}</td>
                <td className="py-4 lg:px-14 px-6 border-l border-table_border_blue font-inter  hidden md:table-cell">{row.bountyPoints}</td>
                <td className="py-4 lg:px-14 px-6 border-l border-table_border_blue font-inter  hidden md:table-cell">{row.role}</td>
                <td className="py-4 lg:px-14 px-6 border-l border-table_border_blue font-inter " >{row.rewards}</td>
                <td className="py-4 lg:px-14 px-6 border-l border-r border-table_border_blue font-inter "><NumberTicker value={row.totalPoints} className='text-white'/></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
