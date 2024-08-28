import React from 'react'
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import computersData from '../../../Json/category/COMPUTERS';

const Computers = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setProductData(computersData)
      setLoading(false)
    }, 1000);
    },[])
  return (
<div className='computers'>
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

export default Computers
