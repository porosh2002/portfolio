
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


 
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination
} from 'swiper/core';
import ONE from "../SLIDER/ONE";


// install Swiper modules
SwiperCore.use([Autoplay,Pagination]);


export default function HERO() {
  
  
  
  return (
    <div className='h-[700px]'>
    <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} autoplay={true} pagination={{
  "clickable": true
}} className="mySwiper">

  <SwiperSlide>
<ONE />
  </SwiperSlide>


  {/* <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide> */}
  </Swiper>
    </div>
  )
}