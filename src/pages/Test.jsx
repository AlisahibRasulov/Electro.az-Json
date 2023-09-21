import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <div className="image-carousel">
      <img src={images[currentImage]} alt={`Image ${currentImage}`} />

      <button onClick={handlePrev}><img src={images[currentImage]} alt={`Image ${currentImage}`} /></button>
      <button onClick={handleNext}><img src={images[currentImage]} alt={`Image ${currentImage}`} /></button>
    </div>
  );
};

export default ImageCarousel;
