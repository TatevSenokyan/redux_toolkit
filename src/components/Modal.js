import React from 'react';
import {closeModal} from '../redux/features/modalSlice';
import {clearBasket} from '../redux/features/cartSlice';
import {useDispatch} from 'react-redux';


const Modal = ({length}) =>{
    const dispatch = useDispatch();
    return(
       <div className='modal-container' style={{height: length>=2?'100%': '100vh' }}>
           <div className='modal' style={{marginTop: length>=2?'300px': '150px' }}>
              <div className='modal-text'>
                  Are you sure to delete the cart content?
              </div>
              <div className='modal-buttons'>
                  <button onClick={()=>{
                      dispatch(clearBasket());
                      dispatch(closeModal())}}>Confirm</button>
                  <button onClick={()=>dispatch(closeModal())}>Cancel</button>
              </div>
           </div>
       </div>

    );
}

export default Modal;