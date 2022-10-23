import React from 'react';
import {MdOutlineKeyboardArrowUp, MdRotate90DegreesCcw} from 'react-icons/md';

const CartItem = ({img, amount, id, price, title}) =>{
   return (
     <div className = 'cart'>
         <div className='cart-info'>
             <img src={img} />
             <div>
               <div className='title'>{title}</div>
               <div>{'$'+price}</div>
               <div class='remove'>remove</div>
             </div>
         </div>
         <div className='cart-amount'>
             <MdOutlineKeyboardArrowUp 
                style={{
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                }}
             />
             {amount}
             <MdOutlineKeyboardArrowUp 
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