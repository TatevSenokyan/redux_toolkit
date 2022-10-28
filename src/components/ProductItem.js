import React from 'react';
import {addToCart} from '../redux/features/cartSlice';
import {useDispatch} from 'react-redux';

const ProductItem = ({img, amount, id, price, title}) =>{
  const dispatch = useDispatch();
   return (
     <div className = 'product'>
         <img src={img} />
         <div>{title}</div>
         <div>{'$'+price}</div>
         <button className='add-btn' onClick={()=>dispatch(addToCart({img, amount, id, price, title}))}>Add to cart</button>

     </div>
   )
};

export default ProductItem;