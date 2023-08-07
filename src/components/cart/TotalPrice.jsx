import React from 'react';

import { CurrencyFormatter } from './currencyFormatter'
// import classes from './total-price.module.scss'


export const TotalPrice = ({ amount }) => {
return <div > {<CurrencyFormatter amount={amount} />}</div>
}