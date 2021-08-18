
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


 
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,EffectFade
} from 'swiper/core';
import ONE from "../SLIDER/ONE";
import TWO from "../SLIDER/TWO"
import THREE from "../SLIDER/THREE"
import FOUR from "../SLIDER/FOUR"


// install Swiper modules
SwiperCore.use([Autoplay,Pagination,EffectFade]);


export default function HERO() {
  
  
  
  return (
    <div className='h-[700px]'>
    <Swiper direction={'vertical'} effect='fade' slidesPerView={1} spaceBetween={30} autoplay={true} pagination={{
  "clickable": true
}} className="mySwiper">

  <SwiperSlide>
<ONE />
  </SwiperSlide>

  <SwiperSlide>
<TWO />
    
  </SwiperSlide>
  <SwiperSlide>
    <THREE />
  </SwiperSlide>
  <SwiperSlide>
    <FOUR/>
  </SwiperSlide>
  </Swiper>
    </div>
  )
}