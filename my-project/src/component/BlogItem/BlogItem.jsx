import React from 'react'
import { IoMdTime } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";



const BlogItem = () => {
    return (
        <div className="blogItem group border border-black p-1 rounded-lg">
            <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
                <img
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/8/1105_813/b-blog-6.jpg"
                    className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
                    alt="blog image"
                />
                <span className="flex  gap-1 bg-primary rounded-lg text-[12px] pl-1 pr-1 font-[550] justify-center text-white absolute bottom-[15px] right-[15px] z-50">
                    <IoMdTime />  28 FEB, 2025
                </span>
            </div>
            <div className="info py-4">
                <h2 className="text-[16px] font-[600] text-black">
                    <Link to="/" className="link">Nullam ullamcorper ornare molestie</Link>
                </h2>
                <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry....
                </p>
                <Link className="link font-[500] text-[14px] flex  gap-1">
                    Read More <IoIosArrowForward />
                </Link>
            </div>
        </div>
    )
}

export default BlogItem