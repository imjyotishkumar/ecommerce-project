import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";

const ProductsSlider = (props) => {
  return (
    <div className="productsSlider">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductItem/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
