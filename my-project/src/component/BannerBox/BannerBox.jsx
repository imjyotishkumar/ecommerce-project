import React from 'react'

const BannerBox = (props) => {
  return (
    <div>
        <div className="box w-full group overflow-hidden">
              <img src={`${props.img}`} alt="banner" className="transition-all group-hover:scale-105 group-hover:rotate-2 w-full" />
            </div>
    </div>
  )
}

export default BannerBox