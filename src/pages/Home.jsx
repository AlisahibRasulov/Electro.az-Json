import React from 'react'
import { useNavigate,Outlet } from "react-router-dom";
import Brands from '../components/Brands'
import Discount from '../components/products/DiscountCards/Discount';
import New from '../components/products/NewCards/New';
import CarouselImg from '../components/CarouselImg';

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
       
      <div className="container">
        <CarouselImg/>
      </div>
       <Brands/>
      <Discount/>
      <New/>
      {/* <Brands/> */}
    </div>
     
  )
}

export default Home