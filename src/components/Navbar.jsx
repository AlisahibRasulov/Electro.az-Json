// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function ColorSchemesExample() {
//   return (
//     <>
//      <Navbar bg="light" data-bs-theme="light">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default ColorSchemesExample;

// import React from 'react'
import React, { useState,useEffect } from 'react';
import { NavLink, Outlet, Link } from "react-router-dom";
import Dropdown from './Dropdown';
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import { Burger,DeletedIconSidebar } from '../svg';
// import ProductList from './Test';
// import CategoryDropdown from './Test';

import { useSelector} from 'react-redux';

// ? icons
import {SearchIcon,NavbarLikeHeartIcon,SidebarLikeHeartIcon,NavbarBasketIcon,SidebarBasketIcon,PlayLogo} from "../svg"

const Navbar = () => {
  const[open,setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isLogin,setIsLoggedIn] = useState(true);
    const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    // const handleReload = () => {
    //   window.location.reload();
    // };
    const toggleSidebar = () => {
      setOpen(!open);
      setSidebarOpen(!isSidebarOpen);
    };



    
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
  
   

    const like=useSelector((state)=> state.like.length);
    const basket = useSelector((state)=> state.basket.length)
  return (
    <div className='navbar-outside' >
  {/* <button className='open-btn'  onClick={toggleSidebar}><Burger className="burger-icon"/></button> */}
  <button className='open-btn' onClick={toggleSidebar}>
      {isSidebarOpen ? <Burger className="burger-icon" /> : null}
    </button>
    <div className={`navbar ${open ? 'sidebar-open' : 'sidebar-close'}`}>
     {/* <div className="container-fluid"> */}
     <button className='close-btn' onClick={toggleSidebar}><DeletedIconSidebar/></button>
        <div className="navbar-content">
        {/* <Dropdown/> */}
        {/* <ProductList/> */}
        {/* <CategoryDropdown/> */}
        <div className="sidebar-icon">
            <div to="/like" className="like_header" onClick={()=>navigate(`/like`)}>
            <SidebarLikeHeartIcon className="like_header-icon"/><div className='like_header-counter'>{like > 0 && <div className='basket_header-counter'>{like}</div>}</div>

            </div>
            <div to="/basket" onClick={()=>navigate(`/basket`)} className="basket_header">
           <SidebarBasketIcon className="basket_header-icon"/>
           <div className='basket_header-counter'>{basket > 0 && <div className='basket_header-counter'>{basket}</div>}</div>
            </div>
            {/* {
                isLogin ? (<button  to="/login" onClick={logOut}> Çıxış et </button>): (<button  to="/login" onClick={logIn}> Daxil ol </button>)

            } */}
          </div>
      
<ul className='navbar-menu'>
  {/* <Link to="/product">Məhsullar/> */}
        <li>
            <NavLink to={"/"}  onClick={toggleSidebar}>Əsas Səhifə</NavLink>
        </li>
        <li>
            <NavLink  to={"/about"}  onClick={toggleSidebar}>Haqqımızda</NavLink>
        </li>
        <li>
            <NavLink  to={"/contact"}  onClick={toggleSidebar}>Bizimlə Əlaqə</NavLink>
        </li>
        <li className={`dropdown ${isOpen ? 'open' : ''} open-dropdown`}  onClick={toggleDropdown}>
        Kateqoriyalar 
      <ul className="dropdown-menu">
          <Link className='li' to="/all-products">Hamısı</Link>
          <Link className='li' to="/computers">Notbuklar</Link>
          <Link className='li' to="/phones">Smartfonlar</Link>
          <Link className='li' to="/cameras">Fotoaparatlar</Link>
          <Link className='li' to="/accessories">Aksesuarlar</Link>
          <Link className='li' to="/games">Video oyunlar</Link>
          {/* <Tabs /> */}
      </ul>
    
    </li>
      </ul> 
      <div className="navbar-icon">
            <div to="/like" className="like_header" onClick={()=>navigate(`/like`)}>
            <NavbarLikeHeartIcon className="like_header-icon"/><div className='like_header-counter'>{like > 0 && <div className='basket_header-counter'>{like}</div>}</div>

            </div>
            <div to="/basket" onClick={()=>navigate(`/basket`)} className="basket_header">
           <NavbarBasketIcon className="basket_header-icon"/>
           <div className='basket_header-counter'>{basket > 0 && <div className='basket_header-counter'>{basket}</div>}</div>
            </div>
            {/* {
                isLogin ? (<button  to="/login" onClick={logOut}> Çıxış et </button>): (<button  to="/login" onClick={logIn}> Daxil ol </button>)

            } */}
          </div>
          <div className="navbar-user">
          {isLogin && location.pathname !== '/login' && location.pathname !== '/signup'? (
          <button className='logout-btn'  onClick={logOut}>
            Çıxış et
          </button>
        ) : !isLogin && location.pathname !== '/login' && location.pathname !== '/signup' ? (
          <button className='login-btn' onClick={logIn}>
            Daxil ol
          </button>
        ) : null}
          </div>
</div>
{/* </div> */}
</div>
        
<Outlet/>
</div>
      
  )
}

export default Navbar
