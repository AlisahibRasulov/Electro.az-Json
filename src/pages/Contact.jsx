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

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


//    const Contact = () => {
//         return (
//             <Carousel>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// ;

// export default Contact

// import React, { useState } from "react";
// import "./App.css";

// function Contact() {
//   const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const showImage = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Image ${index + 1}`}
//             style={{ display: index === currentIndex ? "block" : "none" }}
//           />
//         ))}
//       </div>
//       <div className="thumbnail-container">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Thumbnail ${index + 1}`}
//             className={`thumbnail ${index === currentIndex ? "active" : ""}`}
//             onClick={() => showImage(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Contact;


// import React from "react";
// import ImageCarousel from "./Test";
// // import "./App.css";

// const Contact = () => {
//   // Resimleri burada tanımlayın veya bir API'den alın
//   const images = [
//     "/images/image1.jpg",
//     "/images/image2.jpg",
//     "/images/image3.jpg",
//     // Diğer resimler
//   ];

//   return (
//     <div className="app">
//       <h1>Image Carousel</h1>
//       <ImageCarousel images={images} />
//     </div>
//   );
// };

// export default Contact;


import React from 'react';
import ContactForm from './ContactForm';
// import './styles.css'; // Import the CSS file

const ContactPage = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <ContactForm />

      {/* Other contact information */}
      <div>
        <p>Email: example@example.com</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Address: 123 Main Street, Cityville</p>
      </div>
    </div>
  );
};

export default ContactPage;
