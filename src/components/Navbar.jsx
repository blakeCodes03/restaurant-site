import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "animate.css";
import { Link } from "react-router-dom";
import useLocalStorageState from 'use-local-storage-state'
import CartWidget from './homePage/CartWidget'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [cart,] = useLocalStorageState('localStorageCart', {})
  function toggleMenu() {  //function that controls display of side menu
    setShowMenu((prev) => !prev);
  }

  const productsCount = Object.keys(cart || {}).length  //checks number of items in the cart from local storage
  return (
    <div className=" flex px-6 items-center justify-between">
      <Link to="/">
      <div className=" w-2">
        <h1 className="logo text-white text-[6rem]  tracking-[0.1rem] lg:text-[6rem]   ">
          STOP<span className=" text-orange-400 h-1">.</span>
        </h1>
      </div>
      </Link>
      <div className=" absolute hidden lg:block right-[40%]">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-5 hover:rounded hover:text-amber-100 text-white">
            <a href="#">Menu</a>
          </li>
          <li className="py-1 px-5 hover:rounded hover:text-amber-100 text-white">
            <a href="#">Contact</a>
          </li>
          <li className="py-1 px-5 hover:rounded hover:text-amber-100 text-white">
            <a href="#">Events</a>
          </li>
          <li className="py-1 px-5 hover:rounded hover:text-amber-100 text-white">
            <a href="#">Gallery</a>
          </li>
          
        </ul>
      </div>
      <div className="hidden lg:inline">
        {/* <button className="rounded-md bg-orange-600  hover:bg-orange-400  lg:w-60 lg:h-10 lg:mx-4 mt-2 text-white opacity-100 font-semibold">
          Book A Table
        </button> */}
      </div>
        <div className=" relative left-20 pb-1  ">
         <CartWidget productsCount={productsCount} /> 
      </div>
      <div className=" order-last lg:hidden">
        <GiHamburgerMenu
          size={50}
          className=" text-white"
          onClick={toggleMenu}
        />
      </div>
      {showMenu && (
        <div className=" bg-white absolute right-0 top-0 w-80  z-50  h-full animate__animated  animate__slideInRight">
          <div className="flex justify-end pr-8 pt-8">
            <GrClose
              onClick={toggleMenu}
              className="rounded p-1 text-black"
              size={50}
            />
          </div>
          <ul className="pt-8 px-6">
            <li className="py-3 pl-3 hover:rounded text-orange-400">
              <a href="#">Home</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="#">Menu</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="#">Events</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="#">Gallery</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="#">Contact</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="#">Book A Table</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
