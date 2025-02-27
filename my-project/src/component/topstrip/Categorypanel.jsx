import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { RxCross1 } from "react-icons/rx";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../style.css";
import "./style.css";

const Categorypanel = (props) => {

  const [submeunIndex, setsubmenuIndex] = useState(null);
  const [innersubmeunIndex, setinnersubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setisopenCatpan(newOpen);
  };

  const opensubmenu = (index) => {
    if (submeunIndex == index) {
      setsubmenuIndex(null)
    } else {
      setsubmenuIndex(index)
    }
  }

  const openinnersubmenu = (index) => {
    if (innersubmeunIndex === index) {
      setinnersubmenuIndex(null)
    } else {
      setinnersubmenuIndex(index)
    }
  }


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <div className="p-3">
        <div className="flex justify-between">
          <h3 className="font-semibold">Shop by Categories</h3>
          <Button onClick={toggleDrawer(false)}>
            <RxCross1 className="text-black cursor-pointer" />
          </Button>
        </div>
        <div className="scroll">
          <ul className="w-full">
            <li className="list-none flex items-center relative flex-col">
              <Link to={`/`} className="w-full">
                <Button className="w-full !text-left cursor-pointer !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"> Fashion </Button>
              </Link>
              {
                submeunIndex === 0 ? (
                  <FiMinusSquare className="absolute cursor-pointer top-[10px] right-[15px]" onClick={() => opensubmenu(0)} />
                ) :
                  (
                    <FaRegSquarePlus className="absolute cursor-pointer top-[10px] right-[15px]" onClick={() => opensubmenu(0)} />
                  )
              }

              {
                submeunIndex === 0 &&
                <ul className="submenu w-full pl-3">
                  <li className="list-none relative">
                    <Link to={`/`} className="w-full">
                      <Button className="w-full !text-left cursor-pointer !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"> Apparel </Button>
                    </Link>
                    {
                      innersubmeunIndex === 0 ? (
                        <FiMinusSquare className="absolute cursor-pointer top-[10px] right-[15px]" onClick={() => openinnersubmenu(0)} />

                      ) : (
                        <FaRegSquarePlus className="absolute cursor-pointer top-[10px] right-[15px]" onClick={() => openinnersubmenu(0)} />

                      )

                    }

                    {
                      innersubmeunIndex === 0 && <ul className=" inner_submenu w-full pl-3">
                        <li className="list-none relative mb-2">
                          <Link to={`/`} className="link w-full !text-left cursor-pointer !justify-start !px-3 transition text-[14px]"> Apparel </Link>
                        </li>
                        <li className="list-none relative mb-2">
                          <Link to={`/`} className="link w-full !text-left cursor-pointer !justify-start !px-3 transition text-[14px]"> Apparel </Link>
                        </li>
                        <li className="list-none relative mb-2">
                          <Link to={`/`} className="link w-full !text-left cursor-pointer !justify-start !px-3 transition text-[14px]"> Apparel </Link>
                        </li>
                        <li className="list-none relative mb-2">
                          <Link to={`/`} className="link w-full !text-left cursor-pointer !justify-start !px-3 transition text-[14px]"> Apparel </Link>
                        </li>
                      </ul>
                    }

                  </li>
                </ul>
              }
            </li>

            <li className="list-none flex items-center relative flex-col">
              <Link to={`/`} className="w-full">
                <Button className="w-full !text-left cursor-pointer !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"> Fashion </Button>
              </Link>
              {
                submeunIndex === 1 ? (
                  <FiMinusSquare className="absolute cursor-pointer top-[10px] right-[15px]" onClick={() => opensubmenu(1)} />
                ) :
                  (
                    <FaRegSquarePlus className="absolute cursor-pointer top-[10px] right-[15px]" onClick={() => opensubmenu(1)} />
                  )
              }

              {
                submeunIndex === 1 &&
                <ul className="submenu w-full pl-3">
                  <li className="list-none relative">
                    <Link to={`/`} className="w-full">
                      <Button className="w-full !text-left cursor-pointer !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"> Apparel </Button>
                    </Link>
                    {
                      innersubmeunIndex === 1 ? (
                        <FiMinusSquare className="absolute cursor-pointer top-[10px] right-[15px]" onClick={() => openinnersubmenu(1)} />

                      ) : (
                        <FaRegSquarePlus className="absolute cursor-pointer top-[10px] right-[15px]" onClick={() => openinnersubmenu(1)} />

                      )

                    }

                    {
                      innersubmeunIndex === 1 && <ul className=" inner_submenu w-full pl-3">
                        <li className="list-none relative mb-2">
                          <Link to={`/`} className="link w-full !text-left cursor-pointer !justify-start !px-3 transition text-[14px]"> Apparel </Link>
                        </li>
                        <li className="list-none relative mb-2">
                          <Link to={`/`} className="link w-full !text-left cursor-pointer !justify-start !px-3 transition text-[14px]"> Apparel </Link>
                        </li>
                        <li className="list-none relative mb-2">
                          <Link to={`/`} className="link w-full !text-left cursor-pointer !justify-start !px-3 transition text-[14px]"> Apparel </Link>
                        </li>
                        <li className="list-none relative mb-2">
                          <Link to={`/`} className="link w-full !text-left cursor-pointer !justify-start !px-3 transition text-[14px]"> Apparel </Link>
                        </li>
                      </ul>
                    }



                  </li>
                </ul>


              }



            </li>

          </ul>
        </div>

      </div>
    </Box>
  );

  return (
    <Drawer open={props.isopenCatpan} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default Categorypanel;
