import React from 'react'

const Button = ({label , imgUrl ,backgroundColor , textColor , borderColor , fullWidth}) => {
  console.log(borderColor);
  return (
    <button className={`flex justify-center items-center px-7 py-4 gap-2 rounded-full font-montserrat ${fullWidth && 'w-full'}
    ${backgroundColor
    ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"}`}>
         {label}

        {imgUrl && <img src={imgUrl} className='ml-2 rounded-full w-5 h-5'/> }
    </button>
  )
}

export default Button
