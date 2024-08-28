import React from 'react'
// import axios from "axios";
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import accessoriesData from '../../../Json/category/ACCESSORIES';

const Accessories = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setProductData(accessoriesData)
      setLoading(false)
    }, 1000);
    },[])
  return (
    <div className='accessories'>
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

export default Accessories