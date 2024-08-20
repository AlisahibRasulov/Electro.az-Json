import React from 'react'
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import allProductData from '../../../Json/product-all';

const AllProducts = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
    setProductData(allProductData)
  },[])

  return (
<div className='all-products'>
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

export default AllProducts