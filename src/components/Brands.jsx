// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { imageData } from '../pages/Brands/Brand'



const Brands = () => {
  return (
    <div className='brands'>
       <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="brand-box">    
                {imageData.map((brand)=>(
                    <Link className='brand-link' key={brand.id}>
                   <img className='brand-image' src={brand.image} alt="" />
                   </Link>
                ))} 
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="brand-box">
                <Link></Link>
            </div>
        </SwiperSlide> */}
      
      </Swiper>
    </>
    </div>
  )
}

export default Brands

