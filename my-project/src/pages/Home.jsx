import React from 'react'
import HomeSlider from '../component/HomeSlider/HomeSlider'
import HomeSliderV2 from '../component/HomeSliderV2/HomeSliderV2'
import BannerBoxV2 from '../component/BannerBoxV2/BannerBoxV2'
import HomeCatSlider from '../component/HomeCatSlider/HomeCatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../component/AdsBannerSlider/AdsBannerSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../component/ProductSlider/ProductsSlider';
import BlogItem from '../component/BlogItem/BlogItem';


const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = ( newValue) => {
      setValue(newValue);
    };
  
  return (
    <div>
       <HomeSlider/>

         <section className="">
         
          <div className=" flex items-center ml-8 -mb-16 mt-12 gap-5">
          <div className='part1 h-[38vw] w-[60%] '>
            <HomeSliderV2/>
          </div>
          <div className="part2 flex flex-col gap-5 h-[38vw] ">
            <BannerBoxV2 info="left" img="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737020760/1737020756772_New_Project_1.png"/>
            <BannerBoxV2 info="right" img="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737020917/1737020916820_New_Project_52.jpg"/>

          </div>
          </div>
          
      
         </section>

        <HomeCatSlider/>

  <section className="bg-white mt-8 py-8">
  <div className="m-5">
    <div className="flex items-center justify-between">
      <div className="leftSec">
        <h2 className="text-xl font-semibold">Popular Products</h2>
        <p className="text-base font-normal">
          Do not miss the current offers until the end of March.
        </p>
      </div>
      <div className='rightSec '>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Groceries" />
        <Tab label="Jewellery" />
      
      </Tabs>
    </Box>

      </div>
    </div>
    <ProductsSlider items={6}/>
  </div>
</section>



        <section className="py-6 bg-white">
  <div className="ml-10 mr-10">
    <div className="freeShipping w-full py-2 p-4 border border-[#ff5252] flex items-center justify-between rounded-md">
      <div className="col1 flex items-center justify-between gap-4">
        <LiaShippingFastSolid className="text-[50px]" />
        <span className="text-[20px] font-[600]">Free Shipping</span>
      </div>
      <div className='col2 text-[14px] '>
<p>Free delivery now on your first order </p>
      </div>
      <div className='col3 font-bold text-[30px]'>
<h1>- ONLY ₹1000*</h1>
      </div>
    </div>

<AdsBannerSlider item={4}/>

  </div>
</section>

<section className='py-4 bg-white'>
    <div className="m-5">
        <h2 className='text-[20px] font-[600]'>Latest Products</h2>
        <ProductsSlider items={6}/>
    <AdsBannerSlider item={3}/>
    </div>

</section>

<section className='py-4 bg-white'>
    <div className="m-5">
        <h2 className='text-[20px] font-[600]'>Feature Products</h2>
        <ProductsSlider items={6}/>
        <AdsBannerSlider item={3}/>

    </div>

</section>

<section className='py-4 bg-white bolgSection'>
<h2 className='text-[20px] m-5  font-[600]'>From the Blog</h2>

  <div className=' m-5'>
  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="blogSlider w-[100%]"
                >
                <SwiperSlide>
             <BlogItem/>
                </SwiperSlide>
                <SwiperSlide>
             <BlogItem/>
                </SwiperSlide>
                <SwiperSlide>
             <BlogItem/>
                </SwiperSlide>
                <SwiperSlide>
             <BlogItem/>
                </SwiperSlide>
                <SwiperSlide>
             <BlogItem/>
                </SwiperSlide>
                </Swiper>

  </div>

</section>



        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default Home