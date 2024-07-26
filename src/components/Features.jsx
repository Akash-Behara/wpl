import start_earning_box from '../assets/subtract/start_earn_subtract.png'

import card_icon_1 from '../assets/svg/feature_icon_1.svg'
import card_icon_2 from '../assets/svg/feature_icon_2.svg'
import card_icon_3 from '../assets/svg/feature_icon_3.svg'
import card_icon_4 from '../assets/svg/feature_icon_4.svg'

import card_box from '../assets/subtract/wpl_feature_box.png'
import FancyButton from './FancyButton'

const Features = () => {
  return (
    <div className='my-20 md:mx-[130px] flex flex-col justify-center text-center lg:flex-row lg:text-start'>
		{/* Group 1 */}
        <div className='text-white'>
			{/* Title */}
			<p className='font-gridular text-[48px] text-[#FAF1B1] uppercase'>Wpl Earn</p>

			{/* Description */}
			<p className='text-[20px]'>Wolf pack League is a Mission program designed for special starkware wolf pack</p>

			{/* Earning button */}

			<div className='mt-5'>
				<FancyButton 
					src_img={start_earning_box}
					className='font-gridular text-white text-[20px]'
					btn_txt='Redacted'
					alt_txt='wpl_earn_btn'
				/>
			</div>
		</div>

		{/* Group 2 */}
		<div className="text-white flex flex-col items-center justify-center text-start">

			{/* card 1 */}
			<div className='relative my-4 w-[330px] lg:h-[187px] h-[180px]'>
				<img className='w-full' src={card_box} alt="" />
				<div className='absolute top-6 px-6'>
					<img src={card_icon_1} alt="card_icon"/>
					<p className='text-[20px] py-2'>Earn Onchain</p>
					<p className='font-gridular text-white text-[16px] opacity-80'>Devs get to complete milestones and earn rewards!</p>
				</div>
			</div>

			{/* card 2 */}
			<div className='relative my-4 w-[330px] lg:h-[187px] h-[180px]'>
				<img src={card_box} alt="" />
				<div className='absolute top-6 px-6'>
					<img src={card_icon_2} alt="card_icon"/>
					<p className='text-[20px] py-2'>Earn Onchain</p>
					<p className='font-gridular text-white text-[16px] opacity-80'>Devs get to complete milestones and earn rewards!</p>
				</div>
			</div>

			{/* card 3 */}
			<div className='relative my-4 w-[330px] lg:h-[187px] h-[180px]'>
				<img src={card_box} alt="" />
				<div className='absolute top-6 px-6'>
					<img src={card_icon_3} alt="card_icon"/>
					<p className='text-[20px] py-2'>Earn Onchain</p>
					<p className='font-gridular text-white text-[16px] opacity-80'>Devs get to complete milestones and earn rewards!</p>
				</div>
			</div>

			{/* card 4 */}
			<div className='relative my-4 w-[330px] lg:h-[187px] h-[180px]'>
				<img src={card_box} alt="" />
				<div className='absolute top-6 px-6'>
					<img src={card_icon_4} alt="card_icon"/>
					<p className='text-[20px] py-2'>Earn Onchain</p>
					<p className='font-gridular text-white text-[16px] opacity-80'>Devs get to complete milestones and earn rewards!</p>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Features;