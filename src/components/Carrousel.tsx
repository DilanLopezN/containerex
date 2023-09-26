'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import example1 from '../assets/exampleimg.png'
import example2 from '../assets/exampleimg1.png'
import example3 from '../assets/exampleimg2.png'
export function Carrousel() {
  return (
    <div className='mr-4 ml-4 w-[420px] h-[520px] flex items-center z-0 '> 
 <Swiper
    spaceBetween={2}
    slidesPerView={1}
    loop={true}
    pagination={{ clickable: true }}
    className='z-10'
    
  >
    <SwiperSlide><Image alt="" src={example1}/></SwiperSlide>
    <SwiperSlide><Image alt="" src={example2}/></SwiperSlide>
    <SwiperSlide><Image alt="" src={example3}/></SwiperSlide>

  </Swiper>
    </div>
   
  )
}