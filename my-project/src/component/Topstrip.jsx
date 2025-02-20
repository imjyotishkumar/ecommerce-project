import React from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoRocket } from "react-icons/go";




const Topstrip = () => {
  return (
<>
<div className='flex mt-5 pl-5 pr-5 items-center justify-between'>
    <div className='flex gap-5 items-center'><HiOutlineMenuAlt1 className='text-2xl'/> <p className='font-semibold'>SHOP BY <br /> CATEGORIES</p> <RiArrowDropDownLine className='text-4xl font-medium cursor-pointer'/>

    </div>
    <div>
        <ul className='flex gap-5 font-semibold '>
            <li>Home</li>
            <li>Fashion</li>
            <li>Electronics</li>
            <li>Bags</li>
            <li>Footwear</li>
            <li>Groceries</li>
            <li>Beauty</li>
            <li>Wellness</li>
            <li>Jewellery</li>
        </ul>
    </div>
    <div className='flex items-center gap-2 text-[14px]'><GoRocket className=''/> <p>Free International <br /> Test <br />Delivery</p>
    </div>
</div>
</>
)
}

export default Topstrip