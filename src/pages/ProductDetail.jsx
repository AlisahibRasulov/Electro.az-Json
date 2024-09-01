// // import React from 'react'
// import { useState, useEffect } from 'react';
// import axios from "axios";
// import { useParams } from 'react-router-dom';
// import DetailCard from '../components/DetailCard';

// const ProductDetail = () => {
//   const [cardDetails, setCardDetails] = useState({});
//   const { id } = useParams();

//   useEffect(()=>{
//     axios(`http://34.125.216.115:9095/api/product/${id}`).then((res)=>{
//       console.log(res.data) 
//       setCardDetails(res.data)
//     })
//   },[])
//   return (
   
     
//       <div className='card-detail'>
//          {/* Details */}
//       {/* <DetailCard key={item.id} data={item}/> */}
//         {/* <DetailCard card={card} /> */}
//         <div className="container">
//     <div className="card-content">
//        {/* <DetailCard card={cardDetails} /> */}
//       {cardDetails.map((item) => (
//       <DetailCard key={item.id} data={item}/>
// ))}
//     </div>
//   </div>
//     </div>

//   )
// }

// export default ProductDetail


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard';
import productIdData from '../Json/product-deail/product-by-id';

const ProductDetail = () => {
  const [cardDetails, setCardDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    // Ürün ID'sine göre veriyi filtrele
    const product = productIdData.find(item => item.id === parseInt(id)); // id'nin doğru formatta olduğunu doğrula

    if (product) {
      setCardDetails([product]); // Detayları bir dizi olarak ayarla
    } else {
      setCardDetails([]); // Ürün bulunamazsa boş bir dizi döndür
    }
    
    setLoading(false); // Yükleme durumunu güncelle
  }, [id]);

  return (
    <div className="card-detail">
      <div className="container">
        <div className="card-content">
          {loading ? (
            <p>Loading...</p> // Yükleme durumunu göster
          ) : (
            cardDetails.map((item) => (
              <DetailCard key={item.id} data={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
