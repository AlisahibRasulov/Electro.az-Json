import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
// import Button from "../../library/Button";

// import {CardLikeHeartIcon} from "../../../svg"
// import { CardBasketIcon } from '../../../svg';


// ? Swipper slide cart
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Cards from './Cards';




const Discount = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
 axios("http://34.125.216.115:9095/api/product/discounted/all").then((res)=>{
      console.log(res.data) 
      setProductData(res.data)
    })
  },[])
  return (

<div className="discount-card">
  <div className="container">
    <div className="discount-card_content">
      <h1>Endirimli Məhsullar</h1>
      <Swiper
        slidesPerView={1}
        loop = {true}
        spaceBetween={10}
        // autoplay={{
        //   delay:1000,
        //   disableOnInteraction:false,
        // } }
        navigation
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            // spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            // spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            // spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation, Autoplay]}
        className="swiper"
      >
      
        {productData.map((item)=>(
        <SwiperSlide>
          <Cards key={item.id} data={item}/>
        </SwiperSlide>   
      ))}  
      </Swiper>
    </div>
  </div>
</div>
    
  )
}

export default Discount