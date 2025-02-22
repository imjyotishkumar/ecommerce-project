import { Button } from '@mui/material'
import React, { useState } from 'react'
import {RiMenu2Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import '../style.css'
import Categorypanel from './Categorypanel';

const Topstrip = () => {
    const [isopenCatpan, setisopenCatpan] = useState(false)
    const opencategorypanel = ()=>{
        setisopenCatpan(true)
    }
  return (
    <div>
        <nav>
            <div className='container flex items-center justify-end'>
              <div className='col_1 hover:bg-gray-200 p-2 rounded-md flex items-center  mr-4'>
<Button className='!text-black gap-2' onClick={opencategorypanel}><RiMenu2Fill/>Shop By Categories</Button> <FaChevronDown />

              </div>
              <div className='col_2 w-[70%]'>
                <ul className='flex items-center gap-5'>
                    <li className='list-none'>
                        <Link to={`/`} className='link transition text-[14px] font-[500]'>Home</Link>
                    </li>
                    <li className='list-none'>
                        <Link to={`/`} className='link transition text-[14px] font-[500]'>Fashion</Link>
                    </li>
                    <li className='list-none'>
                        <Link to={`/`} className='link transition text-[14px] font-[500]'>Electronics</Link>
                    </li>
                    <li className='list-none'>
                        <Link to={`/`} className='link transition text-[14px] font-[500]'>Bags</Link>
                    </li>
                    <li className='list-none'>
                        <Link to={`/`} className='link transition text-[14px] font-[500]'>Footwear</Link>
                    </li>
                    <li className='list-none'>
                        <Link to={`/`} className='link transition text-[14px] font-[500]'>Groceries</Link>
                    </li>
                    <li className='list-none'>
                        <Link to={`/`} className='link transition text-[14px] font-[500]'>Beauty</Link>
                    </li>
                    <li className='list-none'>
                        <Link to={`/`} className='link transition text-[14px] font-[500]'>Wellness</Link>
                    </li>
                    <li className='list-none'>
                        <Link to={`/`} className='link transition text-[14px] font-[500]'>Jewellery</Link>
                    </li>
                </ul>

              </div>
              <div className='col3 flex gap-2 items-center'>
              <GoRocket className='text-[20px]' />
                <p className='text-[14px]'>Freee international delivery</p>


              </div>
            </div>
        </nav>
        <Categorypanel opencategorypanel={opencategorypanel} isopenCatpan={isopenCatpan} setisopenCatpan={setisopenCatpan} />
    </div>
  )
}

export default Topstrip