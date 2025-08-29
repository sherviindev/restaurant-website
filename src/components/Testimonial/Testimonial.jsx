import React from "react";
import Slider from "react-slick";
import img from "../../assets/images/pr-1.jpg"
import img2 from "../../assets/images/pr-2.jpg"
import img3 from "../../assets/images/pr-3.jpg"

const testimonialData = [
  {
    id: 1,
    name: "سارینا",
    text: "سرویس‌دهی سریع و محیط خیلی دلنشین بود. حتما دوباره میام   ",
    img: img,
  },
  {
    id: 1,
    name: "شروین ",
    text: " طعم غذاها مثل دست‌پخت مامانمونه، خیلی خونگی و خوشمزه ",
    img: img2,
  },
  {
    id: 1,
    name: "عسل",
    text: " یکی از بهترین رستوران‌هایی که تا حالا رفتم، کیفیت غذاها فوق‌العاده است ",
    img: img3,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">نظرات شما</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                     
                        <img
                          className="rounded-full  mx-auto w-[100px] h-[100px] object-cover "
                          src={data.img}
                          alt=""
                        />
                     
                      <p className="text-gray-100 text-sm">{data.text}</p>
                      <h1 className="text-xl text-yellow-500 font-bold">{data.name}</h1>
                      <p className="text-gray-200 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;