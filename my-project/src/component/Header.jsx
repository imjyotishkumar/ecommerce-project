import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
   <header>
    <div className="top-strip py-2">
      <div className="container">
        <div className="flex justify-between item-center">
             <div className="col1 w-[50%] font-medium">
                <p>Get up to 50% off new season styles, limited time only</p>
             </div>
             <div>
              <ul className='flex gap-5'>
                <li className='hover:text-red-500'> <Link to={'/help-center'}> Help center</Link></li>
                <li className='hover:text-red-500'> <Link to={'/order-tracking'}> order tracking </Link></li>
              </ul>
             </div>
        </div>
      </div>
    </div>
   </header>
  )
}

export default Header