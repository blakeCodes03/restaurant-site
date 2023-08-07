import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import classes from './home.module.scss';
import shoppingCart from '../../assets/cart-image.svg';

const CartWidget = ({ productsCount }) => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <Link to="/cart">

    <div className={classes.container} onClick={navigateToCart}>
      <span id='cart-product-count' className=' text-orange-400 relative left-8 bottom-6'>{productsCount}</span>
      <img id='cart-widget-svg' src={shoppingCart} className={classes.shoppingCart} alt="Go to Cart" />
    </div>
    </Link>
  );
};

export default CartWidget;
