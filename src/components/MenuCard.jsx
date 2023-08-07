import React from "react";
import { TotalPrice } from './cart/TotalPrice';
import shoppingCart from '../assets/cart-image.svg';



function MenuCard({ food, price, img_url, addToCart, isInCart, productId, product }) {
 
  
  const styles = {
    //style to give bg-image for each div dark gradient
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${img_url}')`,
  };
  return (
    <div>
      {/* <a href="#"> */}
        <div
          style={styles}
          className={`menu-card relative rounded-xl p-3 w-full h-60 md:h-70 lg:h-80 antialiased shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300`}
        >
            <button className=" absolute right-0 text-xs py-1 px-1 rounded-sm bg-orange-600 text-white hover:bg-orange-400 disabled:bg-orange-300"    onClick={() => addToCart(product)} disabled={isInCart(productId)}>
            <img id='cart-widget-svg' src={shoppingCart} className=' h-6 ' alt="Go to Cart" />

            </button>
          
          <div className="  absolute bottom-0 text-gray-700 font-semibold  pt-3 md:pt-0 ">
            <div className=" text-sm py-1 text-white leading-tight truncate max-w-[10rem] lg:text-lg lg:max-w-none">{food}</div>
            <div className="text-sm flex space-x-4 lg:space-x-20 text-gray-300 hover:text-gray-400 cursor-pointer">
              <span className="border-b border-dashed border-gray-500 pb-0">
              <TotalPrice amount={price} /> 
              </span>
            <button className=" hidden md:block text-xs py-1 px-1 rounded-sm bg-orange-600 text-white hover:bg-orange-400 " onClick={() => addToCart(product)} disabled={isInCart(productId)}>Add to tray</button>
            </div>
          </div>
        </div>
      {/* </a> */}
    </div>
  );
}

export default MenuCard;
