import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';


const HomeSlider = () => {
    return (
        <>
            <div className='homeSlider'>
                <div className='container'>
                    <Swiper  spaceBetween={10} navigation={true} modules={[Navigation]} className="mySwiper sliderHome">
                        <SwiperSlide className='innerslider'>
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456371/1740456370502_New_Project_6.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456354/1740456353596_New_Project_27.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456281/1740456280463_New_Project_1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456309/1740456309257_New_Project_13.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456354/1740456353596_New_Project_27.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740456281/1740456280463_New_Project_1.jpg" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default HomeSlider