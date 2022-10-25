import React from 'react';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';
import Footer from './Footer';
import Modal from './Modal';

const CartContainer = () => { 
  const carts = useSelector((state)=>state.cart.data);
  const {open} = useSelector(state=>state.modal);
  
  return (
    <> 
      {!carts.length && <div className='empty'>Your basket is empty</div>}
      <div className = 'cart-container'>
          {carts.map((cart)=><CartItem key={cart.id} {...cart} />)}
      </div>
      <Footer />
      {open && <Modal />}
    </>
    
  );
};

export default CartContainer;