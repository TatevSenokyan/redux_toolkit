import {createSlice} from '@reduxjs/toolkit';
import products from '../../assets/data';


const initialState = {
  products,
  data: [],
  cartCount: 0,
  totalPrice: 0,
};


const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
      clearBasket: (state)=>{
        state.data = [];
        state.cartCount = 0;
        state.totalPrice = 0;
      },
      removeItem: (state, action)=> {
        const id = action.payload;
        const cart = state.data.find(cart=>cart.id==id);
        const newState = state.data.filter(cart=>cart.id!==id);
        state.data = newState;
        state.cartCount -=cart.amount;
        state.totalPrice -=+cart.price*cart.amount;
      },
      increaseAmount: (state, action)=>{
        const id = action.payload;
        const cart = state.data.find(cart=>cart.id==id);
        state.data = state.data.map(cart=>cart.id==id?{...cart, amount: cart.amount+=1}:{...cart});
        state.cartCount += 1;
        state.totalPrice +=+cart.price;
      },
      decreaseAmount: (state, action)=>{
        const id = action.payload;
        const cart = state.data.find(cart=>cart.id==id);
        state.data = state.data.map(cart=>cart.id==id?{...cart, amount: cart.amount-=1}:{...cart});
        state.cartCount -= 1;
        state.totalPrice -=+cart.price;
        if (state.totalPrice<0) {
          state.totalPrice = 0;
        }
      },
      addToCart: (state, action) => {
        state.data = [...state.data, action.payload];
        state.cartCount += 1;
        state.totalPrice += +action.payload.price;
      }
    }
});

export const {clearBasket, removeItem, increaseAmount, decreaseAmount, addToCart} = cartSlice.actions;
export default cartSlice.reducer;