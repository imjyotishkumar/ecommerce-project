import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { Button } from "@mui/material";

import "../style.css";
import "./style.css";

const Categorypanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setisopenCatpan(newOpen);
  };

  // State to track which category is open
  const [openCategories, setOpenCategories] = useState({});
  const [openSubCategories, setOpenSubCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleSubCategory = (subcategory) => {
    setOpenSubCategories((prev) => ({
      ...prev,
      [subcategory]: !prev[subcategory],
    }));
  };

  const categories = [
    {
      name: "Fashion",
      subcategories: [
        {
          name: "Men",
          items: [
            { name: "T-shirt", link: "/tshirt" },
            { name: "Jeans", link: "/jeans" },
          ],
        },
      ],
    },
    {
      name: "Electronics",
      subcategories: [
        {
          name: "Mobile",
          items: [
            { name: "iPhone", link: "/iphone" },
            { name: "Samsung", link: "/samsung" },
          ],
        },
      ],
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="p-3">
        <div className="flex justify-between">
          <h3 className="font-semibold">Shop by Categories</h3>
          <Button onClick={toggleDrawer(false)}>
            <RxCross1 className="text-black" />
          </Button>
        </div>

        <div className="mt-5">
          <ul className="w-full">
            {categories.map((category, index) => (
              <li key={index} className="font-semibold catgorylist">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCategory(category.name)}
                >
                  {category.name}
                  {openCategories[category.name] ? (
                    <CiSquareMinus />
                  ) : (
                    <CiSquarePlus />
                  )}
                </div>

                <ul
                  className={`${
                    openCategories[category.name] ? "" : "hidden"
                  } mt-2 ml-4`}
                >
                  {category.subcategories.map((sub, subIndex) => (
                    <li key={subIndex} className="text-[15px] catgorylist">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSubCategory(sub.name)}
                      >
                        {sub.name}
                        {openSubCategories[sub.name] ? (
                          <CiSquareMinus />
                        ) : (
                          <CiSquarePlus />
                        )}
                      </div>

                      <ul
                        className={`${
                          openSubCategories[sub.name] ? "" : "hidden"
                        } ml-4`}
                      >
                        {sub.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="ml-4">
                            <Link
                              to={item.link}
                              className="text-[14px] font-[400] link"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
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
