import React from 'react';
import {useSelector} from 'react-redux';
import ProductItem from './ProductItem';

const ProductContainer = () => { 
  const {products} = useSelector((state)=>state.cart);
  
  return (
    <div className = 'product-container'>
        {products.map((prod)=><ProductItem key={prod.id} {...prod} />)}
    </div>
  );
};

export default ProductContainer;