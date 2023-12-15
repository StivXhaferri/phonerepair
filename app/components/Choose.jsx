import React from 'react'

const Choose = () => {
  return (
    <>
     <div className='w-full px-[10%] text-end sm:text-center'>
        <h2 className='text-2xl bg-[#B9FF66]    inline-block'>WHY CHOOSE US?</h2>
        
    </div>
    <div className="why bg-[#D9D9D9]  sm:flex-col flex gap-5 mt-[2%] px-[10%] py-12 w-full">
            <div className='w-[33%] sm:w-full  text-center flex-col'>
                <img src="/why1.svg" className='w-[40%] mx-auto' alt="" />
                <br/>
                <h2 className='text-2xl bg-[#B9FF66] inline-block'>SERVICES</h2>
                <br/>
                <p className='text-black w-[85%] mx-auto mt-[5%]'>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                </p>
            </div>
            <div className='w-[33%]  sm:w-full text-center flex-col'>
                <img src="/why2.svg" className='w-[40%] mx-auto' alt="" />
                <br/>
                <h2 className='text-2xl bg-[#B9FF66] inline-block'>SERVICES</h2>
                <br/>
                <p className='text-black w-[85%] mx-auto mt-[5%]'>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                </p>
            </div>
            <div className='w-[33%]  sm:w-full text-center flex-col'>
                <img src="/why3.svg" className='w-[40%] pt-5 mx-auto' alt="" />
                <br/>
                <h2 className='text-2xl bg-[#B9FF66] inline-block'>SERVICES</h2>
                <br/>
                <p className='text-black w-[85%] mx-auto mt-[5%]'>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                </p>
            </div>
        </div>
    </>
   
  )
}

export default Choose