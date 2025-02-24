// Carousel.jsx
import React from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <button onClick={handlePrevClick} aria-label="Previous Image">Previous</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={handleNextClick} aria-label="Next Image">Next</button>
      </>
  );
};

export default Carousel;
