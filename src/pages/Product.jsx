// // import React from 'react'
// // import React, { useState } from "react";
// // ? Test
// // import CategoryDropdown from '../components/Test';
// // import ProductList from '../components/Test2';
// // import { Outlet } from "react-router-dom";

// // const Product = () => {
// //     const [selectedCategory, setSelectedCategory] = useState('');
// // const categories = ['COMPUTER', 'PHONE', 'CAMERAS', 'ACCESSORIES'];

// // const handleCategoryChange = newCategory => {
// //   setSelectedCategory(newCategory);
// // };
//   // return (
//   //   <div>
//         {/* Test  */}
//       {/* <header className="App-header">
//         <CategoryDropdown
//           categories={categories}
//           selectedCategory={selectedCategory}
//           onSelectCategory={handleCategoryChange}
//         />
//       </header> */}
//          {/* ? Test Dropdown peoducts */}
//     {/* <ProductList/> */}
//     {/* <ProductList selectedCategory={selectedCategory} /> */}
//     {/* </div> */}
    
//   {/* )
// } */}

// // export default Product

// // import React from 'react'
// // import { Link, Outlet } from "react-router-dom"
// import React, { useState } from "react";
// import CategoryDropdown from '../components/Test';
// import ProductList from '../components/Test2';
// const Product = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const categories = ['COMPUTER', 'PHONE', 'CAMERAS', 'ACCESSORIES'];

//   const handleCategoryChange = newCategory => {
//   setSelectedCategory(newCategory);
// };
//   return (
//     <div>

//        {/* Test  */}
//       <header className="App-header">
//         <CategoryDropdown
//           categories={categories}
//           selectedCategory={selectedCategory}
//           onSelectCategory={handleCategoryChange}
//         />
//       </header>
//          {/* ? Test Dropdown peoducts */}
//     {/* <ProductList/> */}
//     <ProductList selectedCategory={selectedCategory} />
     
//       {/* <div className="product-tabs">
//           <Link className='li' to="/all-products">Bütün məhsullar</Link>
//           <Link className='li' to="/computers">Notbuklar</Link>
//           <Link className='li' to="/phones">Smartfonlar</Link>
//           <Link className='li' to="/cameras">Fotoaparatlar</Link>
//           <Link className='li' to="/accessories">Aksesuarlar</Link>
//       </div>
//       <Outlet/> */}
//     </div>
//   )
// }

// export default Product



// import React, { useState } from 'react';
// // import './App.css';
// import CategoryDropdown from '../components/Test';
// import ProductList from '../components/Test2';
// import AllProducts from './Products/AllProducts';


// function Product () {
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const categories = ['COMPUTER', 'PHONE', 'CAMERAS', 'ACCESSORIES'];

//   const handleCategoryChange = newCategory => {
//     setSelectedCategory(newCategory);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <AllProducts/>
//         <CategoryDropdown
//           categories={categories}
//           selectedCategory={selectedCategory}
//           onSelectCategory={handleCategoryChange}
//         />
//         <ProductList selectedCategory={selectedCategory} />
//       </header>
//     </div>
//   );
// }

// export default Product;


import React, { useState } from 'react';
import CategoryDropdown from '../components/Test';
import ProductList from '../components/Test2';
import AllProducts from './Products/AllProducts';


function Product() {
  const [selectedCategory, setSelectedCategory] = useState(null); // null olarak başlatın
  const categories = ['COMPUTER', 'PHONE', 'CAMERAS', 'ACCESSORIES'];

  const handleCategoryChange = newCategory => {
    setSelectedCategory(newCategory);
  };

  return (
    <div className="product">
      <header className="product-header">
        <CategoryDropdown
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        {selectedCategory !== null ? (
          <ProductList selectedCategory={selectedCategory} />
        ) : (
          <AllProducts />
        )}
      </header>
    </div>
  );
}

export default Product;
