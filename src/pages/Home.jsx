import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Brands from "../components/Brands";
import Discount from "../components/products/DiscountCards/Discount";
import New from "../components/products/NewCards/New";
import CarouselImg from "../components/CarouselImg";
import SliderCart from "../components/SliderCart";
import Sidebar from "../components/Sidebar";
import All from "../components/products/AllCards/All";

// const logoutBtn = {
//   marginLeft: "90%",
//   position: "absolute",
//   top: "25px",
// }

const Home = () => {
  return (
    <div className="home">
      <>
        {/* <button style={logoutBtn} onClick={logOut}>
    Logout
      </button> */}
        <Outlet />
      </>

      <div className="container-fluid flex justify-evenly items-center mb-[100px] lg:flex-col md:flex-col sm:flex-col xs:flex-col 2xs:flex-col">
        {/* <div className="col-12 2xl:hidden xl:hidden mb-[20px] lg:flex lg:justify-between md:flex md:flex-col sm:flex sm:flex-col sm:items-center sm:justify-between 2xs:flex 2xs:flex-col 2xs:items-center xs:flex xs:flex-col xs:items-center ">
          <div className="col-4 md:hidden sm:hidden  2xs:hidden xs:hidden">
            <Sidebar />
          </div>
          <div className="col-8 md:hidden sm:hidden 2xs:hidden xs:hidden">
            <CarouselImg />
          </div>
          <div className="col-12 hidden md:block md:mb-[20px] sm:block sm:mb-[20px] xs:block xs:mb-[20px] 2xs:block 2xs:mb-[20px]">
            <Sidebar />
          </div>
          <div className="col-12 hidden md:block sm:block xs:block 2xs:block">
            <CarouselImg />
          </div>
        </div> */}
        <div className="col-2xl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-2xs-12 col-xs-12 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col md:mb-[20px] sm:flex-col sm:mb-[20px] 2xs:flex-col 2xs:mb-[20px] xs:flex-col xs:mb-[20px]">
          <div className="col-2xl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-2xs-12 col-xs-12  md:mb-[20px] sm:mb-[20px] 2xs:mb-[20px] xs:mb-[20px]">
            <Sidebar />
          </div>
          <div className="col-2xl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 col-2xs-12 col-xs-12">
            <CarouselImg />
          </div>
          <div className="col-2xl-3 col-xl-3 lg:hidden md:hidden sm:hidden 2xs:hidden xs:hidden">
            <SliderCart />
          </div>
        </div>
        <div className="col-lg-12 hidden lg:block md:block sm:block xs:block 2xs:block">
          <SliderCart />
        </div>
        {/* <div className="col-2">
          <Sidebar/>
        </div> */}
      </div>
      <Brands />
      <All/>
      <Discount />
      <New />
      {/* <Brands/> */}
    </div>
  );
};

export default Home;
