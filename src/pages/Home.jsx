import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import Brands from "../components/Brands";
import Discount from "../components/products/DiscountCards/Discount";
import New from "../components/products/NewCards/New";
import CarouselImg from "../components/CarouselImg";
import SliderCart from "../components/SliderCart";
import Sidebar from "../components/Sidebar";
import All from "../components/products/AllCards/All";


const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay to fetch data
    setTimeout(() => {
      setLoading(false); // Set loading to false once data is fetched
    }, 3000); // Adjust the delay as needed
  }, []);
  return (
    <div className="home">
      {/* <>
        <Outlet />
      </> */}
      
      <div className="container-fluid flex justify-evenly items-center mb-[100px] lg:flex-col md:flex-col sm:flex-col xs:flex-col 2xs:flex-col">
        <div className="col-2xl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-2xs-12 col-xs-12 flex 2xl:flex-row xl:flex-row lg:flex-row lg:mb-[20px] md:flex-col md:mb-[20px] sm:flex-col sm:mb-[20px] 2xs:flex-col 2xs:mb-[20px] xs:flex-col xs:mb-[20px]">
          <div className="col-2xl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-2xs-12 col-xs-12 md:mb-[20px] sm:mb-[20px] 2xs:mb-[20px] xs:mb-[20px]">
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
      </div>
      {loading ? (
        <div className="container flex justify-center items-center mb-[150px]">
          <div className="spinner2"></div>
        </div>
      ) : (
    <>  
    <Brands />
    </>
      )}
        {loading ? (
        <div className="container flex justify-center items-center mb-[150px]">
          <div className="spinner2"></div>
        </div>
      ) : (
    <>  
    <All/>
    </>
      )}
        {loading ? (
        <div className="container bg-[#fff] flex justify-center items-center mb-[150px]">
          <div className="spinner2"></div>
        </div>
      ) : (
    <>  
    <Discount />
    </>
      )}
        {loading ? (
        <div className="container flex justify-center items-center mb-[150px]">
          <div className="spinner2"></div>
        </div>
      ) : (
    <>  
    <New />
    </>
      )}
    </div>
  );
};

export default Home;
