const FancyButton = ({src_img, className, btn_txt, alt_txt='Image alt text', isArrow=false}) => {
  return (
    <button className='relative'>
        <img src={src_img} alt={alt_txt} />
        <div className="absolute inset-0 top-1/4 uppercase">
            <p className={className}>
              {isArrow 
                ? `${btn_txt} → ` 
                : btn_txt}
            </p>
        </div>
    </button>
  )
}

export default FancyButton