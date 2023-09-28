import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
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
import Login from '../pages/Auth/Login';
// const logoutBtn = {
//   marginLeft: "90%",
//   position: "absolute",
//   top: "25px",
// }

// const isLoggedIn = true;

const Header = () => {
  const [refresh, setRefresh] = useState(true);
  const [showBtn, setShowBtn] = useState(true);
  const [isLogin,setIsLoggedIn] = useState(true);
  useEffect(() => {
    console.log(localStorage.getItem('isLoggedIn'))
    if( localStorage.getItem('isLoggedIn') === 'true'){
      console.log("here is working")
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }


  }, [refresh]);

  const location = useLocation();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem('isLoggedIn', 'false')
    navigate("/login");
    window.location.reload();
  };


  const logIn = () => {
    navigate("/login");
    window.location.reload();
  };

  

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // Oturum açma işlemi
  // const handleLogin = () => {
  //   // Oturum açıldığında local storage'da isLoggedIn değerini true olarak ayarlayın.
  //   localStorage.setItem('isLoggedIn', 'true');
  //   setIsLoggedIn(true);
  // };

  // // Oturum kapatma işlemi
  // const handleLogout = () => {
  //   // Oturum kapatıldığında local storage'da isLoggedIn değerini false olarak ayarlayın.
  //   localStorage.setItem('isLoggedIn', 'false');
  //   setIsLoggedIn(false);
  // };


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
            {/* {
                isLogin ? (<button  to="/login" onClick={logOut}> Çıxış et </button>): (<button  to="/login" onClick={logIn}> Daxil ol </button>)

            } */}
                {isLogin && location.pathname !== '/login' && location.pathname !== '/signup'? (
          <button to="/login" onClick={logOut}>
            Çıxış et
          </button>
        ) : !isLogin && location.pathname !== '/login' && location.pathname !== '/signup' ? (
          <button to="/login" onClick={logIn}>
            Daxil ol
          </button>
        ) : null}
          </div>
      </div>
     </div>
    </div>
   </>
  );
};


export default Header;