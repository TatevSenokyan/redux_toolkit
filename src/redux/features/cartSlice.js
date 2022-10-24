import {createSlice} from '@reduxjs/toolkit';
import data from '../../assets/data';


const initialState = {
  data,
  cartCount: 4,
  totalPrice: calcPrice(data)
};

function calcPrice (data) {
  const sum = data.reduce((aggr, item)=>aggr+=+item.price,0);
  return sum;
}

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
      }
    }
});

export const {clearBasket, removeItem, increaseAmount, decreaseAmount} = cartSlice.actions;
export default cartSlice.reducer;