import React from 'react'
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import camerasData from '../../../Json/category/CAMERAS';
const Cameras = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setProductData(camerasData)
      setLoading(false)
    }, 1000);
    },[])
  return (
  <div className='cameras'>
    <div className="container flex justify-center items-center">
        {loading ? (
          <div className="spinner2"></div> // Loading indicator inside the container
        ) : (
          <div className="card-content">
            {productData.map((item) => (
              <Cards key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
  </div>
  )
}

export default Cameras
