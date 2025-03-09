import React, { useState, useEffect } from "react";
import sejarah1 from '../assets/1.jpg'
import sejarah2 from "../assets/sej1.jpg";

const AutoImageSlider = () => {
  const images = [
    sejarah1,sejarah2
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); 


  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); 


    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // Durasi transisi
  };

  const handlePrevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }, 500); 
  };

  return (
    <div className=" w-full max-w-3xl mx-auto bg-black rounded-lg overflow-hidden">
   
      <div
        className={`flex transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full object-cover flex-shrink-0"
            style={{ transition: isAnimating ? "transform 0.5s ease-in-out" : "none" }}
          />
        ))}
      </div>

     
      {/* <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-yellow-500 text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-yellow-600"
      >
        &lt;
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-yellow-500 text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-yellow-600"
      >
        &gt;
      </button> */}

      
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-yellow-500" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default AutoImageSlider;
