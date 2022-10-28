import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from './ProductItem';
import {getItems} from '../redux/features/cartSlice';

const ProductContainer = () => { 
  const {products, loading} = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getItems());
  }, [])
  
  return (
    <div className = 'product-container'>
        {loading && <div className='loading'>Loading...</div>}
        {products.map((prod)=><ProductItem key={prod.id} {...prod} />)}
    </div>
  );
};

export default ProductContainer;