import React from 'react'
// import axios from "axios";
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import accessoriesData from '../../../Json/category/ACCESSORIES';

const Accessories = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
     setProductData(accessoriesData)
    },[])
  return (
    <div className='accessories'>
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

export default Accessories