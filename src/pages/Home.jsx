import React from 'react'
import Brands from '../components/Brands'
import Discount from '../components/products/DiscountCards/Discount';
import New from '../components/products/NewCards/New';
import CarouselImg from '../components/CarouselImg';


const Home = () => {
  return (
    <div>
       <CarouselImg/>
      <Discount/>
      <New/>
      <Brands/>
    </div>
     
  )
}

export default Home