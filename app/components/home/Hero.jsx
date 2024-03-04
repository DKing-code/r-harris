import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="hero-bg ">
      <div></div>
      <div className="flex justify-center flex-col items-center h-full text-white">
        <div className='animate__animated animate__bounceIn'>
          <Image src={'/images/lawyerImg.png'} width={1000} height={1000} />
        </div>
        <div className='md:flex gap-5 md:text-lg font-light text-center text-white'>
          <p className='p-0 m-0'>
            <a href="mailto:lawrichardharris@gmail.com" className='text-white'>lawrichardharris@gmail.com</a>
          </p>
          <p className='p-0 m-0'>
            <a href="tel:9177930837" className='text-white'>(917) 793 0837</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero