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
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard';


const ProductDetail = () => {
  const [cardDetails, setCardDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`http://34.125.216.115:9095/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setCardDetails([res.data]); // Wrap the response data in an array
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="card-detail">
      <div className="container-fluid">
        <div className="card-content">
          {cardDetails.map((item) => (
            <DetailCard key={item.id} data={item} />
          ))}
           {/* <DetailCard card={cardDetails} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;