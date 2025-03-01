import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';


const HomeSliderV2 = () => {
  return (
    <div className="HomeSliderV2">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737037698/1737037696161_New_Project_45.jpg"/>
          <div className="info absolute top-0 -right-[100%] opacity-0 transition-all duration-700 w-[50%] h-[100%] z-50 p-8 flex justify-center text-left flex-col">
            <h4 className="text-[18px] font-[500] w-full mb-3 relative -right-[100%] transition-all opacity-0">
              Big Saving Days Sale
            </h4>
            <h2 className="text-[30px] font-[700] w-full relative -right-[100%] transition-all opacity-0">
              Apple iphone 15 256GB fix
            </h2>

            <h3 className="flex items-center  gap-3 text-[18px] font-[500] w-full mt-3 mb-3 relative -right-[100%] transition-all opacity-0">
              Starting At Only{" "}
              <span
                className="text-primary text-[30px] font-[700]"
              >
                $59.00
              </span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737085794/1737085794016_New_Project_49.jpg" />
          <div className="info -right-[100%] opacity-0 transition-all duration-700 absolute top-0 w-[50%] h-[100%] z-50 p-8 flex justify-center text-left  flex-col">
            <h4 className="text-[18px] font-[500] relative -right-[100%] transition-all opacity-0 w-full mb-3">
              Big Saving Days Sale
            </h4>
            <h2 className="text-[30px] font-[700] w-full relative -right-[100%] transition-all opacity-0">
              Men Round Toe Lace-up Lightweight Pu Sneakears
            </h2>

            <h3 className="flex items-center  gap-3 text-[18px] font-[500] w-full mt-3 mb-3 relative -right-[100%] transition-all opacity-0">
              Starting At Only{" "}
              <span
                className="text-primary text-[30px] font-[700]"
              >
                $59.00
              </span>
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
  )
}

export default HomeSliderV2