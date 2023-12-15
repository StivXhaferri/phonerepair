import React from 'react'

const Services = () => {
  return (
    <div className='w-full px-[10%] py-10'>
        <h2 className=' text-2xl bg-[rgb(185,255,102)] inline-block'>SERVICES</h2>
        <br />
        <p className='text-[gray] w-[50%] sm:w-full pt-5'>
        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>

        <div className="cards w-full flex gap-10 sm:flex-col justify-between mt-10">
            <div className='w-[50%] sm:w-full'>
                <div className="card1 flex-grow sm:flex-col w-full mx-auto bg-[#B9FF66] border-2 border-black rounded-3xl p-16 flex items-center">
                    <div className='w-[50%] sm:w-full'>
                        <h2 className='text-black text-3xl bg-white inline-block font-semibold'>
                        Pay-per-click
                        <br/>
                        Advertising
                        </h2>
                        <br/>
                        <div className='w-full flex  sm:hidden  gap-5 pt-[15%] items-center'>
                            <img src="/arrow1.png" alt="" />
                            <p className='text-2xl'>Learn more</p>
                        </div>
                    </div>
                    <div className='w-[50%] sm:w-full text-center flex justify-center p-3'>
                        <img src="/service1.svg" className='w-[70%]'  alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[50%]  sm:w-full '>
                <div className="card1 flex-grow sm:flex-col w-full mx-auto bg-[black] border-2 border-black rounded-3xl p-12 flex items-center">
                    <div className='w-[50%] sm:w-full'>
                        <h2 className='text-black text-3xl bg-[#B9FF66] inline-block font-semibold'>
                        Pay-per-click
                        <br/>
                        Advertising
                        </h2>
                        <br/>
                        <div className='w-full flex sm:hidden gap-5 pt-[15%] items-center'>
                            <img src="/arrow2.png" alt="" />
                            <p className='text-2xl text-white'>Learn more</p>
                        </div>
                    </div>
                    <div className='w-[50%] text-center flex sm:w-full justify-center p-3'>
                        <img src="/service2.svg" className='w-[70%]'  alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services