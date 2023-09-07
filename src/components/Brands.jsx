import React from 'react'
import { imageData } from '../datas/BrandsData'

// ? "Animate On Scroll.
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Brands = () => {
  return (
   
     
    <div className='brands'>
         <div data-aos="fade-up"> 
    <div className="container">
      <h1>Top Brendlər</h1>
     <div className="brands-item">
       {imageData.map((brand)=>(
           <div className='brands-border' key={brand.id}>
               <img src={brand.image} alt="" />
           </div>
       ))}
     </div> 
   </div>
   </div>
   </div>
   
  )
}

export default Brands