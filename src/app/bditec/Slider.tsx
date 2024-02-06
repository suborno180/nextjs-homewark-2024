'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function SliderBDITEC() {
  return (
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
      className="mySwiper"
    >
      <SwiperSlide className="h-full min-h-[350px] flex items-center justify-center">
        <div className="w-full h-full overflow-hidden">
          <Image
            className="object-cover"
            layout="fill"
            src="/slide-1170x400.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full min-h-[350px] flex items-center justify-center">
        <div className="w-full h-full overflow-hidden">
          <Image
            className="object-cover"
            layout="fill"
            src="/slide2-1170x400.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full min-h-[350px] flex items-center justify-center">
        <div className="w-full h-full overflow-hidden">
          <Image
            className="object-cover"
            layout="fill"
            src="/slide11-1170x400.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
