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
       
      <div className="container-fluid flex justify-evenly items-center mb-[20px] md:flex-col">
        <div className="col-2 md:hidden">
          <Sidebar/>
        </div>
        <div className="col-7">
          <CarouselImg/>
        </div>
        <div className="col-3">
        <SliderCart/>
        </div>
        <div className="col-2">
          <Sidebar/>
        </div>
      </div>
       <Brands/>
      <Discount/>
      <New/>
      {/* <Brands/> */}
    </div>
     
  )
}

export default Home