import React from 'react'
import HomeSlider from '../component/HomeSlider/HomeSlider'
import HomeCatSlider from '../component/HomeCatSlider/HomeCatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../component/AdsBannerSlider/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../component/ProductSlider/ProductsSlider';


const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <div>
        <HomeSlider/>
        <HomeCatSlider/>

  <section className="bg-white mt-8 py-8">
  <div className="container">
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
    <ProductsSlider items={5}/>
  </div>
</section>



        <section className="py-16 bg-white">
  <div className="m-10">
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

        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default Home