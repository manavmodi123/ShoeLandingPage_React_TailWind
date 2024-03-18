import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button';
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse  gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
      
      <h1
        className="mt-10 text-4xl
      font-bold font-palanquin"
      >
<span className="text-coral-red  inline-block">Special</span> Offer
      </h1>
      <p className="font-montserrat mt-6 mb-14 text-slate-gray leading-8 text-[18px] info-text">
      Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
      </p>
      <p className="font-montserrat -mt-6 mb-14 text-slate-gray text-[18px]">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
      </p>
      <div className='flex flex-wrap gap-4'>
      <Button label="Shop now" imgUrl={arrowRight} />

      <Button label="Learn More" backgroundColor = "bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
      </div>


    </div>
    </section>
    )
}

export default SpecialOffer