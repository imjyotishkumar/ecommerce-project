import React, { useState } from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { LuMenu } from "react-icons/lu";
import ProductItem from '../../component/ProductItem/ProductItem';
import { IoGridSharp } from "react-icons/io5";
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemView from '../../component/ProductItemView/ProductItemView';
import Pagination from '@mui/material/Pagination';





const ProductListing = () => {

  const [itemview, setitemview] = useState('grid')

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <section className='py-8 bg-white'>
        <Breadcrumbs aria-label="breadcrumb" className='p-4 bg-gray-100'>
          <Link underline="hover" color="inherit" href="/" className='link'>
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className='link'
          >
            Fashion
          </Link>
        </Breadcrumbs>

        <div className='container flex gap-3 '>
          <div className='sideWrapper w-[20%] h-full bg-white p-3'>
            <Sidebar />

          </div>
          <div className="rightContent w-[80%]">
            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center">
                <Button onClick={() => setitemview('list')}
                  className={` !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]`}
                >
                  <LuMenu className={`${itemview==='list'?'!text-[#ff5252]':''} text-[rgba(0,0,0,0.7)]`} />
                </Button>
                <Button onClick={() => setitemview('grid')}
                  className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]"
                >
                  <IoGridSharp className={`${itemview==='grid'?'text-red-600 ':''}text-[rgba(0,0,0,0.7)]`} />
                </Button>
              </div>
              <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                There are 27 products.
              </span>

              <div className="col2 ml-auto flex items-center justify-end gap-3">
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  Sort By
                </span>

                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className='!text-[12px] !bg-white p-1 !text-[#000] !capitalize'
                >
                  Name A to Z
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Name A to Z</MenuItem>
                  <MenuItem onClick={handleClose}>Name Z to A</MenuItem>
                  <MenuItem onClick={handleClose}>Price Low to High</MenuItem>
                  <MenuItem onClick={handleClose}>Price High to Low</MenuItem>

                </Menu>
              </div>

            </div>

            <div className={`grid ${itemview === 'grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1'}  gap-4`}>
              {
                itemview === 'grid' ? <>
                  <ProductItem img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItem img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItem img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItem img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItem img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItem img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItem img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItem img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />

                  <ProductItem img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                </> : <>
                  <ProductItemView img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItemView img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItemView img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItemView img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItemView img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItemView img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItemView img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                  <ProductItemView img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />

                  <ProductItemView img='https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg' />
                </>
              }

            </div>
            <div className='mt-4 flex items-center justify-center'>
              <Pagination count={10} showFirstButton showLastButton />

            </div>
          </div>
        </div>

      </section >

    </div >
  )
}

export default ProductListing