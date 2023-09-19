// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='contact'>
//         <div className="container">
//             Bizimle Elaqe
//         </div>
//     </div>
//   )
// }

// export default Contact

import React from 'react'; import AliceCarousel from 'react-alice-carousel'; 
import "react-alice-carousel/lib/alice-carousel.css"; 

import "react-alice-carousel/lib/alice-carousel.css";  


import Img1 from "../img/products/Aksesuarlar/Product 1/1.jpg"
import Img2 from "../img/products/Aksesuarlar/Product 1/2.jpg"
import Img3 from "../img/products/Aksesuarlar/Product 1/3.jpg"
const Contact = () => {   const handleOnDragStart = e => e.preventDefault()   
return (     
<AliceCarousel mouseDragEnabled >       
<img src={Img1} onDragStart={handleOnDragStart} className="yours-custom-class" />      
 <img src={Img2} onDragStart={handleOnDragStart} className="yours-custom-class" />       
 <img src={Img3} onDragStart={handleOnDragStart} className="yours-custom-class" />       
 {/* <img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />       
 <img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" />      */}
</AliceCarousel>   ) }

export default Contact