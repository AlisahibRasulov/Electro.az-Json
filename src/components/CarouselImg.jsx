// // import React from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { Carousel } from 'antd';

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// // const contentStyle = {
// //   marginTop: "20px",
// //   height: '400px',
// //   color: '#fff',
// //   lineHeight: '160px',
// //   textAlign: 'center',
// //   background: '#364d79',
// // };
// // const imageStyle = {
// //     width: "100%",
// //     height: "100%",
// //     // objectFit:"cover"
// // }
 
// const CarouselImg = () => {
// //   const onChange = (currentSlide) => {
// //     console.log(currentSlide);
// //   };
// const [cardCarousel, setCardCarousel] = useState([]);

// useEffect(() => {
//   axios(`http://35.235.116.163:9093/api/slider/all`)
//     .then((res) => {
//       console.log(res.data);
//       setCardCarousel(res.data); // Wrap the response data in an array
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// },[]);


//   return (
//   //   <div className="container">
//   // <Carousel autoplay>
  
//   //   <div className="carousel-item">
//   //   <div className='carousel-content'>
//   //   {cardCarousel.map((item) => (
//   //     <div className='.carousel-box' key={item.id}>
//   //    <img className='carousel-image' src={item.imageUrl} alt=""/> 
//   //     </div>
   
//   //   ))}
   
//   //     {/* <h3 className='carousel-text'>
//   //       Kampaniyalar
//   //     </h3> */}
//   //   </div>
//   //   </div>
    
//   //   {/* <div className='carosuel-content' style={contentStyle}>
//   //   <img className='carousel-image' src={Img2} alt="" style={imageStyle}/>
//   //     <h3 className='carousel-text'>
//   //       Kampaniyalar
//   //     </h3>
//   //   </div> */}
//   //   {/* <div>
//   //     <h3 style={contentStyle}>
//   //     <img src={Img1} alt="" style={imageStyle}/>
//   //     </h3>
//   //   </div> */}
//   //   {/* <div>
//   //     <h3 style={contentStyle}>3</h3>
//   //   </div>
//   //   <div>
//   //     <h3 style={contentStyle}>4</h3>
//   //   </div> */}
//   // </Carousel>
//   //   </div>


//   <div className="carousel-item">
//   <div className="container">
//       <div className='carousel-content'>
//         <Carousel  autoplay>
//           {cardCarousel.map((item) => (
//             <div className='carousel-box' key={item.id}>
//               <img className='carousel-image' src={item.imageUrl} alt="" />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//   </div>
//     </div>
    
//   );
// };
// export default CarouselImg;



// // import React from 'react'
// import React, {useRef, useState, useEffect } from 'react';
// import axios from 'axios';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// // import required modules
// import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';


// const CarouselImg = () => {

//   const [cardCarousel, setCardCarousel] = useState([]);

// useEffect(() => {
//   axios(`http://35.235.116.163:9093/api/slider/all`)
//     .then((res) => {
//       console.log(res.data);
//       setCardCarousel(res.data); // Wrap the response data in an array
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// },[]);
//   return (
//     <div className="carousel-item" >
//       {/* <div className="container"> */}
//         {/* <div className="carousel-content"> */}
//         <Swiper
//           loop = {true}
//           spaceBetween={30}
//           effect={'fade'}
//           // navigation={true}
//           // pagination={{
//           //   clickable: true,
//           // }}
//            autoplay={{
//           delay:5000,
//           disableOnInteraction:false,
//         } }
//           modules={[EffectFade, Navigation, Pagination, Autoplay]}
//           className="mySwiper"
//         >

// {cardCarousel.map((item) => (
//     <SwiperSlide>
//      <img className='carousel-image' src={item.imageUrl} alt="" />
//   </SwiperSlide>
// ))}
        
//           {/* <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//           </SwiperSlide> */}
//         </Swiper>
//         {/* </div> */}
      
//       {/* </div> */}
      
//         </div>
//     );
// }

// export default CarouselImg



import React, { useState, useEffect } from 'react';
// import './CarouselImg.scss'; // CSS dosyanızı buraya dahil edin

const images = [
  "../images/carousel/1.png",
  "../images/carousel/2.png",
  "../images/carousel/50_aze_1__1.png"
];

const CarouselImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 saniyede bir resim değiştirir

    return () => clearInterval(interval); // Temizlik işlemi
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--prev" onClick={goToPrevious}>{"<"}</button>
      
      <div className="carousel__slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      
      <button className="carousel__button carousel__button--next" onClick={goToNext}>{">"}</button>
    </div>
  );
};

export default CarouselImg;
