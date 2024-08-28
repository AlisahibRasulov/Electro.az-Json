import { useState, useEffect } from 'react';
import Cards from '../Cards';
import phonesData from '../../../Json/category/PHONES';

const Phones = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    // Simulate a delay to fetch data
    setTimeout(() => {
      setProductData(phonesData);
      setLoading(false); // Set loading to false once data is fetched
    }, 1000); // Adjust the delay as needed
  }, []);
  return (
<div className='phones'>
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

export default Phones
