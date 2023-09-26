// import React, { useState,useEffect } from 'react';

// import React, { Component,useState } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import { useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import Button from '../components/library/Button';
// import { CardBasketIcon,CartCheckout,CardLikeIcon,CardLikeFullIcon} from '../svg';
// import { useDispatch,useSelector } from 'react-redux';
// import { addToBasket } from '../redux/slices/addToBasketSlice';
// import { addToLike,removeLike } from '../redux/slices/addToLikeSlice';


// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/free-mode';
// // import 'swiper/css/navigation';
// // import 'swiper/css/thumbs';


// // import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// // import ProductImages from './ProductImages';


// const DetailCard = ({data}) => {
  

//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
// //   const navigate = useNavigate();

//   const { id } = useParams();



//     const [buttonText, setButtonText] = useState('Səbətə at');
//     const [buttonColor, setButtonColor] = useState('#D10024'); // Buton rengi
//     const [buttonTextColor, setButtonTextColor] = useState('white');
//     const [iconBasket, setIconBasket] = useState(<CardBasketIcon className="card-btn_icon"/>);
//     // const [liked, setLiked] = useState(false);
//     const dispatch=useDispatch();

//     const likedProducts = useSelector((state) => state.like)
//     const isProductLiked = likedProducts.some((product) => product.id === data.id);


//     const handleLikeClick = (productId) => {
  
//       if (isProductLiked) {
//         dispatch(removeLike(productId));
//       } else {
//         dispatch(addToLike(data));
//       }
//     };
    
//     const handleAddToBasket=()=>{
//       if (buttonText === 'Səbətə at'){
//         dispatch(addToBasket(data));
//         // dispatch(addToCard());
//         // const price = parseFloat(data.discounts[0]?.currentPrice || data.price);
//         setButtonText('Səbətdə'); // Metni değiştir
//         setButtonColor('#eee')
//         setButtonTextColor('#666')
//         setIconBasket(<CartCheckout className="card-btn_icon" />); 
//         // navigate("/product-detail/:id");
//         // localStorage.setItem(`basket_product_${data.id}`, JSON.stringify(data));
//         setTimeout(() => {
//         setButtonText('Səbətə at'); // Belirli bir süre sonra metni geri değiştir
//         setButtonColor('#D10024')
//         setButtonTextColor('white')
//         setIconBasket(<CardBasketIcon className="card-btn_icon" />); 
//       }, 1000)
//       }
//     }

    

//     const { discounts,images, title, price,} = data;
//   return (
//     <div className='detail-card'>
//       {/* <div className="container"> */}
//       <div className="detail-card_content">
//         <div className='card-title'>{title}</div>
//         <div className="card-image">
//           {/* <ProductImages/> */}
//           <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide key={id}>
//         <img   src={images[0]?.imagePath} alt="" />
//         </SwiperSlide>
//         <SwiperSlide key={id}>
//         <img   src={images[1]?.imagePath} alt="" />
//         </SwiperSlide>
//         <SwiperSlide key={id}>
//         <img  src={images[2]?.imagePath} alt="" />
//         </SwiperSlide>
//       </Swiper>
     
            
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide >
//         <div className="image-box">
//           <img  src={images[0]?.imagePath} alt="" style={{ width: '50px', height: '50px' }}/>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="image-box">
//           <img  src={images[1]?.imagePath} alt="" style={{ width: '50px', height: '50px' }}/>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="image-box">
//           <img  src={images[2]?.imagePath} alt="" style={{ width: '50px', height: '50px' }}/>
//           </div>
//         </SwiperSlide>
//       </Swiper>
       
//         {/* <img  src={images[0]?.imagePath} alt="" />
//         <img  src={images[1]?.imagePath} alt="" />
//         <img  src={images[2]?.imagePath} alt="" /> */}
//          {/* <Carousel>
//                 <div>
//                   <img  src={images[0]?.imagePath} alt="" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                  <img  src={images[1]?.imagePath} alt="" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                   <img  src={images[2]?.imagePath} alt="" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel> */}




