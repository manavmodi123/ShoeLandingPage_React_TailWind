import React from 'react'
import Button from '../components/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
      
        <h1
          className="mt-10 text-4xl
        font-bold font-palanquin"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          We Provide You <span className="text-coral-red  inline-block">Super</span>
          </span>
          <br />
          <span className="text-coral-red  inline-block"> Quality </span> Shoes
        </h1>
        <p className="font-montserrat mt-6 mb-14 text-slate-gray leading-8 sm:max-w-sm text-[18px] info-text">
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="font-montserrat mt-6 mb-14 text-slate-gray sm:max-w-sm text-[18px]">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-10'>
        <Button label="View Details" />
        </div>


      </div>
      <div className='flrx-1 flex justify-center items-center'>
        <img src={shoe8} width={570} height={520} className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality