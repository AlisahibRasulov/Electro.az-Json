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
            320: {
                slidesPerView: 2.2,
                spaceBetween: 10,
              },
             
              560: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
    
              640: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
    
              1200: {
                slidesPerView: 10,
                spaceBetween: 20,
              },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                {imageData.map((brand)=>(
                    <SwiperSlide >
            <div className="brand-box" >   
                    <Link className='brand-link'>
                   <img className='brand-image' src={brand.image} alt="" />
                   </Link>
            </div>
        </SwiperSlide>
                ))} 
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

