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

import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Dropdown from './Dropdown';
// import ProductList from './Test';
// import CategoryDropdown from './Test';


const Navbar = () => {
  
    // const handleReload = () => {
    //   window.location.reload();
    // };
  return (
    <>
    <div className='navbar'>
     <div className="container-fluid">
        <div className="navbar-content">
        <Dropdown/>
        {/* <ProductList/> */}
        {/* <CategoryDropdown/> */}
      
{/* <ul className='navbar-menu'> */}
  {/* <Link to="/product">Məhsullar/> */}
        {/* <li>
            <NavLink to={"/"} onClick={handleReload}>Əsas Səhifə</NavLink>
        </li>
        <li>
            <NavLink  to={"/product"}>Məhsullar</NavLink>
        </li>
        <li>
            <NavLink  to={"/about"} >Haqqımızda</NavLink>
        </li>
        <li>
            <NavLink  to={"/contact"} >Bizimlə Əlaqə</NavLink>
        </li>
        <li>
            <NavLink  to={"/login"} >Daxil ol</NavLink>
        </li>
      </ul>  */}

          <nav>
        <ul className='navbar-menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/product"></Link>
          </li> */}
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
      </nav>
</div>
</div>
</div>
<Outlet/>
</>
      
  )
}

export default Navbar
