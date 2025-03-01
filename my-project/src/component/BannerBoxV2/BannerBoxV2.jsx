import React from 'react'
import { Link } from'react-router-dom'

const BannerBoxV2 = (props) => {
    return (
        <div className="relative">
            <img src={`${props.img}`} alt="" className="h-[14vw] w-[25vw]" />
            <div className={`group absolute top-0 ${props.info === "left" ? "left-0 p-2" : "right-0 text-right p-3"}`}>
                <h4 className="p-2 text-[18px] font-[600]">Buy Men Bags with <br /> very low price</h4>
                <p className="mt-1 text-[18px] text-[#ff5252]">₹1500</p>
                <Link to="/" className="underline link mt-1 text-[18px]">SHOP NOW</Link>

            </div>
        </div>

    )
}

export default BannerBoxV2