import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "animate.css";
// import useLocalStorageState from 'use-local-storage-state';

import logo from "../../assets/fast-food.svg";

import  CartWidget  from "./CartWidget";
// import { CartProps } from '../Products/Products';
import classes from "./home.module.scss";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }
  useEffect(() => {
    const shrinkHeader = () => {
      const DISTANCE_FROM_TOP = 140;
      const headerElement = document.querySelector("header");
      const logoElement = document.querySelector("#logo-svg");
      const cartWidgetElement = document.querySelector("#cart-widget-svg");
      const productsCountElement = document.querySelector("#cart-product-count");
      const scrollY =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollY > DISTANCE_FROM_TOP) {
        headerElement.style.transition = "height 200ms ease-in";
        headerElement.style.height = "80px";
        logoElement.style.transition = "height 200ms ease-in";
        logoElement.style.height = "4rem";
        cartWidgetElement.style.transition = "height 200ms ease-in";
        cartWidgetElement.style.height = "2rem";
        productsCountElement.style.transition = "font-size 200ms ease-in";
        productsCountElement.style.fontSize = "1em";
      } else {
        headerElement.style.height = "110px";
        logoElement.style.height = "6rem";
        cartWidgetElement.style.height = "3rem";
        productsCountElement.style.fontSize = "1.5em";
      }
    };

    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

//   const [cart] = useLocalStorageState("cart", {});

    // const productsCount = Object.keys(cart || {}).length;
    const productsCount = 0;

  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <img
          id="logo-svg"
            src={logo}
            className={classes.logo}
            alt="Shopping Cart Application"
          />
        </Link>
      </div>
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
      <div className=" relative left-10 pb-1 lg:block ">
         <CartWidget productsCount={productsCount} /> 
      </div>
      <div className=" order-last pr-4 lg:hidden">
        <GiHamburgerMenu
          size={50}
          className=" text-white"
          onClick={toggleMenu}
        />
      </div>
      {showMenu && (
        <div className=" happy bg-white absolute right-0 top-0 w-80  z-50   h-[100vh] animate__animated  animate__slideInRight">
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
    </header>
  );
};

export default Nav;
