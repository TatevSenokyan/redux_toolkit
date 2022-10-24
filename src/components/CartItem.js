import React from 'react';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md';
import {removeItem, increaseAmount, decreaseAmount} from '../redux/features/cartSlice';
import {useDispatch} from 'react-redux';

const CartItem = ({img, amount, id, price, title}) =>{
  const dispatch = useDispatch();
   return (
     <div className = 'cart'>
         <div className='cart-info'>
             <img src={img} />
             <div>
               <div className='title'>{title}</div>
               <div>{'$'+price}</div>
               <div className='remove' onClick={()=>dispatch(removeItem(id))}>remove</div>
             </div>
         </div>
         <div className='cart-amount'>
             <MdOutlineKeyboardArrowUp
                onClick={()=>dispatch(increaseAmount(id))}
                style={{
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                }}
             />
             {amount}
             <MdOutlineKeyboardArrowUp 
               onClick={()=>amount && dispatch(decreaseAmount(id))}
               style={{
                   transform: 'rotate(180deg)',
                   cursor: 'pointer',
                   width: '30px',
                   height: '30px'
               }}
            />
         </div>
     </div>
   )
};

export default CartItem;