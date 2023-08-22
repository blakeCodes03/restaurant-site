import React, { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Link, useLocation } from "react-router-dom";
import Quantifier from "./Quantifier";
import { TotalPrice } from "./TotalPrice";
import { TiArrowBack } from "react-icons/ti";

const Cart = () => {
  const [cart, setCart] = useLocalStorageState("localStorageCart", {});
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); //always scroll back to top after page loads
  }, [location]);

  const handleRemoveProduct = (productId) => {
    //"minus" button that controls reduction of items
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId, operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === "increase") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  const getProducts = () => Object.values(cart); //gets all products that are in cart
  const doesCartHaveItems = Object.values(cart);

  const totalPrice = getProducts().reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <section className="h-screen relative bg-gray-100 pt-20">
      <Link to="/menu">
        <TiArrowBack size={40} className="absolute right-10 top-5" />
      </Link>
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>

      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-4  ">
        {doesCartHaveItems?.map((product) => (
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {product.food}
                  </h2>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <Quantifier
                    removeProductCallback={() =>
                      handleRemoveProduct(product.id)
                    }
                    productId={product.id}
                    handleUpdateQuantity={handleUpdateQuantity}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 mx-6 lg:absolute lg:left-1/4 rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">
              <TotalPrice amount={totalPrice} />
            </p>
          </div>
        </div>
        <div className="flex gap-2 pt-4">
          <button className=" text-sm bg-orange-600 hover:bg-orange-400 p-2 rounded-sm w-full lg:w-80 text-white text-hover shadow-md transition-colors">
            FINISH
          </button>
          <button className="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full lg:w-80 text-gray-700 text-hover shadow-md">
            <Link to="/menu">ADD MORE</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;

{
  /* <div className={classes.product} key={product.id}>
  <img src={product.img_url} alt={product.img_url} />
  <h3>{product.food}</h3>
  <Quantifier
    removeProductCallback={() => handleRemoveProduct(product.id)}
    productId={product.id}
    handleUpdateQuantity={handleUpdateQuantity}
  />
</div> */
}
