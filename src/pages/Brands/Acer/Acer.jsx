import { useState, useEffect } from 'react';
import Cards from '../Cards';
// import acerData from ""
const Acer = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
     
    },[])
  return (
    <div className='acer'>
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

export default Acer