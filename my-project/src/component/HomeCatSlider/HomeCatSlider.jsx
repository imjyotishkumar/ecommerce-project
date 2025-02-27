import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
    return (
        <div className='mt-5'>
            <div className='homeCatSlider'>

                <Swiper
                    slidesPerView={8}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper w-[100%]"
                >
                    <SwiperSlide>
                        <Link to={`/`}>
                        <div className="item py-3 px-3 bg-white text-center flex items-center justify-center flex-col">
                            <img
                                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png"
                                className="transition-all"
                            />
                            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`}>
                        <div className="item py-3 px-3 bg-white text-center flex items-center justify-center flex-col">
                            <img
                                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png"
                                className="transition-all"
                            />
                            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`}>
                        <div className="item py-3 px-3 bg-white text-center flex items-center justify-center flex-col">
                            <img
                                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png"
                                className="transition-all"
                            />
                            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`}>
                        <div className="item py-3 px-3 bg-white text-center flex items-center justify-center flex-col">
                            <img
                                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png"
                                className="transition-all"
                            />
                            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`}>
                        <div className="item py-3 px-3 bg-white text-center flex items-center justify-center flex-col">
                            <img
                                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png"
                                className="transition-all"
                            />
                            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`}>
                        <div className="item py-3 px-3 bg-white text-center flex items-center justify-center flex-col">
                            <img
                                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png"
                                className="transition-all"
                            />
                            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`}>
                        <div className="item py-3 px-3 bg-white text-center flex items-center justify-center flex-col">
                            <img
                                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png"
                                className="transition-all"
                            />
                            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`}>
                        <div className="item py-3 px-3 bg-white text-center flex items-center justify-center flex-col">
                            <img
                                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png"
                                className="transition-all"
                            />
                            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`}>
                        <div className="item py-3 px-3 bg-white text-center flex items-center justify-center flex-col">
                            <img
                                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png"
                                className="transition-all"
                            />
                            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`}>
                        <div className="item py-3 px-3 bg-white text-center flex items-center justify-center flex-col">
                            <img
                                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png"
                                className="transition-all"
                            />
                            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
                        </div>
                        </Link>
                    </SwiperSlide>

                   

                </Swiper>
            </div>

        </div>
    )
}

export default HomeCatSlider