import React from 'react';
import {BiCart} from 'react-icons/bi';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


const Navbar = ()=> {
   const {cartCount} = useSelector(state=>state.cart);
   return(
      <div className='navbar'>
          <div className='navbar-container'>
             <Link to='/'>
              <p>Redux Toolkit</p>
             </Link>
             <Link to='/carts'>
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
            </Link>
          </div>
      </div>

   );
}

export default Navbar;