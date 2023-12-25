'use client'
import React, { useContext } from 'react';
import { GlobalContext } from '../context/page';

const Auctions = () => {
  const {cartData} = useContext(GlobalContext)
  console.log(cartData)
  return (
    <div>
      This is auctions
      {cartData}
    </div>
  );
};

export default Auctions;