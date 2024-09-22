import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar bg-[#fff] shadow rounded-[12px] w-[100%] h-[100%] xl:h-[550px]">
      <ul className="sidebar_menu flex flex-col justify-around w-[100%] h-[100%] 2xl:p-[20px] xl:p-[20px] lg:p-[20px] md:flex-row md:justify-between md:p-[20px] sm:flex-row sm:justify-between sm:p-[20px] 2xs:flex-row 2xs:justify-between 2xs:p-[20px] xs:flex-row xs:justify-between xs:p-[10px]">
        <li className="hover:border-y-[1px] hover-border flex justify-between items-center 2xl:w-[100%] 2xl:h-[20%] 2xl:gap-[10px] xl:w-[100%] xl:h-[20%] xl:gap-[10px] md:flex-col sm:flex-col 2xs:flex-col xs:flex-col">
          <img
            src="../images/icons/icons8-electronic-100.png"
            alt=""
            className="2xl:w-[25px] xl:w-[25px] lg:w-[25px] md:w-[25px] sm:w-[25px] 2xs:w-[25px] xs:w-[20px]"
          />
          <NavLink
            className="hover:text-[#D10024] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[12px] 2xs:text-[10px] xs:text-[8px]"
            to="/products"
          >
            Hamısı
          </NavLink>
          <img src="../images/icons/icons8-arrow-100.png" alt="" className="w-[20px]"/>
        </li>
        <li className="hover:border-y-[1px] hover-border flex justify-between items-center 2xl:w-[100%] 2xl:h-[20%] 2xl:gap-[10px] xl:w-[100%] xl:h-[20%] xl:gap-[10px] md:flex-col sm:flex-col 2xs:flex-col xs:flex-col">
          <img
            src="../images/icons/icons8-laptop-100.png"
            alt=""
            className="2xl:w-[25px] xl:w-[25px] lg:w-[25px] md:w-[25px] sm:w-[25px] 2xs:w-[25px] xs:w-[20px]"
          />
          <NavLink
            className="hover:text-[#D10024] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[12px] 2xs:text-[10px] xs:text-[8px]"
            to="/products/computers"
          >
            Notbuklar
          </NavLink>
          <img src="../images/icons/icons8-arrow-100.png" alt="" className="w-[20px]"/>
        </li>
        <li className="hover:border-y-[1px] hover-border flex justify-between items-center 2xl:w-[100%] 2xl:h-[20%] 2xl:gap-[10px] xl:w-[100%] xl:h-[20%] xl:gap-[10px] md:flex-col sm:flex-col 2xs:flex-col xs:flex-col">
          <img
            src="../images/icons/icons8-phone-100.png"
            alt=""
            className="2xl:w-[25px] xl:w-[25px] lg:w-[25px] md:w-[25px] sm:w-[25px] 2xs:w-[25px] xs:w-[20px]"
          />
          <NavLink
            className="hover:text-[#D10024] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[12px] 2xs:text-[10px] xs:text-[8px]"
            to="/products/phones"
          >
            Smartfonlar
          </NavLink>
          <img src="../images/icons/icons8-arrow-100.png" alt="" className="w-[20px]"/>
        </li>
        <li className="hover:border-y-[1px] hover-border flex justify-between items-center 2xl:w-[100%] 2xl:h-[20%] 2xl:gap-[10px] xl:w-[100%] xl:h-[20%] xl:gap-[10px] md:flex-col sm:flex-col 2xs:flex-col xs:flex-col">
          <img
            src="../images/icons/icons8-compact-camera-100.png"
            alt=""
            className="2xl:w-[25px] xl:w-[25px] lg:w-[25px] md:w-[25px] sm:w-[25px] 2xs:w-[25px] xs:w-[20px]"
          />
          <NavLink
            className="hover:text-[#D10024] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[12px] 2xs:text-[10px] xs:text-[8px]"
            to="/products/cameras"
          >
            Fotoaparatlar
          </NavLink>
          <img src="../images/icons/icons8-arrow-100.png" alt="" className="w-[20px]"/>
        </li>
        <li className="hover:border-y-[1px] hover-border flex justify-between items-center 2xl:w-[100%] 2xl:h-[20%] 2xl:gap-[10px] xl:w-[100%] xl:h-[20%] xl:gap-[10px] md:flex-col sm:flex-col 2xs:flex-col xs:flex-col">
          <img
            src="../images/icons/icons8-game-100.png"
            alt=""
            className="2xl:w-[25px] xl:w-[25px] lg:w-[25px] md:w-[25px] sm:w-[25px] 2xs:w-[25px] xs:w-[20px]"
          />
          <NavLink
            className="hover:text-[#D10024] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[12px] 2xs:text-[10px] xs:text-[8px]"
            to="/products/games"
          >
            Video oyunlar
          </NavLink>
          <img src="../images/icons/icons8-arrow-100.png" alt="" className="w-[20px]"/>
        </li>
        <li className="hover:border-y-[1px] hover-border flex justify-between items-center 2xl:w-[100%] 2xl:h-[20%] 2xl:gap-[10px] xl:w-[100%] xl:h-[20%] xl:gap-[10px] md:flex-col sm:flex-col 2xs:flex-col xs:flex-col">
          <img
            src="../images/icons/icons8-headphones-100.png"
            alt=""
            className="2xl:w-[25px] xl:w-[25px] lg:w-[25px] md:w-[25px] sm:w-[25px] 2xs:w-[25px] xs:w-[20px]"
          />
          <NavLink
            className="hover:text-[#D10024] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[12px] 2xs:text-[10px] xs:text-[8px]"
            to="/products/accessories"
          >
            Aksesuarlar
          </NavLink>
          <img src="../images/icons/icons8-arrow-100.png" alt="" className="w-[20px]"/>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
