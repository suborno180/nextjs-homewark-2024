'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function SliderBDITEC() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper">
        <SwiperSlide className='h-full min-h-[200px]'>
          <Image className='object-cover' width={1200} height={200} src="/slide-1170x400.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='h-full min-h-[200px]'>
          <Image className='object-cover' width={1200} height={200} src="/slide2-1170x400.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='h-full min-h-[200px]'>
          <Image className='object-cover' width={1200} height={200} src="/slide11-1170x400.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
