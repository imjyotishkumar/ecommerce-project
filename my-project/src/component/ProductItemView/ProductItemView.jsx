import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";





const ProductItemView = (props) => {
    return (
        <div className="productItem shadow-lg flex gap-5   rounded-md overflow-hidden border border-2 ">
            <div className="group imgWrapper  w-[30%] rounded-md relative">
                <Link to={`/`}>
                <div className="img h-[150px] overflow-hidden ">
                <img
                    src={`${props.img}`}
                    className=""
                    alt="Product"
                />
                <img src="https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg" alt="" 
                className="w-full transition-all duration-1000 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                />
                </div>
               
                </Link>
                <span className="discount rounded-lg flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-md p-1 text-[12px] font-[500]">
                    -10%
                </span>

                <div className="actions transition-all duration-700  group-hover:top-[15px]  absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] opacity-0 group-hover:opacity-100">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white  hover:!bg-primary hover:text-white group">
                        <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
                        <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
                        <FaRegHeart className="text-[18px] !text-black group-hover:text-white" />
                    </Button>
                </div>


            </div>

            <div className="info">
                <h6 className="text-[23px] mt-3 text-[400]">
                    <Link to="/" className="link transition-all">Soylent Green</Link>
                </h6>
                <Link to="/" className="link mt-2">
                    <h3 className="text-[20px] transition-all hover:text-red-500 title mt-1 font-[500] text-[rgba(0,0,0,0.9)]">
                        Siril Georgette Pink Color Saree with Blouse piece
                    </h3>
                </Link>
                <Stack spacing={1} className="mt-2 ml-2">
                    <Rating name="size-small" defaultValue={4} readOnly />
                </Stack>

                <div className="flex items-center ml-3 mt-3 gap-4">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                        $58.00
                    </span>
                    <span className="price text-primary text-[15px] font-[600]">
                        $58.00
                    </span>
                   
                </div>
                <div className="ml-4 flex items-center gap-2 bg-[#ff5252] p-1 w-fit text-white font-bold mb-2 cursor-pointer mt-2 rounded-lg">
                <FaCartPlus />
                Add to cart 
                    </div>

            </div>
        </div>
    );
};

export default ProductItemView;
