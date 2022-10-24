import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearBasket} from '../redux/features/cartSlice';


const Footer = () => {
    const dispatch = useDispatch();
    const {totalPrice} = useSelector(state=>state.cart);
    return(
      <div className = 'footer'>
        <hr></hr>
        <div className = 'total'>
            <div className = 'footer-total'>Total</div>
            <div>{'$'+totalPrice}</div>
        </div>
        <button onClick={()=>dispatch(clearBasket())}>Clear basket</button>
      </div>
    );
}

export default Footer;