import React from 'react'
import { IoGitCompareOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import { PiShoppingCart } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";




const Navbar = () => {
  return (
    <>
    <div className='flex justify-between mt-5 pl-5 pr-5'>
        <div>
            <img src="./assets/logo.jpg" alt="" />
        </div>
        <div className='flex items-center w-[30%] border rounded-md p-3 bg-gray-200 relative'>
        <input type="text" className=' focus:outline-none bg-gray-200' placeholder='Search for products' /> <IoSearchOutline className='text-2xl cursor-pointer absolute right-3'/>
        </div>
        <div>
            <ul className='flex gap-5'>
                <li>Login</li>
                <li>Register</li>
                <li><IoGitCompareOutline />
                </li>
                <li><BsHeart />
                </li>
                <li><PiShoppingCart />
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar