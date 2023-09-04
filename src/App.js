import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"
// ? COMPONENTS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
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



// ? icons
// import {FooterTwitterIcon,SearchIcon,HeaderLikeHeartIcon,CardLikeHeartIcon,HeaderBasketIcon,CardBasketIcon} from "./svg";
// import Dropdown from "./components/Dropdown";


function App() {

  // ? Test
//   //  const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
// const categories = ['COMPUTER', 'PHONE', 'CAMERAS', 'ACCESSORIES'];

// const handleCategoryChange = newCategory => {
//   setSelectedCategory(newCategory);
// };
  return (
    <div className="app">
      <Header/>
      
      {/*  Test  */}
      {/* <header className="App-header">
        <CategoryDropdown
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
      </header> */}
    
     
      {/* <Navbar /> */}
    
      {/* <div className="container">
      <Button btn-type='success'>Yess</Button>
      <Button btn-type='primary'icon={<FooterTwitterIcon/>}>No</Button>
      <div style={{width:"400px", marginBottom: "45px"}}>
        <Label
      label="Adinizi daxil edin" required/>
        <Input icon={<SearchIcon/>}/>
      </div>
      <div style={{width:"400px", marginBottom: "45px"}}>
        <Label
      label="Nomrenizi daxil edin"/>
        <Input/>
      </div>
      <div style={{width:"400px", marginBottom: "45px"}}>
        <Label
      label="Sifrenizi daxil edin" required/>
        <Input type="password"/>
      </div>
      <Alert type='warning' text="Istifadeci sehvdir"/>
      <Textarea disabled/>
      <CardLikeHeartIcon className="card-like"/>


      </div> */}
         {/* <Button btn-type='primary'icon={<FooterTwitterIcon/>}>No</Button> */}
{/* <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />

  <Route path="/basket" element={<Basket />} />

  <Route path="/all-products" element={<AllProducts />} />
  <Route path="/computers" element={<Computers />} />
  <Route path="/phones" element={<Phones />} />
  <Route path="/cameras" element={<Cameras />} />
  <Route path="/accessories" element={<Accessories />} />
  <Route path="/signup" element={<Signup />} /> 
</Routes> */}


         
  <Routes>
    <Route exact path="/" element={<Navbar />}>
      <Route index={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/like" element={<Like />} />

      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/computers" element={<Computers />} />
      <Route path="/phones" element={<Phones />} />
      <Route path="/cameras" element={<Cameras />} />
      <Route path="/accessories" element={<Accessories />} />


  </Route> 
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} /> 
        
        
</Routes>
    {/* ? Test Dropdown peoducts */}
    {/* <ProductList/> */}
    {/* <ProductList selectedCategory={selectedCategory} /> */}
    <Footer/>
    </div>
  );
}

export default App;
