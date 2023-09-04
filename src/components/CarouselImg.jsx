import React from 'react';
import { Carousel } from 'antd';

import Img1 from "../img/carousel/Image1.jpg"
import Img2 from "../img/carousel/Image2.jpg"

// export const imageData = [
//   {
//       image:"https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       title:"Kampaniyalar",
//       description:"Yay kompaniyamiz davam edir"
//   },
//   {
//       image:Img2,
//       title:"Kampaniyalar",
//       description:"Yay kompaniyamiz davam edir"
//   },
//   {
//       image:Img1,
//       title:"Kampaniyalar",
//       description:"Yay kompaniyamiz davam edir"
//   }

// ]

const contentStyle = {
  marginTop: "20px",
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const imageStyle = {
    width: "100%",
    height: "100%",
    // objectFit:"cover"
}
 
const CarouselImg = () => {
//   const onChange = (currentSlide) => {
//     console.log(currentSlide);
//   };
  return (
    <div className="container">
  <Carousel autoplay>
    <div className="carousel-item">
    <div className='carousel-content'>
    <img className='carousel-image' src={Img2} alt=""/>
      <h3 className='carousel-text'>
        Kampaniyalar
      </h3>
    </div>
    </div>
    
    {/* <div className='carosuel-content' style={contentStyle}>
    <img className='carousel-image' src={Img2} alt="" style={imageStyle}/>
      <h3 className='carousel-text'>
        Kampaniyalar
      </h3>
    </div> */}
    {/* <div>
      <h3 style={contentStyle}>
      <img src={Img1} alt="" style={imageStyle}/>
      </h3>
    </div> */}
    {/* <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div> */}
  </Carousel>
    </div>
    
  );
};
export default CarouselImg;