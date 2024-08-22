import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
// import Image from "../logo.svg";
// import Logo from "../svg/play-button.svg"

// ? components
import Input from "./library/Input";
import Button from "./library/Button";
// import Sidebar from './Sidebar';
// import Dropdown from './Dropdown';

import { useSelector} from 'react-redux';

// ? icons
import {SearchIcon,HeaderLikeHeartIcon,HeaderBasketIcon,PlayLogo} from "../svg"
import { Outlet } from 'react-router-dom';

import { NavLink } from "react-router-dom";
import Login from '../pages/Auth/Login';
// const logoutBtn = {
//   marginLeft: "90%",
//   position: "absolute",
//   top: "25px",
// }

// const isLoggedIn = true;

const Header = () => {
  // const [refresh, setRefresh] = useState(true);
  // const [showBtn, setShowBtn] = useState(true);
  const [isLogin,setIsLoggedIn] = useState(true);
  // const [user, setUser] = useState(true);
  useEffect(() => {
    console.log(localStorage.getItem('isLoggedIn'))
    if( localStorage.getItem('isLoggedIn') === 'true'){
      console.log("here is working")
      setIsLoggedIn(true)
      // setUser(false)
    }else{
      setIsLoggedIn(false) 
      // setUser(true) 
    }
  }, []);

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
  //   <>
  //   <div className='header'>
  //    <div className="container">
  //     <div className="header-content">
  //         {/* <Sidebar/> */}
  //         <div className='logo'>
  //           <PlayLogo className="play-logo"/>
  //           <h1 className='logo-name'><a href="/">Electro.<span>az</span> </a></h1>
  //         </div>
  //         <div className='search'>
  //         <button className='search-btn'><SearchIcon/></button>
  //         <input className="search-input" />
  //         </div>
  //         {/* <div className="header-icons">
  //           <button to="/like" className="like_header" onClick={()=>navigate(`/like`)}>
  //           <HeaderLikeHeartIcon className="like_header-icon"/><div className='like_header-counter'>{like}</div>

  //           </button>
  //           <button to="/basket" onClick={()=>navigate(`/basket`)} className="basket_header">
  //          <HeaderBasketIcon className="basket_header-icon"/>
  //          <div className='basket_header-counter'>{basket}</div>
  //           </button>
  //               {isLogin && location.pathname !== '/login' && location.pathname !== '/signup'? (
  //         <button  onClick={logOut}>
  //           Çıxış et
  //         </button>
  //       ) : !isLogin && location.pathname !== '/login' && location.pathname !== '/signup' ? (
  //         <button to="/login" onClick={logIn}>
  //           Daxil ol
  //         </button>
  //       ) : null}
  //         </div> */}
  //     </div>
  //    </div>
  //   </div>
  //  </>
  <>
        <div className='header'>
            <div className="header_top">
                <div className='header_logo'>
            <PlayLogo className="play-logo"/>
            <div className='logo-name'><a href="/">Electro</a></div>
                </div>
                <ul className='header_menu'>
                    <li className='menu_item'>
                        <NavLink className="menu_link" to={"/"}>Əsas Səhifə</NavLink>
                    </li>
                    <li className='menu_item'>
                        <NavLink className="menu_link" to={"/products"}>Məhsullar</NavLink>
                    </li>
                    <li className='menu_item'>
                        <NavLink className="menu_link"  to={"/about"}>Haqqımızda</NavLink>
                    </li>
                </ul>
                <div className="header_user">
                    {/* <button className="login_btn">Daxil ol</button> */}
                    {isLogin && location.pathname !== '/login' && location.pathname !== '/signup'? (
          <button className="login_btn" onClick={logOut}>
            Çıxış et
          </button>
        ) : !isLogin && location.pathname !== '/login' && location.pathname !== '/signup' ? (
          <button to="/login" className="login_btn" onClick={logIn}>
            Daxil ol
          </button>
        ) : null}
                </div>
            </div>
            <div className="line"></div>
            <div className="header_bottom">
                <div className="header_catalog">
                    <img className="menu_img" src="../../images/icons/category.png" alt="" />
                    <div className="menu_title">Kataloq</div>
                </div>
                <div className="header_search">
                    <input className="search_input focus:ring-slate-900 " type="text" placeholder="Axtarış..." />
                    <button className="search_btn">Axtar</button>
                </div>
                <div className="header_icons">
                    <div className="header_like relative">
                    <button to="/like" className="like_header" onClick={()=>navigate(`/like`)}>
                    <span className="like_header-counter px-[4px] py-[2px] bg-[#D10024] text-[#fff] text-[10px] rounded-[5px] absolute top-[-5px] right-[-5px]">{like}</span>
                    <img src="../images/icons/like.png" alt="" />
                    </button>  
                    </div>
                    <div className="line2"></div>
                    <div className="header_basket relative">
                    <button to="/basket" className="basket_header" onClick={()=>navigate(`/basket`)}>
                    <span className="basket_header-counter px-[4px] py-[2px] bg-[#D10024] text-[#fff] text-[10px] rounded-[5px] absolute top-[-5px] right-[-5px]">{basket}</span>
                    <img src="../images/icons/cart.png" alt="" />
                    </button>
                    </div>
                </div>
                
                {/* <Input type="password" icon={<Header />} /> */}
                    {/* <Button/> */}
            </div>
            <div className="line"></div>
            
        </div>
    <Outlet/>
    </>
  );
};


export default Header;