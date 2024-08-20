import React from 'react'
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import camerasData from '../../../Json/category/CAMERAS';
const Cameras = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
      setProductData(camerasData)
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
