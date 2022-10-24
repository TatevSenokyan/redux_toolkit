import React from 'react';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';

const CartContainer = () => { 
  const carts = useSelector((state)=>state.cart.data);
  
  return (
    <div className = 'cart-container'>
        {carts.map((cart)=><CartItem key={cart.id} {...cart} />)}
    </div>
  );
};

export default CartContainer;