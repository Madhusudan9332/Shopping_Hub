import React from 'react';
import { useState,useEffect } from 'react'
const ProductDetails = ({product}) => {

  // JSX rendering of the product details
  return (
    <div className="h-full max-w-md mx-auto border border-gray-200 rounded-md overflow-hidden shadow-lg ">
      <img className="w-full" src={product.thumbnail} alt={product.title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <div className="flex justify-between mt-4">
          <span className="text-gray-900 font-semibold">${product.price}</span>
          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
