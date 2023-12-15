
'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper bg-[#191A23] w-full py-12"
      >
       
        <SwiperSlide  className='py-12' >
            <div>
                <div className="bubble">
                    wwqewewq
                </div>

            </div>


            
            
        </SwiperSlide>
        <SwiperSlide  className='py-12' >
            <div className="bubble">
                wwqewewq
            </div>
        </SwiperSlide>
        <SwiperSlide  className='py-12' >
            <div className="bubble">
                wwqewewq
            </div>
        </SwiperSlide>
        <SwiperSlide  className='py-12' >
            <div className="bubble">
                wwqewewq
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
