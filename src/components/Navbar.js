import React from 'react';
import {BiCart} from 'react-icons/bi';
import {useSelector} from 'react-redux';


const Navbar = ()=> {
   const {cartCount} = useSelector(state=>state.cart);
   return(
      <div className='navbar'>
          <div className='navbar-container'>
             <p>Redux Toolkit</p>
             <div className='basket'>
              <BiCart 
                color='white'
                style={{
                    width: '35px',
                    height: '35px',
                    position: 'absolute',
                    left: 0
                }}
              />
              <div className='count'>
                <span>{cartCount}</span>
              </div>
            </div>
          </div>
      </div>

   );
}

export default Navbar;