import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import Cards from '../Cards';

const Accessories = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
      axios("http://34.125.216.115:9095/api/product/category/all?categories=ACCESSORIES").then((res)=>{
        console.log(res.data) 
        setProductData(res.data)
      })
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