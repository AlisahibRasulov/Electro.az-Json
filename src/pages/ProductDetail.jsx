import React from 'react'
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard';

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      Details
      {/* <DetailCard key={item.id} data={item}/> */}
    </div>
  )
}

export default ProductDetail