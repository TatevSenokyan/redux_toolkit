import React from 'react';
import {MdOutlineKeyboardArrowUp, MdRotate90DegreesCcw} from 'react-icons/md';

const CartItem = ({img, amount, id, price, title}) =>{
   return (
     <div className = 'cart'>
         <div className='cart-info'>
             <img src={img} />
             <div>
               <div>{title}</div>
               <div>{'$'+price}</div>
               <div>remove</div>
             </div>
         </div>
         <div className='cart-amount'>
             <MdOutlineKeyboardArrowUp 
                style={{
                    width: '30px',
                    height: '30px'
                }}
             />
             {amount}
             <MdOutlineKeyboardArrowUp 
               style={{
                   transform: 'rotate(180deg)',
                   width: '30px',
                   height: '30px'
               }}
            />
         </div>
     </div>
   )
};

export default CartItem;