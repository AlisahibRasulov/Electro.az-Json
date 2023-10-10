import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
// import Button from "../../library/Button";

// import {CardLikeHeartIcon} from "../../../svg"
// import { CardBasketIcon } from '../../../svg';


// ? Swipper slide cart
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import required modules
// import { Navigation, Autoplay } from 'swiper/modules';
import Cards from './Cards';

// const swiper = new Swiper('.swiper', {
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
// });


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
  <div className="container-fluid">
    <div className="discount-card_content">
      <h1>Endirimli Məhsullar</h1>
 
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


          560: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },

          1200: {
            slidesPerView: 5.8,
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
      <Link className='all-card' to="/discount">daha çox bax</Link>
    </div>
  </div>
</div>
    
  )
}

export default Discount