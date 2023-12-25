'use client'
import React, { useContext } from 'react';
import { GlobalContext } from '../context/page';

const Cars = () => {
  const {setCartData} = useContext(GlobalContext)
  return (
    <div>
      This is car page
      <button onClick={() => setCartData('hello from car page')}>Send Data</button>
    </div>
  );
};

export default Cars;