import React from 'react';
// import Image from "../logo.svg";
// import Logo from "../svg/play-button.svg"

// ? components
import Input from "./library/Input";
import Button from "./library/Button";
// import Dropdown from './Dropdown';

// ? icons
import {SearchIcon,HeaderLikeHeartIcon,HeaderBasketIcon,PlayLogo} from "../svg"
import { Outlet } from 'react-router-dom';

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className='header'>
     <div className="container">
      <div className="header-content">
          <div className='logo'>
            {/* <img className='logo-img' src={Image} alt="Logo" /> */}
            <PlayLogo className="play-logo"/>
            {/* <img src={Logo} alt="Logo" /> */}
            <h1 className='logo-name'><a href="/">Electro.<span>az</span> </a></h1>
          </div>
          <div className='search'>
        {/* <input className='search-input' type="text" placeholder="Search..." /> */}
          {/* <Dropdown/> */}
          <Input className="search-input" />
          <Button className='search-btn' btn-type='secondary' icon={<SearchIcon/>}></Button>
        {/* <Button>Search</Button> */}
        {/* <button style={searchButtonStyle}>Search</button> */}
          </div>
          <div className="header-icons">
            <HeaderLikeHeartIcon className="like_header-icon"/>
            <Link  to="/basket"><HeaderBasketIcon className="basket_header-icon"/></Link>
            {/* <HeaderBasketIcon className="basket_header-icon"/> */}
          </div>
      </div>
     </div>
    </div>
    <Outlet/>
   </>
  );
};

// const headerStyle = {
//   background: '#333',
//   color: '#fff',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   padding: '1rem',
// };

// const logoStyle = {
//   marginRight: '1rem', // Add spacing between logo and search box
// };

// const logoImgStyle = {
//   height: '50px', // Adjust the height of the logo as needed
// };

// const searchBoxStyle = {
//   display: 'flex',
//   alignItems: 'center',
// };

// const searchInputStyle = {
//   padding: '0.5rem',
//   marginRight: '0.5rem', // Add spacing between input and button
// };

const searchButtonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#fff',
  color: '#333',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Header;