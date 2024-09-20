import React from 'react'
import { useNavigate,Outlet } from "react-router-dom";
import Brands from '../components/Brands'
import Discount from '../components/products/DiscountCards/Discount';
import New from '../components/products/NewCards/New';
import CarouselImg from '../components/CarouselImg';
import SliderCart from '../components/SliderCart';
import Sidebar from '../components/Sidebar';

// const logoutBtn = {
//   marginLeft: "90%",
//   position: "absolute",
//   top: "25px",
// }

const Home = () => {
  return (
    <div className='home'>
      <>
      {/* <button style={logoutBtn} onClick={logOut}>
    Logout
      </button> */}
      <Outlet/>
      </>
       
      <div className="container-fluid flex justify-evenly items-center mb-[20px] lg:flex-col md:flex-col sm:flex-col xs:flex-col 2xs:flex-col">
        <div className="col-12 hidden mb-[20px] lg:flex lg:justify-between md:flex sm:flex xs:flex 2xs:flex">
          <div className="col-4">
            <Sidebar/>
          </div>
          <div className="col-8">
            <CarouselImg/>
          </div>
        </div>
        <div className="col-3 lg:hidden md:hidden sm:hidden xs:hidden 2xs:hidden">
          <Sidebar/> 
        </div>
        <div className="col-7 lg:hidden md:hidden sm:hidden xs:hidden 2xs:hidden">
          <CarouselImg/>
        </div>
        <div className="col-2 lg:hidden md:hidden sm:hidden xs:hidden 2xs:hidden">
        <SliderCart/>
        </div>
        <div className="col-11 lg:block md:block sm:block xs:block 2xs:block">
        <SliderCart/>
        </div>
        {/* <div className="col-2">
          <Sidebar/>
        </div> */}
      </div>
       <Brands/>
      <Discount/>
      <New/>
      {/* <Brands/> */}
    </div>
     
  )
}

export default Home