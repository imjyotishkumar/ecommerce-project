import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { RxCross1 } from "react-icons/rx";

import { Button } from "@mui/material";
import "../style.css";
import "./style.css";
import CategoryCollapse from "../CategoryCollapse/CategoryCollapse";

const Categorypanel = (props) => {

  const toggleDrawer = (newOpen) => () => {
    props.setisopenCatpan(newOpen);
  };

  

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
         <CategoryCollapse/>
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
