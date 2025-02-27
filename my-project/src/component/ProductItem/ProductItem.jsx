import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ProductItem = () => {
  return (
    <div className="productItem rounded-md overflow-hidden">
      <div className="imgWrapper w-[100%] h-[250px] overflow-hidden rounded-md">
        <img
src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"      
    className="w-full"
          alt="Product"
        />
      </div>

      <div className="info p-3">
        <h6 className="text-[13px]">
          <Link to="/" className="link">Soylent Green</Link>
        </h6>
        <Link to="/" className="link">
        <h3 className="text-[14px] hover:text-red-500 title mt-1 font-[500] text-[rgba(0,0,0,0.9)]">
          Siril Georgette Pink Color Saree with Blouse piece
        </h3>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
