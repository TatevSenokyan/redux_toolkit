import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {openModal} from '../redux/features/modalSlice';


const Footer = () => {
    const dispatch = useDispatch();
    const {totalPrice} = useSelector(state=>state.cart);
    const carts = useSelector((state)=>state.cart.data);
    return(
      <div className = 'footer'>
        <hr></hr>
        <div className = 'total'>
            <div className = 'footer-total'>Total</div>
            <div>{'$'+totalPrice}</div>
        </div>
        <button onClick={()=>carts.length && dispatch(openModal())}>Clear basket</button>
      </div>
    );
}

export default Footer;