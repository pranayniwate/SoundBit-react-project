import {createSlice} from '@reduxjs/toolkit'
import productData from '../assets/products'

const storedCart = localStorage.getItem('cartItems') !== null ?
JSON.parse(localStorage.getItem('cartItems')):[]

const totalAmount = localStorage.getItem('totalAmount') !== null ?
JSON.parse(localStorage.getItem('totalAmount')):0

const totalQuantity = localStorage.getItem('totalQuantity') !== null ?
JSON.parse(localStorage.getItem('totalQuantity')):0

const localStorageFunc = (cart, totalQuantity, totalAmount) =>{
  localStorage.setItem('cartItems', JSON.stringify(cart))
  localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity))
  localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
}

const initialState= {
  cart:storedCart,
  items:productData,
  totalQuantity:totalQuantity,
  totalAmount:totalAmount
}

export const cartSlice = createSlice({
  name:'carts',
  initialState,
  reducers:{
    addToCart: (state,action)=>{
      let duplicate = state.cart.findIndex((item) => item.id === action.payload.id)
      if(duplicate >= 0){
        state.cart[duplicate].quantity +=1;
        state.cart[duplicate].total = state.cart[duplicate].price * state.cart[duplicate].quantity
      }else{
        const newCart = {...action.payload,total:action.payload.price}
        state.cart = [...state.cart,newCart]
      }

      localStorageFunc(state.cart.map((item) => item), state.totalQuantity, state.totalAmount)

    },

    getTotal:(state) =>{
      const {quantity, amount} = state.cart.reduce((cartTotal, cartItem) =>{
        cartTotal.quantity += cartItem.quantity
        cartTotal.amount += cartItem.total
        return cartTotal
      },{
        quantity:0,
        amount:0
      })

      state.totalQuantity = quantity
      state.totalAmount = amount
      localStorageFunc(state.cart.map((item) => item), state.totalQuantity, state.totalAmount)

    },

    deleteItem :(state,action) =>{
      const newCart = state.cart.filter((item) => item.id !== action.payload)

      state.cart = newCart
      localStorageFunc(state.cart.map((item) => item), state.totalQuantity, state.totalAmount)

    },

    minusItem:(state,action) =>{
        if(action.payload.quantity === 1){
          state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        }
        else{
          state.cart = state.cart.map((item) =>{

            if(item.id === action.payload.id){
              item.quantity -=1;
              item.total = item.quantity * item.price
              return item;
            }else{
              return item;
            }

          })
        }
        localStorageFunc(state.cart.map((item) => item), state.totalQuantity, state.totalAmount)

    },

    plusItem:(state,action) =>{
        state.cart = state.cart.map((item) =>{
            if(action.payload === item.id){
              item.quantity +=1;
              item.total = item.quantity * item.price
              return item;
            }
            else{
              return item;
            }
        })
        localStorageFunc(state.cart.map((item) => item), state.totalQuantity, state.totalAmount)

    },

  }

})

export const {addToCart, getTotal, deleteItem, minusItem, plusItem} = cartSlice.actions;

export default cartSlice.reducer;