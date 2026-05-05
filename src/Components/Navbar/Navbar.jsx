// import React from 'react';

import { HiShoppingCart } from "react-icons/hi";
import navImg from "../../assets/others/DigiTools.png"

const Navbar = () => {
    return (
        <div className=" sticky top-0 z-50 bg-white shadow-md">

        <div className="flex items-center">

            <div className="navbar bg-base-150 shadow-sm px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <div>
                                <button className="btn sm:btn-sm md:btn-md btn-primary mb-3">Login</button>
                            </div>
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>


                        </ul>
                    </div>

                    <img className="pl-3" src={navImg} alt="Navigation Image" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-lg font-semibold"><a>Products</a></li>
                        <li className="text-lg font-semibold"><a>Features</a></li>
                        <li className="text-lg font-semibold"><a>Pricing</a></li>
                        <li className="text-lg font-semibold"><a>Testimonials</a></li>
                        <li className="text-lg font-semibold"><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-between items-center gap-4">

                        {/* Shopping Cart */}

                        <button className="hidden lg:flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 transform transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                            <HiShoppingCart className="w-6 h-6 text-[#4F39F6]"></HiShoppingCart>
                        </button>

                        <a className="hidden lg:flex items-center font-semibold cursor-pointer">Login</a>
                        <button className="btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>

        </div>

    );
};

export default Navbar;