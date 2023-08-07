import React, { useState } from 'react';
import classes from './quantifier.module.scss';



const Quantifier = ({ removeProductCallback, handleUpdateQuantity, productId }) => {
  const [value, setValue] = useState(1);

  const reduce = () => {
    handleUpdateQuantity(productId, 'decrease');

    setValue((prevState) => {
      const updatedValue = prevState - 1;
      if (updatedValue === 0) {
        removeProductCallback(productId);
      }
      return updatedValue;
    });
  };

  const increase = () => {
    handleUpdateQuantity(productId, 'increase');
    setValue((prevState) => prevState + 1);
  };

  return (
    <div className={classes.quantifier}>
      <input type="button" value="-" className={classes.buttonMinus} onClick={reduce} />
      <input
        type="number"
        step="1"
        max=""
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className={classes.quantityField}
      />
      <input type="button" value="+" className={classes.buttonPlus} onClick={increase} />
    </div>
  );
};

export default Quantifier;
