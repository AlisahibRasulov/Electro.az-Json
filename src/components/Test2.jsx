// import React, { useState, useEffect } from 'react';
// import Button from "./Button";
// import {CardLikeHeartIcon} from "../svg"
// import axios from "axios";

// const ProductList = ({ selectedCategory }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // fetch(`/api/products/by-category?category=${selectedCategory}`)
//     //   .then(response => response.json())
//     //   .then(data => setProducts(data))
//     //   .catch(error => console.error('Error fetching products:', error));
//     axios.get(`http://35.184.181.250:9096/api/computer-product/category/all?categories=${selectedCategory}`)
//           .then(response => {
//             console.log(response.data); 
//             setProducts(response.data);
//           })
//           .catch(error => {
//             console.error('Error fetching products:', error);
//           });
//   }, [selectedCategory]);

//   return (
//     // <div>
//     //   <h2>Products in {selectedCategory}</h2>
//     //   <ul>
//     //     {products.map(product => (
//     //       <li key={product.id}>{product.name} - ${product.price}</li>
//     //     ))}
//     //   </ul>
//     // </div>
//     <div className="dropdown-cards_content">
//         <h2>Products in {selectedCategory}</h2>
//       {products.map((item)=>(
//         <div className='product-card'>
//         {/* <h2>{item.id}</h2> */}
//       <div className="card-view">
//         <Button>Add Cart</Button>
//         <Button>Details</Button>
//         {/* <td><Button onClick={()=>deletedItem(item.id)}>Delete</Button></td>  */}
//         <CardLikeHeartIcon/>
//       </div>
//       <img src={item.images[0].imagePath} alt="" />
//       <h2>{item.title.slice(0,10)}</h2>
//       {/* <p>{item.price}Azn</p> */}
//         </div>
      
//       ))}
//     </div>
    
//   );
// };

// export default ProductList;


// // import Swiper core and required modules
// // import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';
// // import 'swiper/css/scrollbar';

// // const Test2 =  () => {
// //   return (
// //     <Swiper
// //       // install Swiper modules
// //       modules={[Navigation, Pagination, Scrollbar, A11y]}
// //       spaceBetween={50}
// //       slidesPerView={3}
// //       navigation
// //       pagination={{ clickable: true }}
// //       scrollbar={{ draggable: true }}
// //       onSwiper={(swiper) => console.log(swiper)}
// //       onSlideChange={() => console.log('slide change')}
// //     >
// //       <SwiperSlide>Slide 1</SwiperSlide>
// //       <SwiperSlide>Slide 2</SwiperSlide>
// //       <SwiperSlide>Slide 3</SwiperSlide>
// //       <SwiperSlide>Slide 4</SwiperSlide>
// //       ...
// //     </Swiper>
// //   );
// // };


// // export default Test2

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';

import { CardBasketIcon } from '../svg';


const ProductList = ({ selectedCategory }) => {
  const [productData, setProductData] = useState([]);

   useEffect(() => {
    // fetch(`/api/products/by-category?category=${selectedCategory}`)
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    //   .catch(error => console.error('Error fetching products:', error));
    axios.get(`http://35.184.181.250:9096/api/computer-product/category/all?categories=${selectedCategory}`)
          .then(response => {
            console.log(response.data); 
            setProductData(response.data);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
  }, [selectedCategory]);

  return (
    <div>
      {/* <h2>Products in {selectedCategory}</h2>
      <ul>
        {productData.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul> */}
      <div className="card-content">
      {productData.map((item) => (
      <div className='product-card' key={item.id}>
    
    <div className='card-discount-percentage'>
        {item.discounts[0]?.discountPercentage ? (
        <div className='discount-active'>-{item.discounts[0].discountPercentage}</div>
) :     <div className='discount-hidden'></div>}
    </div>
    <img src={item.images[0]?.imagePath} alt="" />
    <div className='card-title'>{item.title}</div>
   {item.discounts[0]?.currentPrice ? (
  <del>
    <div className='card-price'>{item.price} ₼</div>
  </del>
) : (
  <div className='card-price'>{item.price} ₼</div>
)}

    <div className='card-discount-price'>
      {item.discounts[0]?.currentPrice
        ? `${item.discounts[0].currentPrice} ₼`
        : ''}
    </div>
    <div className="card-view">
      <Button className='card-btn'><CardBasketIcon className="card-btn_basket"/> <div className='card-btn_text'>Səbətə at</div> </Button>
    </div>
  </div>
))}
    </div>
    </div>
  );
};

export default ProductList;
