import { useState, useEffect } from 'react';
import Cards from '../Cards';
import phonesData from '../../../Json/category/PHONES';

const Phones = () => {
  const [productData, setProductData] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
    setProductData(phonesData)
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
