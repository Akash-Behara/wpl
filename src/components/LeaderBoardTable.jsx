

const LeaderboardTable = ({data}) => {
  
  return (
    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className="flex items-center justify-center">
      <table className="lg:w-[1187px] w-full min-w-[410px] h-[259px] bg-[#0F1971] text-white leading-[24px]">
        <thead>
          <tr className='bg-[#0F1C79] text-[#CCCCF8]'>
            <th className="py-3 leading-[12px] md:px-6 10px md:text-[12px] font-normal border-t border-l border-table_border_blue">
              <span className="hidden md:inline">Rank</span>
              <span className="md:hidden">#</span>  
            </th>
            <th className="py-4 leading-[9.6px] text-[8px] lg:px-1 px-6 md:text-[12px] font-normal border-t  border-table_border_blue font-inter">Name</th>
            <th className="py-4 leading-[9.6px] text-[8px] lg:px-1 px-6 md:text-[12px] font-normal border-t  border-table_border_blue font-inter">Role</th>
            <th className="py-4 leading-[9.6px] text-[8px] lg:px-1 px-6 md:text-[12px] font-normal border-t  border-table_border_blue font-inter">Total Points</th>
          </tr>
        </thead>
        <tbody className='border border-table_border_blue w-full'>
            {data?.map((row, index) => (
              <tr key={index} className="text-center text-[10px] md:text-[14px] font-medium border-t border-table_border_blue">
                <td className="py-4 px-2 font-normal border-l border-table_border_blue">{`#${row.rank}`}</td>
                <td className="py-4 md:px-10 px-1 flex items-center justify-center border-l border-table_border_blue font-inter ">
                  {row.discord_id}
                </td>
                <td className="py-4 lg:px-4 px-6 border-l border-table_border_blue font-inter">{row.tier}</td>
                <td className="py-4 lg:px-12 px-6 border-l border-table_border_blue font-inter">{row.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
