import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex px-[10%] sm:flex-col'>
        <div className='w-[50%] sm:w-full'>
            <h1 className='text-6xl font-bolder w-[80%]'>
                Navigating the digital landscape for success
            </h1>
            <p className='text-[gray] pt-5 w-[80%]'>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <br/>
            <br/>
            <a href="" className='bg-[black] text-white px-12 py-4 rounded-lg'>
                <button>START NOW</button>
            </a>
        </div>
        <div className='w-[50%] sm:w-full relative flex text-center justify-center'>
            <img src="/hero.png" className='w-[60%] sm:py-[7%] sm:w-full' alt="" />
        </div>
    </div>
  )
}

export default Hero