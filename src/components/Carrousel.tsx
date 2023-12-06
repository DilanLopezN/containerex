'use client'
import { carrouselImages } from '@/constants';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
    
    {
      carrouselImages.map((path) => (
        <SwiperSlide> <Image src={path} alt=""  className='h-[420px]' /> </SwiperSlide>
      ) )
    }

   
    

  </Swiper>
    </div>
   
  )
}