import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem:(state, action)=>{
            // mutating te state here-> modifying state here
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
            state.items.pop();
        },
        clearCart:(state, action)=>{
            state.items = [];
        }
    }
});
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;