//         </div>
//         <div className="card-view"></div>
//       </div>
//       {/* </div> */}
      
      
      
    
//   </div>
//   )
// }

// export default DetailCard


// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// const DetailCard = ({ data }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//    const { discounts,images, title, price,} = data;

//   // ... Diğer kodlar ...

//   return (
//     <div className='detail-card'>
//       <div className="detail-card_content">
//         <div className='card-title'>{title}</div>
//         <div className="card-image">
//           <Swiper
//             style={{
//               '--swiper-navigation-color': '#fff',
//               '--swiper-pagination-color': '#fff',
//             }}
//             spaceBetween={10}
//             navigation={true}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             {images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <img src={image.imagePath} alt="" />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <Swiper
//             onSwiper={setThumbsSwiper}
//             spaceBetween={10}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper"
//           >
//             {images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <div className="image-box">
//                   <img
//                     src={image.imagePath}
//                     alt=""
//                     style={{ width: '50px', height: '50px' }}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//         <div className="card-view"></div>
//       </div>
//     </div>
//   );
// };

// export default DetailCard;


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useDispatch,useSelector } from 'react-redux';
import { addToBasket } from '../redux/slices/addToBasketSlice';
import { addToLike,removeLike } from '../redux/slices/addToLikeSlice';
import { CardBasketIcon,CartCheckout,CardLikeIcon,CardLikeFullIcon } from '../svg';
import Button from './library/Button';
const DetailCard = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   const { id } = useParams();



    const [buttonText, setButtonText] = useState('Səbətə at');
    const [buttonColor, setButtonColor] = useState('#D10024'); // Buton rengi
    const [buttonTextColor, setButtonTextColor] = useState('white');
    const [iconBasket, setIconBasket] = useState(<CardBasketIcon className="card-btn_icon"/>);
    // const [liked, setLiked] = useState(false);
    const dispatch=useDispatch();

    const likedProducts = useSelector((state) => state.like)
    const isProductLiked = likedProducts.some((product) => product.id === data.id);


    const handleLikeClick = (productId) => {
  
      if (isProductLiked) {
        dispatch(removeLike(productId));
      } else {
        dispatch(addToLike(data));
      }
    };
    
    const handleAddToBasket=()=>{
      if (buttonText === 'Səbətə at'){
        dispatch(addToBasket(data));
        // dispatch(addToCard());
        // const price = parseFloat(data.discounts[0]?.currentPrice || data.price);
        setButtonText('Səbətdə'); // Metni değiştir
        setButtonColor('#eee')
        setButtonTextColor('#666')
        setIconBasket(<CartCheckout className="card-btn_icon" />); 
        // navigate("/product-detail/:id");
        // localStorage.setItem(`basket_product_${data.id}`, JSON.stringify(data));
        setTimeout(() => {
        setButtonText('Səbətə at'); // Belirli bir süre sonra metni geri değiştir
        setButtonColor('#D10024')
        setButtonTextColor('white')
        setIconBasket(<CardBasketIcon className="card-btn_icon" />); 
      }, 1000)
      }
    }


  const { discounts, images, title, price } = data;

  // ... Other code ...

  return (
    <div className='detail-card'>
      <div className="detail-card_content">
        <div className="detail-card_top">
        <div className='card-title'>{title}</div>
        </div>
       <div className="detail-card_bottom">
       <div className="card-image">
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.imagePath} alt=""  />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                {/* <div className="image-box" > */}
                  <img
                    src={image.imagePath}
                    alt=""
                  />
                {/* </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="card-view">
        <button className='like-btn' onClick={()=>handleLikeClick(data.id)}>
      {isProductLiked ? <CardLikeFullIcon /> : <CardLikeIcon />}
      </button>
      <Button className='card-btn' onClick={handleAddToBasket} style={{ backgroundColor: buttonColor,color:buttonTextColor }}>{iconBasket} <div className='card-btn_text'>{buttonText}</div> </Button>
        </div>
       </div>
       
      </div>
    </div>
  );
};

export default DetailCard;
