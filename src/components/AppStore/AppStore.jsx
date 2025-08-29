import React from 'react';
import AppStoreImg from "../../assets/images/app_store.png"
import PlayStore from "../../assets/images/play_store.png"
import Gif from '../../assets/images/mobile_bike.gif'


const AppStore = () => {
    return (
        <div className='bg-gray-100 py-14' >
            <div className='container' >
                <div className='grid sm:grid-cols-2 grid-cols-1 items-center gap-4' >
                    <div className='space-y-6 max-w-xl mx-auto' >
                        <h1 className='text-2xl text-center sm:text-4xl text-gray-500' >
                            Andriod ,IOS اپلیکیشن پلو برای
                        </h1>
                        <div className='flex flex-wrap justify-center sm:justify-start items-center ' >
                            <img
                            src={AppStoreImg}
                            className='max-w-[250px] sm:max-w-[180px] md:max-[200px] '
                            />
                              <img
                            src={PlayStore}
                            className='max-w-[250px] sm:max-w-[180px] md:max-[300px]'
                            />
                        </div>
                    </div>
                    <div className='bg-white' >
                        <img src={Gif} className='w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply'  />
                    </div>
                </div>
            </div >
        </div>
    );
}

export default AppStore;
