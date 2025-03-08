import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './style.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import {Collapse} from 'react-collapse';
import { Button } from '@mui/material';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';


const Sidebar = () => {
  const [isCategoryOpenFilter, setIsCategoryOpenFilter] = useState(false)
  const [isAvailOpenFilter, setIsAvailOpenFilter] = useState(false)
  const [isRatingOpenFilter, setIsRatingOpenFilter] = useState(false)


  return (
   <aside className='sidebar py-3'>
    <div className='box'>
  
      <h3 className='text-[14px] mb-3 flex items-center justify-between '>Shop By Category
         <Button onClick={()=>setIsCategoryOpenFilter(!isCategoryOpenFilter)} className='text-[rgba(0,0,0,0.8)]'>
          {
            isCategoryOpenFilter == true ?<RiArrowDropUpLine className='text-[30px] text-[rgba(0,0,0,0.8)]'/>: 
          <RiArrowDropDownLine className='text-[30px] text-[rgba(0,0,0,0.8)]' />

          }

          </Button>
      </h3>
    <Collapse isOpened={isCategoryOpenFilter}>
      <div className='scroll px-3 relative left-[10px]'>
      <FormControlLabel control={<Checkbox size='small' />} label="Fashion" className='w-full' />
      <FormControlLabel control={<Checkbox size='small' />} label="Electronics" className='w-full' />
      <FormControlLabel control={<Checkbox size='small' />} label="Bags" className='w-full' />
      <FormControlLabel control={<Checkbox size='small' />} label="Footwear" className='w-full' />
      <FormControlLabel control={<Checkbox size='small' />} label="Groceries" className='w-full' />
      <FormControlLabel control={<Checkbox size='small' />} label="Wellness" className='w-full' />
      <FormControlLabel control={<Checkbox size='small' />} label="Jewellery" className='w-full' />

      </div>
    </Collapse>
    </div>
    <div className='box mt-3'>
  
      <h3 className='text-[14px] mb-3 flex items-center justify-between '>Availability
         <Button onClick={()=>setIsAvailOpenFilter(!isAvailOpenFilter)} className='text-[rgba(0,0,0,0.8)]'>
          {
            isAvailOpenFilter == true ?<RiArrowDropUpLine className='text-[30px] text-[rgba(0,0,0,0.8)]'/>: 
          <RiArrowDropDownLine className='text-[30px] text-[rgba(0,0,0,0.8)]' />

          }

          </Button>
      </h3>
    <Collapse isOpened={isAvailOpenFilter}>
      <div className='scroll px-3 relative left-[10px]'>
      <FormControlLabel control={<Checkbox size='small' />} label="Fashion  (17)" className='w-full' />
      <FormControlLabel control={<Checkbox size='small' />} label="Electronics  (20)" className='w-full' />
      <FormControlLabel control={<Checkbox size='small' />} label="Bags  (40)" className='w-full' />
      
      </div>
    </Collapse>
    </div>
    <div className='box rangeslider mt-3'>
  
      <h3 className='text-[14px] mb-3 flex items-center justify-between '>Filter By Price
      </h3>
      <div>
      <RangeSlider min={100} max={10000} />
      <div className="flex pt-2 pb-2 priceRange">
  <span>
    From: <strong className="text-dark">Rs: {100}</strong>
  </span>
  <span className="ml-auto">
    From: <strong className="text-dark">Rs: {10000}</strong>
  </span>
</div>

      </div>
    
    </div>
    <div className='box mt-3'>
  
  <h3 className='text-[14px] mb-3 flex items-center justify-between '>Fiter By Rating
     <Button onClick={()=>setIsRatingOpenFilter(!isRatingOpenFilter)} className='text-[rgba(0,0,0,0.8)]'>
      {
        isRatingOpenFilter == true ?<RiArrowDropUpLine className='text-[30px] text-[rgba(0,0,0,0.8)]'/>: 
      <RiArrowDropDownLine className='text-[30px] text-[rgba(0,0,0,0.8)]' />

      }

      </Button>
  </h3>
<Collapse isOpened={isRatingOpenFilter}>
  <div className='scroll px-3 relative left-[10px] text-center'>
  <FormControlLabel control={<Checkbox size='small' />} label={<Rating name="read-only" value={5} readOnly className='' size='small' />} className='w-full' />       
  <FormControlLabel control={<Checkbox size='small' />} label={<Rating name="read-only" value={4} readOnly className='' size='small' />} className='w-full' />       
  <FormControlLabel control={<Checkbox size='small' />} label={<Rating name="read-only" value={3} readOnly className='' size='small' />} className='w-full' />       
  <FormControlLabel control={<Checkbox size='small' />} label={<Rating name="read-only" value={2} readOnly className='' size='small' />} className='w-full' />       
  <FormControlLabel control={<Checkbox size='small' />} label={<Rating name="read-only" value={1} readOnly className='' size='small' />} className='w-full' />       
  </div>
</Collapse>
</div>
   </aside>
  )
}

export default Sidebar