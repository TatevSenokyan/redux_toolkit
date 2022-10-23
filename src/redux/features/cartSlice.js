import {createSlice} from '@reduxjs/toolkit';
import data from '../../assets/data';


const initialState = {
  initialState: data,
};

const cartSlice = createSlice({
    name: 'carts',
    initialState,
});

export default cartSlice.reducer;