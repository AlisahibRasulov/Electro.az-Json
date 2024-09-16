// import React, { useState, useEffect } from 'react';
// import discountData from '../Json/discount';
// // import './SliderCart.scss'; // CSS dosyanızı buraya dahil edin
// const products = [
//     {
//         "id": 3,
//         "title": "Notbuk Acer Aspire 3 A315-59 Slim (NX.K6SER.00P)",
//         "price": 1200,
//         "discounts": [
//           {
//             "id": 2,
//             "currentPrice": 900,
//             "discountAmount": "300₼"
//           }
//         ],
//         "rating": {
//           "id": 2,
//           "rating": "4.5",
//           "count": "332"
//         },
//         "previewImage": "../images/products/Notebook/Product 2/1.png"
//       },
//       {
//         "id": 5,
//         "title": "Notbuk Dell Latitude 5530 210-BDJK_I7",
//         "price": 2899,
//         "discounts": [
//           {
//             "id": 3,
//             "currentPrice": 2400,
//             "discountAmount": "499₼"
//           }
//         ],
//         "rating": {
//           "id": 4,
//           "rating": "4.9",
//           "count": "554"
//         },
//         "previewImage": "../images/products/Notebook/Product 4/1.png"
//       },
//       {
//         "id": 8,
//         "title": "Nikon D3500 + AF-P 18-55 VR Kit",
//         "price": 1200,
//         "discounts": [
//           {
//             "id": 4,
//             "currentPrice": 900,
//             "discountAmount": "300₼"
//           }
//         ],
//         "rating": {
//           "id": 2,
//           "rating": "4.5",
//           "count": "332"
//         },
//         "previewImage": "../images/products/Fotoaparatlar/Product 1/1.png"
//       },
//       {
//         "id": 11,
//         "title": "Canon EOS R8+Lens RF24-50 F4.5-6.3 IS STM (5803C016)",
//         "price": 4900,
//         "discounts": [
//           {
//             "id": 5,
//             "currentPrice": 3900,
//             "discountAmount": "1000₼"
//           }
//         ],
//         "rating": {
//           "id": 5,
//           "rating": "3.9",
//           "count": "329"
//         },
//         "previewImage": "../images/products/Fotoaparatlar/Product 3/1.png"
//       },
//       {
//         "id": 13,
//         "title": "Sony Alpha ILCE-7C",
//         "price": 4799,
//         "discounts": [
//           {
//             "id": 7,
//             "currentPrice": 4099,
//             "discountAmount": "700₼"
//           }
//         ],
//         "rating": {
//           "id": 5,
//           "rating": "3.9",
//           "count": "329"
//         },
//         "previewImage": "../images/products/Fotoaparatlar/Product 6/1.png"
//       },
//       {
//         "id": 19,
//         "title": "Samsung Galaxy S23 (SM-S911B) 8/256 GB Green",
//         "price": 2100,
//         "discounts": [
//           {
//             "id": 10,
//             "currentPrice": 1890,
//             "discountAmount": "210₼"
//           }
//         ],
//         "rating": {
//           "id": 3,
//           "rating": "4.8",
//           "count": "312"
//         },
//         "previewImage": "../images/products/Smartfonlar/Product 2/1.png"
//       },
//       {
//         "id": 25,
//         "title": "Xiaomi Redmi Note 12 8/256 GB Ice Blue",
//         "price": 600,
//         "discounts": [
//           {
//             "id": 11,
//             "currentPrice": 480,
//             "discountAmount": "120₼"
//           }
//         ],
//         "rating": {
//           "id": 3,
//           "rating": "4.8",
//           "count": "312"
//         },
//         "previewImage": "../images/products/Smartfonlar/Product 4/1.png"
//       },
//       {
//         "id": 31,
//         "title": "Noutbuk Apple MacBook Pro 16 MK183RU/A Space Gray",
//         "price": 5699.99,
//         "discounts": [
//           {
//             "id": 13,
//             "currentPrice": 4269.99,
//             "discountAmount": "1430₼"
//           }
//         ],
//         "rating": {
//           "id": 4,
//           "rating": "4.9",
//           "count": "554"
//         },
//         "previewImage": "../images/products/Notebook/Product 7/1.png"
//       },
//       {
//         "id": 32,
//         "title": "Notbuk Apple Macbook Pro 14 MPHH3RU/A Silver",
//         "price": 5399.99,
//         "discounts": [
//           {
//             "id": 14,
//             "currentPrice": 4849.99,
//             "discountAmount": "550₼"
//           }
//         ],
//         "rating": {
//           "id": 3,
//           "rating": "4.8",
//           "count": "312"
//         },
//         "previewImage": "../images/products/Notebook/Product 8/1.png"
//       },
//       {
//         "id": 28,
//         "title": "SBS Charging Station 200W GaN",
//         "price": 249.99,
//         "discounts": [
//           {
//             "id": 15,
//             "currentPrice": 199.99,
//             "discountAmount": "50₼"
//           }
//         ],
//         "rating": {
//           "id": 4,
//           "rating": "4.9",
//           "count": "554"
//         },
//         "previewImage": "../images/products/Aksesuarlar/Product2/1.png"
//       },
//       {
//         "id": 22,
//         "title": "Disk Playstation 5 (Call Of Duty Modern Warfare 3)",
//         "price": 99.99,
//         "discounts": [
//           {
//             "id": 16,
//             "currentPrice": 89.99,
//             "discountAmount": "10₼"
//           }
//         ],
//         "rating": {
//           "id": 3,
//           "rating": "4.8",
//           "count": "312"
//         },
//         "previewImage": "../images/products/Oyunlar/Product2/1.png"
//       },
//       {
//         "id": 43,
//         "title": "Sony PlayStation 5 DualSense White",
//         "price": 149.99,
//         "discounts": [
//           {
//             "id": 17,
//             "currentPrice": 139.99,
//             "discountAmount": "6%"
//           }
//         ],
//         "rating": {
//           "id": 4,
//           "rating": "4.9",
//           "count": "554"
//         },
//         "previewImage": "../images/products/Oyunlar/Product4/1.png"
//       },
//       {
//         "id": 32,
//         "title": "Lens Canon RF 70-200MM F4 L IS USM",
//         "price": 4499.99,
//         "discounts": [
//           {
//             "id": 15,
//             "currentPrice": 3999.99,
//             "discountAmount": "500₼"
//           }
//         ],
//         "rating": {
//           "id": 3,
//           "rating": "4.8",
//           "count": "312"
//         },
//         "previewImage": "../images/products/Aksesuarlar/Product6/1.png"
//       }
// ];



