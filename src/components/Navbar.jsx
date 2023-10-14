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
import React, { useState } from 'react';
import { NavLink, Outlet, Link } from "react-router-dom";
import Dropdown from './Dropdown';

import { Burger,DeletedIconSidebar } from '../svg';
// import ProductList from './Test';
// import CategoryDropdown from './Test';


const Navbar = () => {
  const[open,setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    // const handleReload = () => {
    //   window.location.reload();
    // };
    const toggleSidebar = () => {
      setOpen(!open);
    };
  return (
    <div className='navbar-outside' >
  <button className='open-btn'  onClick={toggleSidebar}><Burger className="burger-icon"/></button>
    <div className={`navbar ${!open ? 'sidebar-open' : 'sidebar-close'}`}>
     {/* <div className="container-fluid"> */}
     <button className='close-btn' onClick={toggleSidebar}><DeletedIconSidebar/></button>
        <div className="navbar-content">
        {/* <Dropdown/> */}
        {/* <ProductList/> */}
        {/* <CategoryDropdown/> */}
      
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
          <Link className='li' to="/all-products">Bütün məhsullar</Link>
          <Link className='li' to="/computers">Notbuklar</Link>
          <Link className='li' to="/phones">Smartfonlar</Link>
          <Link className='li' to="/cameras">Fotoaparatlar</Link>
          <Link className='li' to="/accessories">Aksesuarlar</Link>
          <Link className='li' to="/games">Video oyunlar</Link>
          {/* <Tabs /> */}
      </ul>
    
    </li>
      </ul> 
      
      

          {/* <nav>
        <ul className='navbar-menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Haqqımızda</Link>
          </li>
          <li>
            <Link to="/contact">Bizimlə Əlaqə</Link>
          </li>
          <li>
            <Link to="/login">Daxil ol</Link>
          </li>
        </ul>
      </nav> */}
</div>
{/* </div> */}
</div>
        
<Outlet/>
</div>
      
  )
}

export default Navbar
