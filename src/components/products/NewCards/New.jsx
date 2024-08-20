import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import Cards from "./Cards";


// ? Swipper slide cart
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import allProductData from '../../../Json/product-all';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import required modules
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const New = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);
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
         // pagination={{
         //   clickable: true,
         // }}
         scrollbar={{
           // hide: true,
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
          {/* <div className='small-box'>New</div>
          <div className='like_icon-box'>
            <CardLikeHeartIcon className="like_icon"/>
          </div>
        <img src={item.images[0]?.imagePath} alt="" />
        <div className='card-title'>{item.title}</div>
        <div className='card-price'>{item.price} ₼</div>
    <div className="card-view">
      <Button className='card-btn'><CardBasketIcon className="card-btn_basket"/> <div className='card-btn_text'>Səbətə at</div> </Button>
    </div> */}
        </SwiperSlide>
     
      ))}
       
    
      
        </Swiper>
    </div>
    </div>
    </div>
  )
}

export default New