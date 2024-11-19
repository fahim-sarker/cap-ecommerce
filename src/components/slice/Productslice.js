import { createSlice } from '@reduxjs/toolkit'

export const Productslice = createSlice({
  name: 'product',
  initialState: {
    cartitem: localStorage.getItem("cartpage") ? JSON.parse(localStorage.getItem("cartpage")) : [],
  },
  reducers: {
    addtocart : (state, action) => {
      let findproduct = state.cartitem.findIndex((item) => item.id == action.payload.id)
      if(findproduct !== -1){
        state.cartitem[findproduct].qty += 1
       localStorage.setItem("cartpage", JSON.stringify(state.cartitem))
      }else{
       state.cartitem=[...state.cartitem,action.payload]
       localStorage.setItem("cartpage", JSON.stringify(state.cartitem))
      }
    },
    itemincrement : (state, action) => {
      state.cartitem[action.payload].qty += 1
      localStorage.setItem("cartpage", JSON.stringify(state.cartitem))
    },
    itemdecrement : (state, action) => {
      if(state.cartitem[action.payload].qty>1){
        state.cartitem[action.payload].qty -= 1
        localStorage.setItem("cartpage", JSON.stringify(state.cartitem))
      }
    },
    removecartitem : (state, action) => {
      state.cartitem.splice(action.payload,1)
      localStorage.setItem("cartpage", JSON.stringify(state.cartitem))
    }
  },
})
export const { addtocart,itemincrement, itemdecrement, removecartitem } = Productslice.actions

export default Productslice.reducer