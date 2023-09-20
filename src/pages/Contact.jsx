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

// import React from 'react'; import AliceCarousel from 'react-alice-carousel'; 
// import "react-alice-carousel/lib/alice-carousel.css"; 

// import "react-alice-carousel/lib/alice-carousel.css";  


// import Img1 from "../img/products/Aksesuarlar/Product 1/1.jpg"
// import Img2 from "../img/products/Aksesuarlar/Product 1/2.jpg"
// import Img3 from "../img/products/Aksesuarlar/Product 1/3.jpg"
// const Contact = () => {   const handleOnDragStart = e => e.preventDefault()   
// return (     
// <AliceCarousel mouseDragEnabled >       
// <img src={Img1} onDragStart={handleOnDragStart} className="yours-custom-class" />      
//  <img src={Img2} onDragStart={handleOnDragStart} className="yours-custom-class" />       
//  <img src={Img3} onDragStart={handleOnDragStart} className="yours-custom-class" />       
//  {/* <img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />       
//  <img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" />      */}
// </AliceCarousel>   ) }

// export default Contact

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


   const Contact = () => {
        return (
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
;

export default Contact