import React from 'react'
import {star} from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-1 flex-col justify-center items-center'>
        <img src={imgURL} width={120} height={120} className='rounded-full object-contain'/>
         <p className='font-montserrat text-center info-text max-w-lg info-text m-auto mt-8'>{feedback}</p>
         <div className='mt-4 flex justify-start gap-2'>
            <img src={star} alt='rating' width={24} height={24} />
            <p className=' font-montserrat text-xl leding normal text-slate-gray'>({rating})</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-bold font-palanquin'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard