import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';

// ? components
import Button from '../../components/library/Button';

// ? svg
// import { CardLikeHeartIcon } from '../../svg';
import { CardBasketIcon } from '../../svg';


const Cameras = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
      axios("http://35.184.181.250:9096/api/computer-product/category/all?categories=CAMERAS").then((res)=>{
        console.log(res.data) 
        setProductData(res.data)
      })
    },[])
  return (
    <div className='cameras'>
     <div className="container">
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
    </div>
  )
}

export default Cameras
