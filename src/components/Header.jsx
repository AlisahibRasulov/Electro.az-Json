import React from 'react';
import { useNavigate } from "react-router-dom";
// import Image from "../logo.svg";
// import Logo from "../svg/play-button.svg"

// ? components
import Input from "./library/Input";
import Button from "./library/Button";
// import Dropdown from './Dropdown';

import { useSelector} from 'react-redux';

// ? icons
import {SearchIcon,HeaderLikeHeartIcon,HeaderBasketIcon,PlayLogo} from "../svg"
import { Outlet } from 'react-router-dom';

import { Link } from "react-router-dom";
// const logoutBtn = {
//   marginLeft: "90%",
//   position: "absolute",
//   top: "25px",
// }

const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/login");
    // setUser(false);
    // sessionStorage.removeItem("token");
  };
  // const like=useSelector((state)=> state.addToCard);
  const like=useSelector((state)=> state.like.length);
  const basket = useSelector((state)=> state.basket.length)
  return (
    <>
    <div className='header'>
     <div className="container">
      <div className="header-content">
          <div className='logo'>
            <PlayLogo className="play-logo"/>
            <h1 className='logo-name'><a href="/">Electro.<span>az</span> </a></h1>
          </div>
          <div className='search'>
          <Input className="search-input" />
          <Button className='search-btn' btn-type='secondary' icon={<SearchIcon/>}></Button>
          </div>
          <div className="header-icons">
            <button to="/like" className="like_header" onClick={()=>navigate(`/like`)}>
            <HeaderLikeHeartIcon className="like_header-icon"/><div className='like_header-counter'>{like}</div>

            </button>
            <button to="/basket" onClick={()=>navigate(`/basket`)} className="basket_header">
           <HeaderBasketIcon className="basket_header-icon"/>
           <div className='basket_header-counter'>{basket}</div>
            </button>
            <button  to="/login" onClick={logOut}>
           Logout
         </button>
          </div>
      </div>
     </div>
    </div>
    {/* <Outlet/> */}
   </>
  );
};


export default Header;