import React from 'react';

// import classes from './currency-formatter.module.scss';


export const CurrencyFormatter = ({ amount }) => {     //formats currency to NGN Naira
  const formattedAmount = amount.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'NGN'
  })

  return <div >{formattedAmount}</div>
}