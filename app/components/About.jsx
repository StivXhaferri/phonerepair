import react from 'react'


const About = () => {
    return(
        <div className='py-12 px-[10%]'>
           <h2 className='text-2xl bg-[rgb(185,255,102)] inline-block'>WHO ARE WE?</h2> 
           <div className='w-full flex mt-[5%] sm:flex-col '>
                <div className='w-[50%] sm:w-full flex text-start justify-start'>
                    <img src="/about.svg" className='pt-12 w-[80%]  mx-auto' alt="" />
                </div>
                <div className='w-[50%] sm:w-full pt-[10%]'>
                    <h2  className='text-6xl font-bold bg-[#B9FF66] inline-block'>
                        Services
                    </h2>
                    <br/>
                    <br/>
                    <p className='text-[gray] w-[90%] sm:w-full text-xl'>
                    For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                    </p>
                </div>
           </div>
        </div>
    )
}


export default About