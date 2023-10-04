import React from 'react'
import axios from "axios";
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
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import required modules
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const New = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);
  useEffect(()=>{
    axios("http://34.125.216.115:9095/api/product/new-product/all").then((res)=>{
        console.log(res.data) 
        setProductData(res.data)
      })
    },[])
  return (
    
    <div className='new-card'>
         <div className="container-fluid">
      <div className="new-card_content">
        <h1>Yeni Məhsullar</h1>
      <Swiper
        slidesPerView={5.9}
        // loop = {true}
        spaceBetween={13}
        // // autoplay={{
        // //   delay:1000,
        // //   disableOnInteraction:false,
        // // } }
        // navigation
        // pagination={{
        //   clickable: true,
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        // }}
        // breakpoints={{
        //   '@0.00': {
        //     slidesPerView: 1,
        //     // spaceBetween: 10,
        //   },
        //   '@0.75': {
        //     slidesPerView: 2,
        //     // spaceBetween: 20,
        //   },
        //   '@1.00': {
        //     slidesPerView: 3,
        //     // spaceBetween: 40,
        //   },
        //   '@1.50': {
        //     slidesPerView: 4,
        //     // spaceBetween: 50,
        //   },
        // }}
        // modules={[Navigation, Autoplay]}
        className="swiper"
      >
      
        {productData.map((item)=>(
        <SwiperSlide>
           <Cards key={item.id} data={item}/>
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