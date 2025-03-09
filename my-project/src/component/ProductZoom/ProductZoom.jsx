import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './style.css'

const ProductZoom = () => {
    return (
        <>
            <div>

                <div className="flex gap-5">

                    <div  >
                        <Swiper
                            direction={'vertical'}
                            slidesPerView={4}
                            spaceBetween={10}
                            navigation={true}
                            modules={[Navigation]}
                            className='zoomProductSliderThumbs absolute'

                        >
                            <SwiperSlide>
                                <div className="item rounded-md overflow-hidden cursor-pointer group">
                                    <img
                                        src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
                                        className="w-full transition-all group-hover:scale-105"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item rounded-md overflow-hidden cursor-pointer group">
                                    <img
                                        src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                                        className="w-full transition-all group-hover:scale-105"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item rounded-md overflow-hidden cursor-pointer group">
                                    <img
                                        src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg"
                                        className="w-full transition-all group-hover:scale-105"
                                    />
                                </div>
                            </SwiperSlide>



                        </Swiper>
                    </div>

                    <div className="zoomContainer w-[85%] h-[320px] overflow-hidden">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            navigation={false}
                        >
                            <SwiperSlide>
                                <InnerImageZoom
                                    zoomType="hover"
                                    zoomScale={1}
                                    src={
                                        "https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
                                    }
                                />
                            </SwiperSlide>
                         </Swiper>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ProductZoom