import React from 'react'


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
                <li>Help center</li>
                <li>order tracking</li>
              </ul>
             </div>
        </div>
      </div>
    </div>
   </header>
  )
}

export default Header