import React, { useState } from 'react';
import Image_1 from "../../assets/images/hero-1.png"
import Image_2 from "../../assets/images/hero-2.png"
import Image_3 from "../../assets/images/hero-3.png"
import "../../index.css";


const ImageList = [
    {
        id: 1,
        img: Image_1,
    },
    {
        id: 2,
        img: Image_2,
    },
    {
        id: 3,
        img: Image_3,
    },
]

const Hero = () => {

    const [imageId, setImageId] = useState(Image_1)

    return (

        <div className='bgImage min-h-[550px] sm:min-h-[600px] bg-gray-100
            flex justify-center items-center duration-200
        ' >
            <div className='container pb-8 sm:pb-0' >
                <div className='grid grid-cols-1 sm:grid-cols-2' >
                    {/*text section */}
                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center' >
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold' >
                            به پلو {" "}
                            <span className='text-yellow-500' >خوش آمدید</span>
                        </h1>
                        <p className='text-sm' >
                            
                          اینجا جاییه که عطر و طعم غذاهای خونگی ایرانی با کیفیت و عشق در هم آمیخته. هر لقمه‌ای پر از خاطره، تازگی و لذت.
                             
                        </p>
                        <div
                        >
                            <button className='bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105
                        duration-200 text-white py-2 px-4 rounded-full' >
                                ثبت سفارش
                            </button>
                        </div>


                    </div>

                    {/*image section */}
                    <div className='min-h-[450px] sm:min-h-[500px]  flex justify-center items-center
                    relative order-1 sm:order-2
                    ' >
                        <div className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center' >
                            <img
                                src={imageId}
                                className='w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin'
                            />
                        </div>

                        <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center
                            gap-4 absolute bottom-[0px] lg:-right-10 bg-white/35 rounded-full
                        ' >
                            {
                                ImageList.map((item) => (
                                    <img
                                        className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105'
                                        key={item.id}
                                        src={item.img}
                                        onClick={() => {
                                            setImageId(
                                                item.id === 1
                                                    ? Image_1
                                                    : item.id === 2
                                                        ? Image_2
                                                        : Image_3
                                            );
                                        }}
                                    />
                                ))
                            }
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;
