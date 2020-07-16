import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';
import { GET_PRODUCTS } from './Types';

// Initial State
const initialState = {
  products: [
    {
      p_id: '1',
      p_name: 'NMD_R1 SHOES',
      p_image: '/img/shoes/1.jpg',
      p_stock: 'In Stock',
      p_price: '$100.00',
    },
    {
      p_id: '2',
      p_name: 'ULTRABOOST 20 SHOES',
      p_image: '/img/shoes/3.jpg',
      p_stock: 'In Stock',
      p_price: '$180.00',
    },
    {
      p_id: '3',
      p_name: 'ZX 2K 4D SHOES',
      p_image: '/img/shoes/6.jpg',
      p_stock: 'In Stock',
      p_price: '$200.00',
    },
    {
      p_id: '4',
      p_name: 'SOBAKOV SHOES',
      p_image: '/img/shoes/7.jpg',
      p_stock: 'In Stock',
      p_price: '$180.00',
    },
    {
      p_id: '5',
      p_name: 'SWIFT RUN SHOES',
      p_image: '/img/shoes/8.png',
      p_stock: 'In Stock',
      p_price: '$300.00',
    },
    {
      p_id: '6',
      p_name: 'CLOUDFOAM SHOES',
      p_image: '/img/shoes/9.jpg',
      p_stock: 'In Stock',
      p_price: '$220.00',
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action
  function getProducts(transaction) {
    dispatch({
      type: GET_PRODUCTS,
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
