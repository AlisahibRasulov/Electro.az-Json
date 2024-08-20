import React from 'react'
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import discountData from '../../../Json/discount';
const DiscountPages = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
    setProductData(discountData)
    },[])
  return (
  <div className='cameras'>
    <div className="container">
      <div className="card-content">
      {productData.map((item) => (
        <Cards key={item.id} data={item}/>
))}
      </div>
    </div>
  </div>
  )
}

export default DiscountPages
