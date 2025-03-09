import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import Tooltip from '@mui/material/Tooltip';
import { GoHeart } from "react-icons/go";
import { IoGitCompareOutline } from "react-icons/io5";


import './style.css';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between mt-5 pl-5 pr-5'>
        <div>
            <Link to={'/'}>
            <img src="./assets/logo.jpg" alt="" /> </Link>
        </div>
        <div className='col2 w-[40%]'>
            <SearchBox/>
        </div>
        <div>
            <ul className='flex items-center gap-5 '>
                <li className=''>
                <Link to={'/productlisting'} className='hover:text-red-500'>Login</Link> | 
                <Link to={'register'} className='hover:text-red-500'> Register</Link>
                </li>
                <li>
                <Tooltip title="Compare">
                <IconButton>
      <IoGitCompareOutline fontSize="large" />
      <CartBadge badgeContent={2} color="primary" overlap="circular" />
    </IconButton>
    </Tooltip>
                </li>
                <li>
                    <Tooltip title='Wishlist'>
                <IconButton>
      <GoHeart fontSize="large" />
      <CartBadge badgeContent={2} color="primary" overlap="circular" />
    </IconButton>
    </Tooltip>
                </li>
                <li>
                    <Tooltip title='Cart'>
                <IconButton>
      <ShoppingCartIcon fontSize="small" />
      <CartBadge badgeContent={2} color="primary" overlap="circular" />
    </IconButton>
    </Tooltip>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar