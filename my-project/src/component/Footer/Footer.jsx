import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { FaFacebookF } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <>
            <footer className="py-6 bg-white">
                <hr />
                <div className="m-5">
                    <div className="flex items-center justify-around  gap-2">
                        <div className="col flex items-center justify-center flex-col group">
                            <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
                            <h3 className="text-[15px] font-[600] mt-3">Free Shipping</h3>
                            <p className="text-[12px] font-[500]">For all Orders Over $100</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group">
                            <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
                            <h3 className="text-[15px] font-[600] mt-3">30 Days Returns</h3>
                            <p className="text-[12px] font-[500]">For an Exchange Product</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group">
                            <IoWalletOutline className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
                            <h3 className="text-[15px] font-[600] mt-3">Secured Payment</h3>
                            <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group">
                            <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
                            <h3 className="text-[15px] font-[600] mt-3">Special Gifts</h3>
                            <p className="text-[12px] font-[500]">Our First Product Order</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group">
                            <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
                            <h3 className="text-[15px] font-[600] mt-3">Support 24/7</h3>
                            <p className="text-[12px] font-[500]">Contact us Anytime</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="footer m-5 flex  py-8">
                    <div className="part1 w-[25%] border-r-2 border-gray mr-[40px]">
                        <h2 className="text-[20px] font-[600] mb-4">Contact us</h2>
                        <p className="text-[14px] font-[400] pb-4">
                            Classyshop - Mega Super Store
                            <br />
                            507-Union Trade Centre
                            <br />
                            France
                        </p>
                        <Link className="link text-[13px]" to="mailto:someone@example.com">
                            sales@yourcompany.com
                        </Link>
                        <span className="text-[20px] font-[600] block w-full mt-3 text-primary">
                            (+91) 9876-543-210
                        </span>
                        <div className="flex mt-1 items-center gap-2">
                            <IoChatboxOutline className="text-[35px] text-primary" />
                            <span className="text-[16px] font-[600]">
                                Online Chat
                                <br />
                                Get Expert Help
                            </span>
                        </div>

                    </div>
                    <div className="part2 w-[40%] flex justify-between">
                        <div className="part2_col1">
                            <h2 className="text-[20px] font-[600] mb-4">Products</h2>
                            <ul className="list">
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">Prices drop</Link>
                                </li>
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">New products</Link>
                                </li>
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">Best sales</Link>
                                </li>
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">Contact us</Link>
                                </li>
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">Sitemap</Link>
                                </li>
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">Stores</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="part2_col2 mr-5">
                            <h2 className="text-[20px] font-[600] mb-4">Our company</h2>
                            <ul className="list">
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">Delivery</Link>
                                </li>
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">Legal Notice</Link>
                                </li>
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">Terms and conditions of use</Link>
                                </li>
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">About us</Link>
                                </li>
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">Secure payment</Link>
                                </li>
                                <li className="list-none text-[14px] w-full mb-1">
                                    <Link className="link" to="/">Login</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="part3 w-[35%] border-l-2  border-gray flex pl-8 flex-col pr-8">
                        <h2 className="text-[18px] font-[600] mb-4">Subscribe to newsletter</h2>
                        <p className="text-[13px]">Subscribe to our latest newsletter to get news about special discounts.</p>

                        <form className="mt-5">
                            <input
                                type="text"
                                className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                                placeholder="Your Email Address"
                            />

                            <FormControlLabel
                                className="mt-2 text-[12px]"
                                control={<Checkbox defaultChecked />}
                                label="I agree to the terms and conditions and the privacy policy"
                            />
                            <br />
                            <div className="mt-3">

                                <Button className="btn-org">SUBSCRIBE</Button>
                            </div>
                        </form>
                    </div>
                </div>


            </footer>


            <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
                <div className="container flex items-center justify-between">
                    <ul className="flex gap-3">
                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all">
                                <FaFacebookF className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all">
                                <RiYoutubeLine className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all">
                                <FaInstagram className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all">
                                <FaPinterest className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all">
                                <FaSquareXTwitter className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>
                    </ul>

                    <p className="text-[13px] text-center mb-0">
  © 2024 - Ecommerce Template
</p>

<div className="flex items-center">
  <img src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png" alt="image" />
  <img src="https://ecommerce-frontend-view.netlify.app/visa.png" alt="image" />
  <img src="https://ecommerce-frontend-view.netlify.app/master_card.png" alt="image" />
  <img src="https://ecommerce-frontend-view.netlify.app/american_express.png" alt="image" />
  <img src="https://ecommerce-frontend-view.netlify.app/paypal.png" alt="image" />
</div>

                </div>
            </div>

        </>
    );
};

export default Footer;
