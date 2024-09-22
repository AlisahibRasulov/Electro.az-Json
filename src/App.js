import React, { useState } from "react";
import { Route, Routes, Navigate, useLocation} from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
// ? COMPONENTS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar"
// import Button from "./components/Button";



// ? PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Basket from "./pages/Basket";
import Like from "./pages/Like";

  // ? Products page
import AllProducts from "./pages/Products/AllProducts/AllProducts";
import Computers from "./pages/Products/Computers/Computers";
import Phones from "./pages/Products/Phones/Phones";
import Cameras from "./pages/Products/Cameras/Cameras";
import Accessories from "./pages/Products/Accessories/Accessories";
import Games from "./pages/Products/Games/Games"
import DiscountPages from "./pages/Products/Discount/DiscountPages";
import ProductDetail from "./pages/ProductDetail";

//? Brand-Products page
import Acer from "./pages/Brands/Acer/Acer"
import Asus from "./pages/Brands/Asus/Asus"
import Apple from "./pages/Brands/Apple/Apple"
import Canon from "./pages/Brands/Canon/Canon"
import Dell from "./pages/Brands/Dell/Dell"
import HP from "./pages/Brands/HP/HP"
import Huawei from "./pages/Brands/Huawei/Huawei"
import Lenovo from "./pages/Brands/Lenovo/Lenovo"
import Nikon from "./pages/Brands/Nikon/Nikon"
import Samsung from "./pages/Brands/Samsung/Samsung"
import Sony from "./pages/Brands/Sony/Sony"
import Xiaomi from "./pages/Brands/Xaiomi/Xiaomi"
import Products from "./pages/Products";

//? TestUser
// import Register from "./pages/TestUser/Register";
// import Login from "./pages/TestUser/Login";
// import Dashboard from "./pages/Dashboard"

// ? icons
// import {FooterTwitterIcon,SearchIcon,HeaderLikeHeartIcon,CardLikeHeartIcon,HeaderBasketIcon,CardBasketIcon} from "./svg";
// import Dropdown from "./components/Dropdown";


function App() {
  return (
    <div className="app">
      {/* <Header/>         
  <Routes>
    <Route exact path="/" element={<Navbar />}>
      <Route index={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      
      <Route path="/basket" element={<Basket />} />
      <Route path="/like" element={<Like />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/computers" element={<Computers />} />
      <Route path="/phones" element={<Phones />} />
      <Route path="/cameras" element={<Cameras />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/games" element={<Games />} />
      <Route path="/discount" element={<DiscountPages />} />
      
      <Route path="/acer" element={<Acer />} />
      <Route path="/asus" element={<Asus />} />
      <Route path="/apple" element={<Apple />} />
      <Route path="/Canon" element={<Canon />} />
      <Route path="/dell" element={<Dell />} />
      <Route path="/hp" element={<HP />} />
      <Route path="/huawei" element={<Huawei />} />
      <Route path="/lenovo" element={<Lenovo />} />
      <Route path="/nikon" element={<Nikon />} />
      <Route path="/samsung" element={<Samsung />} />
      <Route path="/sony" element={<Sony />} />
      <Route path="/xiaomi" element={<Xiaomi />} />


      <Route path="product-detail/:id" element={<ProductDetail />} />


    
    


  </Route> 
  {/* <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />  */}
        
{/* </Routes> */} 

<Routes>
    <Route path="/" element={<Header />}>
      <Route index={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />}>
        <Route index element={<AllProducts />} />
        <Route path="computers" element={<Computers />} />
        <Route path="phones" element={<Phones />} />
        <Route path="cameras" element={<Cameras />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="games" element={<Games />} />
      </Route>
      <Route path="/basket" element={<Basket />} />
      <Route path="/like" element={<Like />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/discount" element={<DiscountPages />} />
      <Route path="product-detail/:id" element={<ProductDetail />} />
      
      {/* <Route path="/products" element={<Products />} /> */}
    </Route>
    </Routes>
{/* <Sidebar/> */}
    {/* ? Test Dropdown peoducts */}
    {/* <ProductList/> */}
    {/* <ProductList selectedCategory={selectedCategory} /> */}
     <ScrollToTop smooth color="#D10024" className="z-[555555555px]"/>
      <p style={{ marginTop: "50vh" }}>bottom</p>
    <Footer/>
    </div>
  );
}

export default App;
