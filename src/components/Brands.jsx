import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

// import { imageData } from '../pages/Brands/Brand'

import Brand1 from "../img/brands/Acer.png";
import Brand2 from "../img/brands/Asus.png";
import Brand3 from "../img/brands/Apple.png";
import Brand4 from "../img/brands/Canon.png";
import Brand5 from "../img/brands/Dell.png";
import Brand6 from "../img/brands/Hp.png";
import Brand7 from "../img/brands/Huawei.png";
import Brand8 from "../img/brands/Lenovo.png";
import Brand9 from "../img/brands/Nikon.png";
import Brand10 from "../img/brands/Samsung.png";
import Brand11 from "../img/brands/Sony.png";
import Brand12 from "../img/brands/Xiaomi.png";



const Brands = () => {
  return (
    <div className='brands'>
       <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // loop={true}
        pagination={{
            clickable: false,
          }}
        // scrollbar={{
        //     hide: true,
        //     dragSize: 0,
        //     draggable: false,
        //   }}
        breakpoints={{
            320: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
             
              560: {
                slidesPerView: 4.3,
                spaceBetween: 50,
              },
    
              640: {
                slidesPerView: 5.2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 9,
                spaceBetween: 50,
              },
              991:{
                slidesPerView: 9.5,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 9.5,
                spaceBetween: 50,
              },
    
              1200: {
                slidesPerView: 9.8,
                spaceBetween: 70,
              },
              
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
              
            <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/acer">
                    <img className='brand-image' src={Brand1} alt="" />
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/asus">
                    <img className='brand-image' src={Brand2} alt="" />
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/apple">
                    <img className='brand-image' src={Brand3} alt="" />
                </Link>
            </div>
        </SwiperSlide>

        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/canon">
                    <img className='brand-image' src={Brand4} alt="" />
                </Link>
            </div>
        </SwiperSlide>

        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/dell">
                    <img className='brand-image' src={Brand5} alt="" />
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/hp">
                    <img className='brand-image' src={Brand6} alt="" />
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/huawei">
                    <img className='brand-image' src={Brand7} alt="" />
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/lenovo">
                    <img className='brand-image' src={Brand8} alt="" />
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/nikon">
                    <img className='brand-image' src={Brand9} alt="" />
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/samsung">
                    <img className='brand-image' src={Brand10} alt="" />
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/sony">
                    <img className='brand-image' src={Brand11} alt="" />
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide >
              <div className="brand-box" >   
                <Link className='brand-link' to="/xiaomi">
                    <img className='brand-image' src={Brand12} alt="" />
                </Link>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}

export default Brands

