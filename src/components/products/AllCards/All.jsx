import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Cards from "./Cards";


// ? Swipper slide cart
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import allProductData from '../../../Json/product-all';

const All = () => {
  const [productData, setProductData] = useState([]);
  useEffect(()=>{
    setProductData(allProductData)
    },[])
  return (
    
    <div className='new-card'>
         <div className="container-fluid">
      <div className="new-card_content">
        <h1>Yeni Məhsullar</h1>
      <Swiper
         slidesPerView={1}
         spaceBetween={10}
         scrollbar={{
           dragSize: 700,
           draggable: true,
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
             spaceBetween: 10,
           },
 
           1200: {
             slidesPerView: 5,
             spaceBetween: 10,
           },
 
         }}
         modules={[Scrollbar]}
         className="mySwiper"
      >
      
        {productData.map((item)=>(
        <SwiperSlide key={item.id}>
          <Cards data={item}/>
        </SwiperSlide>
      ))}
        </Swiper>
    </div>
    </div>
    </div>
  )
}

export default All