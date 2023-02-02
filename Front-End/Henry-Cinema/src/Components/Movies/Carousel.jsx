import "./Carousel.css";
import L from '../../assets/left-navigation.svg'
import R from '../../assets/right-navigation.svg'
import { useState } from "react";

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const numOfImages = 5;
  
    const handlePrev = () => {
      setCurrentImageIndex((currentImageIndex - numOfImages + images.length) % images.length);
    } ;
  
    const handleNext = () => {
      setCurrentImageIndex((currentImageIndex + numOfImages) % images.length);
    };

  return (
    <div className="carousel-container">
      <button className="btn-prev" onClick={handlePrev}>
       <img src ={L} />
      </button>
      <div className="carousel-container-img">
      {[...images, ...images].slice(currentImageIndex, currentImageIndex + numOfImages).map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
      </div>
      <button className="btn-next" onClick={handleNext}>
      <img src ={R} />
      </button>
    </div>
  );
};

export default Carousel;

