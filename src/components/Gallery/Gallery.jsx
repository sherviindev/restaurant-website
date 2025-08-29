import React from "react";

const Gallery = () => {
  
  const images = [
    "https://polorest.ir/media/5.jpg",
    "https://polorest.ir/media/4.1.jpg",
    "https://polorest.ir/media/2.jpg",
    "https://polorest.ir/media/3.jpg",
    "https://polorest.ir/media/6.jpg",
    "https://polorest.ir/media/1.jpg",
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-16">
      {/* عنوان */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">گالری عکس رستوران ما</h1>
        <p className="text-gray-600">بهترین غذا برای شما و خانواده</p>
      </div>

      {/* گرید عکس‌ها */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
