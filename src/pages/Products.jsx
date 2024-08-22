import React from 'react'
import { Link, Outlet } from "react-router-dom"
const Products = () => {
    return (
        // <div className='flex justify-center items-center'>
    
          
        // </div>
        <>
        <nav className="category w-full">
          <div className="category_top">
            <div className="category_title">
              Kategoriyalar
            </div> 
          </div>
          <ul className="category_content  flex justify-center">
            {/* <li className='category_item mx-[10px] bg-slate-400'> */}
              <Link className="category_link" to="/products">
                <img className="category_img" src="../../images/products/Bütün/all.png" alt="" />     
                <div className="category_name">Hamısı</div>
              </Link>
            {/* </li> */}
            {/* <li className='category_item mx-[10px]'> */}
              <Link className="category_link" to="/products/computers">
                <img className="category_img" src="../../images/products/Notebook/Product 1/1.png" alt="" />     
                <div className="category_name">Notbuklar</div> 
              </Link>
              
            {/* </li> */}
            {/* <li className='category_item mx-[10px]'>  */}
              <Link className="category_link" to="/products/phones">
                <img className="category_img" src="../../images/products/Smartfonlar/Product 1/1.png" alt="" />
                <div className="category_name">Smartfonlar</div>
              </Link>
            {/* </li> */}
            {/* <li className='category_item mx-[10px]'>      */}
              <Link className="category_link" to="/products/cameras">
                <img className="category_img" src="../../images/products/Fotoaparatlar/Product 1/1.png" alt="" />
                <div className="category_name">Fotoaparatlar</div>
              </Link>
            {/* </li> */}
            {/* <li className='category_item mx-[10px]'> */}
              <Link className="category_link" to="/products/accessories">
                <img className="category_img" src="../../images/products/Aksesuarlar/Product1/1.png" alt="" />    
                <div className="category_name">Aksesuarlar</div>
              </Link>
            {/* </li> */}
            {/* <li className='category_item mx-[10px]'> */}
              <Link className="category_link" to="/products/games">
                <img className="category_img" src="../../images/products/Oyunlar/Product1/1.png" alt="" /> 
                <div className="category_name">Oyunlar</div>   
              </Link>
            {/* </li> */}
          </ul>
        </nav>
    
        <Outlet />
      </>
      )
}

export default Products