// const SliderCart = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 5000); // 5 saniyede bir resim değiştirir

//     return () => clearInterval(interval); // Temizlik işlemi
//   }, []);

//   // const goToPrevious = () => {
//   //   setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
//   // };

//   // const goToNext = () => {
//   //   setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//   // };

//   return (
//     <div className="slider-cart bg-[#fff] border-[1px] border-[#ccc] divide-solid w-[300px] max-w-[100%] max-h-[100%] h-[450px]">
//       {/* <button className="slider-cart__button slider-cart__button--prev" onClick={goToPrevious}>{"<"}</button> */}
//       <div className="slider-cart__slide w-[100%] h-[100%] flex flex-col items-center justify-evenly">
//         <div className="slider-cart__info flex flex-col items-center">
//           <div className='text-[#666] font-[500] text-center'>{products[currentIndex].title}</div>
//           <div className="flex items-center">
//             <div className='font-[600] text-[#D10024]'>{products[currentIndex].discounts[0].currentPrice} ₼</div>
//             <del>
//               <div className='text-[14px] font-[600] text-[#888]'>{products[currentIndex].price} ₼</div>
//             </del>
//           </div>
//           {/* <div className=''>{products[currentIndex].brand}</div> */}
//         </div>
//         <div className="slider-cart__image w-[160px]">   
//             <img src={products[currentIndex].previewImage} alt={`Slide ${currentIndex}`} />
//         </div>
//         <button className='bg-[#D10024] text-[#fff] rounded-[10px] py-[13px] px-[60px]'>Səbətə at</button>
//       </div>
      
//       {/* <button className="slider-cart__button slider-cart__button--next" onClick={goToNext}>{">"}</button> */}
//     </div>
//   );
// };

// export default SliderCart;


import React, { useState, useEffect } from 'react';
import discountData from '../Json/discount';
import { useNavigate } from "react-router-dom";
// import './SliderCart.scss'; // Include CSS file here if needed

const SliderCart = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % discountData.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="slider-cart bg-[#fff] border-[1px] border-[#ccc] divide-solid w-[300px] max-w-[100%] max-h-[100%] h-[450px]">
      {/* <div className="slider-cart__slide w-[100%] h-[100%] "> */}
        {discountData.map((item, index) => (
          index === currentIndex && (
            <div key={item.id} className="slider-cart__slide w-[100%] h-[100%] flex flex-col items-center justify-evenly">
              {/* Product Information */}
              <div className="slider-cart__info flex flex-col items-center">
                <div className="text-[#666] font-[500] text-center">{item.title}</div>
                <div className="flex items-center">
                  <div className="font-[600] text-[#D10024]">{item.discounts[0].currentPrice} ₼</div>
                  <del>
                    <div className="text-[14px] font-[600] text-[#888] ml-2">{item.price} ₼</div>
                  </del>
                </div>
              </div>

              {/* Product Image */}
              <div className="slider-cart__image w-[160px]">
                <img src={item.previewImage} alt={`Slide ${index}`}  onClick={() => navigate(`/product-detail/${item.id}`)}/>
              </div>

              {/* Add to Cart Button */}
              <button className="bg-[#D10024] text-[#fff] rounded-[10px] py-[13px] px-[60px]">Səbətə at</button>
            </div>
          )
        ))}
      {/* </div> */}
    </div>
  );
};

export default SliderCart;
