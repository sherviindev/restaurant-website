import React, { useState, useEffect } from "react";
import fish from "../../assets/images/fish.jpg";
import kabab from "../../assets/images/kabab-koobide.jpg";
import salad from "../../assets/images/salad-2-1.jpg";

const images = [fish, kabab, salad]; 

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-96 object-cover" // ارتفاع بیشتر
      />
      <div className="absolute inset-0 flex items-center justify-end pr-8"> {/* متن سمت راست */}
        <h2 className="text-white text-2xl font-bold text-right">
          ساعت کاری رستوران: <br />
          12 الی 15:30 <br />
          19 الی 22:30 <br />
          پلو شعبه دیگری ندارد
        </h2>
      </div>
    </div>
  );
};

export default Slider;
