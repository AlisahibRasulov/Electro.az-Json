import React from 'react'
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import computersData from '../../../Json/category/COMPUTERS';

const Computers = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
      setProductData(computersData)
    },[])
  return (
<div className='computers'>
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

export default Computers
