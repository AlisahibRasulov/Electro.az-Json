import React from 'react'
import axios from "axios";
// import {NewCardsData} from "../datas/CardsData"
import { useState } from 'react';
import { useEffect } from 'react';
import Button from "./library/Button";

import {CardLikeHeartIcon} from "../svg"
import { CardBasketIcon } from '../svg';

// ? Swipper slide cart
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const NewCards = () => {
  const [productData, setProductData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  useEffect(()=>{

  
    //  axios.request(options).then((response)=>{
    //   // console.log(response.data.result.seller);
    //   setProductData(response.data.result.seller)
    //  }).catch ((error)=>{
    //     console.error(error);
    //   })
  
  
      axios("http://35.184.181.250:9096/api/computer-product/new-product/all").then((res)=>{
        console.log(res.data) 
        setProductData(res.data)
      })
      // fetch("https://dummyjson.com/products/1")
      // .then(response => response.json())
      // .then(response => console.log(response));
  
  
   
    },[refresh])
  return (
    
    <div className='new-card'>
         <div className="container">
      <div className="new-card_content">
      <Swiper
        slidesPerView={1}
        loop = {true}
        spaceBetween={10}
        autoplay={{
          delay:1000,
          disableOnInteraction:false,
        } }
        navigation
        pagination={{
          clickable: true,
        }}
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
        <SwiperSlide className='swiper-slide_card' key={item.id}>
          <div className='small-box'>New</div>
          <div className='like_icon-box'>
            <CardLikeHeartIcon className="like_icon"/>
          </div>
        <img src={item.images[0]?.imagePath} alt="" />
        <div className='card-title'>{item.title}</div>
        <div className='card-price'>{item.price} ₼</div>
    <div className="card-view">
      <Button className='card-btn'><CardBasketIcon className="card-btn_basket"/> <div className='card-btn_text'>Səbətə at</div> </Button>
    </div>
        </SwiperSlide>
     
      ))}
       
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      
        </Swiper>
    </div>
    </div>
    </div>
  )
}

export default NewCards