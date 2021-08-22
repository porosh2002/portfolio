import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import ONE from '../SLIDER/ONE'

import SwiperCore, {
  Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);

export default function App() {
  return (
    <div className='tracking-wider font-semibold'>
      <Swiper direction={'vertical'} pagination={{
        "clickable": true
      }} className="mySwiper">
        <SwiperSlide><ONE /></SwiperSlide>
      </Swiper>
    </div>
  )
}