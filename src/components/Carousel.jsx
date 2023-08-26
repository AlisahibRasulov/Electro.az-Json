// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from 'reactstrap';

// const items = [
//   {
//     src: 'https://picsum.photos/id/123/1200/400',
//     altText: 'Slide 1',
//     caption: 'Slide 1',
//     key: 1,
//   },
//   {
//     src: 'https://picsum.photos/id/456/1200/400',
//     altText: 'Slide 2',
//     caption: 'Slide 2',
//     key: 2,
//   },
//   {
//     src: 'https://picsum.photos/id/678/1200/400',
//     altText: 'Slide 3',
//     caption: 'Slide 3',
//     key: 3,
//   },
// ];

// function CarouselImage(args) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <img src={item.src} alt={item.altText} />
//         <CarouselCaption
//           captionText={item.caption}
//           captionHeader={item.caption}
//         />
//       </CarouselItem>
//     );
//   });

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       {...args}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// }

// export default CarouselImage;


import React from 'react';
import { imageData } from '../datas/CarouselData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import './Carousel.css';

// import Img1 from "../img/carousel/Image1.jpg"
// import Img2 from "../img/carousel/Image2.jpg"
// // import Img3 from "../img/Image3.jpg"


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

const Carousel = () => {
  // const [imageDatas, setDatas] = useState(userData)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      {/* <div className="row">
        
      </div> */}
      <Slider className='card-slider' {...settings}>
        
        {imageData.map((item)=>(
        <div className="carousel-item" key={item.id}>
       <img src={item.image} alt="Slide 1" />
       <h1 className='carousel-title'>{item.title}</h1>
       <p className='carousel-desc'>{item.description}</p> </div>
        ))}
         
       
        {/* <div className="carousel-item">
          <img src={Img2} alt="Slide 2" />
          <h1>Sagol</h1>
        </div>
        <div className="carousel-item">
          <img src={Img3} alt="Slide 3" />
          <h1>Necesen</h1>
        </div> */}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// // import './Carousel.css';

// import Img1 from "../img/Image1.jpg"
// import Img2 from "../img/Image2.jpg"
// import Img3 from "../img/Image3.jpg"

// const MyCarousel = () => {
//   return (
//     <Carousel
//       showArrows={true}
//       infiniteLoop={true}
//       autoPlay={true}
//       interval={3000}
//       showThumbs={false}
//     >
//       <div className="carousel-item">
//         <img src={Img1} alt="Slide 1" />
//         <p className="legend">Legend 1</p>
//       </div>
//       <div className="carousel-item">
//         <img src={Img2} alt="Slide 2" />
//         <p className="legend">Legend 2</p>
//       </div>
//       <div className="carousel-item">
//         <img src={Img3} alt="Slide 3" />
//         <p className="legend">Legend 3</p>
//       </div>
//       {/* Add more slides as needed */}
//     </Carousel>
//   );
// };

// export default MyCarousel;