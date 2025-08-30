import React from 'react';
import img from "../../assets/images/image-4.png";
import { IoFastFood } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
    return (
        <>
            {/* بخش بالای صفحه */}
            <div id="about" className="py-16 bg-gray-50"></div>

            {/* بخش اصلی بنر */}
            <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 bg-white'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                        {/* تصویر */}
                        <div className='flex justify-center'>
                            <img 
                                src={img} 
                                alt="رستوران پلو" 
                                className='max-w-[430px] w-full mx-auto drop-shadow-2xl rounded-lg' 
                            />
                        </div>

                        {/* متن و آیکون‌ها */}
                        <div className='flex flex-col justify-center gap-6 sm:pt-0 text-center sm:text-right'>
                            <h1 className='font-bold text-4xl'> رستوران پلو</h1>
                            <p className='text-gray-700 leading-relaxed'>
                                رستوران پلو از سال 1390 در استان زنجان با مدیریت بهرام فتح اللهی آغاز به کار کرد. 
                                خط مشی رستوران پلو همیشه بر مدار رضایت مشتری، غذای سالم، مواد اولیه درجه یک و پخت ایرانی بوده است. 
                                پلو در جهت رضایت مشتریان از اواسط سال 1400 به محل جدید منتقل گردید و هیچ شعبه دیگری ندارد. 
                                بهرام فتح اللهی مدیریت و سرآشپز رستوران از سال 1380 در ادامه سنت خانوادگی خود در امر آشپزی و رستوران داری فعالیت می‌کند.
                            </p>

                            {/* آیکون‌ها */}
                            <div className='flex justify-center sm:justify-start gap-6'>
                                <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-500 text-white' />
                                <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-500 text-white' />
                                <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-500 text-white' />
                            </div>

                            {/* دکمه */}
                            <div className='flex justify-center sm:justify-start'>
                                <button className='bg-gradient-to-r from-yellow-400 to-yellow-500
                                    text-white py-2 px-6 rounded-full flex items-center gap-3 hover:scale-105 transition-transform'>
                                    ثبت سفارش
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
