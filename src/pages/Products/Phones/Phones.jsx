import { useState, useEffect } from 'react';
import axios from "axios";
import Cards from '../Cards';

const Phones = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
      axios("http://34.125.216.115:9095/api/product/category/all?categories=PHONES").then((res)=>{
        console.log(res.data) 
        setProductData(res.data)
      })
    },[])
  return (
<div className='phones'>
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

export default Phones
