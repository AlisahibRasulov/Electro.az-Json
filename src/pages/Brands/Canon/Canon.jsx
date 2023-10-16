import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import Cards from '../Cards';

const Canon = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
      axios("http://34.125.216.115:9095/api/product/brand/all?brand=CANON").then((res)=>{
        console.log(res.data) 
        setProductData(res.data)
      })
    },[])
  return (
    <div className='canon'>
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

export default Canon