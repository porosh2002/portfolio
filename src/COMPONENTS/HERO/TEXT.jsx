
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

export default function App() {
  
  
  
  return (
    <>
    <Swiper direction={'vertical'} slidesPerView={1} className="mySwiper">
  <SwiperSlide>
  <div className='w-[700px] leading-relaxed'>
    <p className='py-8 text-purple-500 text-4xl tracking-wider leading-relaxed	'>YOUR PARTNER FOR DIGITAL SOLUTION</p>
    <p className='text-[13px] tracking-wider text-gray-800 font-semibold'>WE PROVIDE SOFTWARE DEVELOPMENT, WEBSITE OR WEB APPLICATION DESIGN AND DEVELOPMENT, MOBILE APP DESIGN AND DEVELOPMENT, MOCKUP DESIGN, DESKTOP APPLICATION SOLUTION</p>
  </div>
  </SwiperSlide>

  </Swiper>
    </>
  )
}