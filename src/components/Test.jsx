// import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import axios from "axios";
// import Button from "./Button";
// import {CardLikeHeartIcon} from "../svg"
// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     // fetch('http://35.184.181.250:9096/api/computer-product/category/all?categories=' + selectedCategory)
//     //   .then(response => response.json())
//     //   .then(data => setProducts(data))
//     //   .catch(error => console.error('Error fetching products:', error));
//     // axios(`http://35.184.181.250:9096/api/computer-product/category/all?categories=${selectedCategory}`).then((res)=>{
//     //     console.log(res) 
//     //     // setProducts(res.data)
//     //   })
//     if (selectedCategory) {
//         axios.get(`http://35.184.181.250:9096/api/computer-product/category/all?categories=${selectedCategory}`)
//           .then(response => {
//             console.log(response.data); 
//             setProducts(response.data);
//           })
//           .catch(error => {
//             console.error('Error fetching products:', error);
//           });
//       }
//   }, [selectedCategory]);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <div>
//         <label>Select Category:</label>
//         <select
//           value={selectedCategory}
//           onChange={e => setSelectedCategory(e.target.value)}
//         >
//           <option value="">Select a category</option>
//           <option value="COMPUTER">COMPUTER</option>
//           <option value="PHONE">PHONE</option>
//           <option value="CAMERAS">CAMERAS</option>
//           <option value="ACCESSORIES">ACCESSORIES</option>
//           {/* Add more categories here */}
//         </select>
//       </div>
     
     
//       {/* <div className='dropdown-cart'>
//         {products.map(product => (
//           <div key={product.id}>
//             <h1>{product.title}</h1>
//             <span>{product.price}</span>
//             <img src={product.image} alt="" /> 
//           </div>
//         ))}
//       </div> */}



// {/* <div className="dropdown-cards_content">
//       {products.map((item)=>(
//         <div className='card'>
//       <div className="card-view">
//         <Button>Add Cart</Button>
//         <Button>Details</Button>
//         <CardLikeHeartIcon/>
//       </div>
//       <img src={item.images[0].imagePath} alt="" />
//       <h2>{item.title.slice(0,10)}</h2>
    
//         </div>
      
//       ))}
//     </div> */}
//     </div>
//   );
// };

// export default ProductList;


// // const CategoryDropdown = ({ categories, selectedCategory, onSelectCategory }) => {
// //   return (
// //     <>
// //     <div>
// //       <label>Select Category: </label>
// //       <select value={selectedCategory} onChange={event => onSelectCategory(event.target.value)}>
// //         {categories.map(category => (
// //           <option  key={category} value={category}>
// //             {category}
// //           </option>
// //         ))}
// //       </select>
// //     </div>
// //     <Outlet/>
// //     </>
// //   );
// // };

// // export default CategoryDropdown;


import React from 'react';

const CategoryDropdown = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div>
      <label>Select Category: </label>
      <select value={selectedCategory} onChange={event => onSelectCategory(event.target.value)}>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
