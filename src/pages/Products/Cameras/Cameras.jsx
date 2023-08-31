import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import Cards from '../Cards';

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
        <Cards key={item.id} data={item}/>
))}
      </div>
    </div>
  </div>
  )
}

export default Cameras
