'use client'
import React , {useState , useEffect} from 'react'

const Navbar = () => {



    const [open , setOpen] = useState(false)



  return (
    <>

    <div className="flex w-full fixed top-0 left-0 right-0 sm:hidden bg-white z-[999999]">
        <div className='w-[50%] py-4'>
            <img src="/logo" alt="" />
        </div>
        <div className='w-[50%] flex gap-4 py-2' >
            
            <a className='py-2'>Services</a>
            <a className='py-2'>Why Choose US</a>
            <a className='py-2'>About US</a>
            <a className='py-2'>Devices</a>
            
            <a className='py-2'>FAQ</a>
            <a  className='border-2 border-black px-10 py-2 rounded-md'>Contact US</a>
            <a className='py-2'>
                <img src="/moon.svg" alt="" />
            </a>
        </div>
    </div>
    <div className='resnav hidden sm:flex flex-col'>
        <div className='w-full flex p-2'>
            <div className='w-[33%] flex items-center'>
                <img src="/open.svg" className='w-[50%] rounded-md shadow-lg' onClick={() => setOpen(true)}  alt="" />
            </div>
            <div className='w-[33%] flex items-center'></div>
            <div className='w-[33%] flex items-center justify-end text-end'>
                <img src="/moon.svg" alt="" />
            </div>

            
        </div>
        <div className="sidebar fixed transition-all 4s ease-in-out bg-black text-white w-full h-screen gap-10 p-3"  style={ open === true ? null  : {marginLeft : '-100vh'}}>
                <div className='w-full text-end flex justify-end'>
                    <img src="/close.svg" className='w-[15%]' onClick={() => setOpen(false)} alt="" />
                </div>
                <div className='py-4'><a href="" className='text-3xl'>Services</a></div>
                <div className='py-4'><a href="" className='text-3xl'>Why Choose US</a></div>
                <div className='py-4'><a href="" className='text-3xl'>About US</a></div>
                <div className='py-4'><a href="" className='text-3xl'>Devices</a></div>
                <div className='py-4'><a href="" className='text-3xl'>Testimonials</a></div>
                <div className='py-4'><a href="" className='text-3xl'>FAQ</a></div>
                <div className='py-4'><a href="" className='text-3xl bg-[#B9FF66] text-black'>Contact US</a></div>
            </div>
    </div>
    </>
  )
}

export default Navbar