const FancyButton = ({src_img, className, btn_txt, alt_txt='Image alt text'}) => {
  return (
    <button className='relative'>
        <img src={src_img} alt={alt_txt} />
        <div className="absolute inset-0 top-1/4 uppercase">
            <p className={className}>{btn_txt}</p>
        </div>
    </button>
  )
}

export default FancyButton