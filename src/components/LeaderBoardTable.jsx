const LeaderboardTable = ({data, pos}) => {

  const headerColumns = Object?.keys(data[0]);
  
  return (
    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className={`flex items-center ${pos ? pos : 'justify-center'}`}>
      <table className="lg:w-[1187px] w-full min-w-[410px] h-[259px] bg-[#0F1971] text-white leading-[24px]">
        <thead>
          <tr className='bg-[#0F1C79] text-[#CCCCF8]'>
            {headerColumns?.map((key, index) => {
                if(key == 'Rank') {
                  return <th className="py-3 leading-[12px] md:px-6 10px md:text-[12px] font-normal border-t border-l border-table_border_blue">
                    <span className="hidden md:inline">{key}</span>
                    <span className="md:hidden">#</span>  
                  </th>
                } else {
                  return <th className="py-4 leading-[9.6px] text-[8px] lg:px-1 px-6 md:text-[12px] font-normal border-t  border-table_border_blue font-inter">{key}</th>
                }
            })}
          </tr>
        </thead>
        <tbody className='border border-table_border_blue w-full'>
            {data?.map((row, index) => (
              <tr key={index} className="text-center text-[10px] md:text-[14px] font-medium border-t border-table_border_blue">
                {headerColumns.map((key, cellIndex) => (
                  <td key={cellIndex} className="h-[56px] border-l border-table_border_blue font-inter">
                    {key === 'Rank' ? `#${row[key]}` : row[key]}
                  </td>
                ))}
                {/* <td className="h-[56px] w-[60px] md:w-[100px] lg:w-[157px] font-normal border-l border-table_border_blue">{`#${row}`}</td>
                <td className="h-[56px] w-[120px] md:w-[200px] lg:w-[425px] flex items-center justify-center border-l border-table_border_blue font-inter ">
                  {row.discord_id}
                </td>
                <td className="h-[56px] w-[110px] md:w-[180px] lg:w-[302px] border-l border-table_border_blue font-inter">{row.tier || row.cumulative_points}</td>
                <td className="h-[56px] w-[110px] md:w-[180px] lg:w-[302px] border-l border-table_border_blue font-inter">{row.points}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
