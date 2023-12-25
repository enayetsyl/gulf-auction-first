'use client'
import React, { useState } from 'react';
import { GlobalContext } from '../context/page';

const GlobalProvider = ({children}) => {
  const [cartData, setCartData] = useState([])

  const globalInfo = {
    cartData,
    setCartData
  }
  return (
    <GlobalContext.Provider value={globalInfo}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;