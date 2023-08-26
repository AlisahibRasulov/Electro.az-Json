import React from 'react'
// import { Carousel } from 'reactstrap'
// import { Carousel } from 'reactstrap'
// import Carousel from '../components/Carousel';
// import Carousel2 from '../components/Carousel2'
// import MainContent from '../components/MainContent';
import Brands from '../components/Brands'
// import AllCards from '../components/AllCards';
import DiscountCard from '../components/DiscountCard';
// import NewCards from '../components/NewCards';
// import { imageData } from '../SlideData';
// import MyCarousel from '../components/Carousel'
// import Tabs from "../components/Tabs"
// import CustomCarousel from '../components/Carousel2';


import ProductList from '../components/Test';
// import Test2 from '../components/Test2';
import NewCards from '../components/NewCards';
import Carousel3 from '../components/Carousel3';

const Home = () => {
  return (
    <div>
      {/* <ProductList/> */}
       <Carousel3/>
       {/* <CustomCarousel/> */}
      {/* <MainContent/> */}
      <Brands/>
      {/* <NewCards/> */}
      {/* <AllCards/> */}
      <DiscountCard/>
      <NewCards/>
      {/* <Test2/> */}
      {/* <Tabs/> */}
    </div>
     
  )
}

export default Home