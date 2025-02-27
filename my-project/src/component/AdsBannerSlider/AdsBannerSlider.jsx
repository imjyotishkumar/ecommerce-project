import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import BannerBox from "../BannerBox/BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className=" mt-10 w-full">
      <Swiper
        slidesPerView={props.item}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        
          <SwiperSlide>
            <BannerBox img={`https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030797/1737030796086_banner1.webp`} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={`https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030816/1737030811455_banner5.webp`}/>
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={`https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030829/1737030827759_banner2.webp`} />
            </SwiperSlide>
            <SwiperSlide>
            <BannerBox img={`https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030844/1737030841161_banner4.jpg`} />
            </SwiperSlide>
            <SwiperSlide>
            <BannerBox img={`https://res.cloudinary.com/duqoh8gf5/image/upload/v1737030862/1737030857998_banner6.webp`} />
            </SwiperSlide>
                   
        
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
