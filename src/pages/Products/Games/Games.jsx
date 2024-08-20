import React from 'react'
import { useState, useEffect } from 'react';
import Cards from '../Cards';
import gamesData from '../../../Json/category/GAMES';
const Games = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
    setProductData(gamesData)
    },[])
  return (
  <div className='games'>
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

export default Games
