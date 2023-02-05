import './cart.css'
import {FiPlusSquare} from "react-icons/fi"
import {FiMinusSquare} from "react-icons/fi"
import {AiFillDelete} from "react-icons/ai"

import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from "react";
import {getTotal, deleteItem, minusItem, plusItem} from '../../features/cartSlice'


const Cart = () =>{
  const dispatch = useDispatch();
  const {cart, totalQuantity, totalAmount} = useSelector((state) => state.allCart)



  useEffect(()=>{
    dispatch(getTotal())
  },[cart])

  return(
    <>
      <section className="cart-container">
      <article className="cart-total">
          <h3>Total-Items <span>{totalQuantity}</span></h3>
          <div></div>
          <h3>Total-Amount <span>Rs {totalAmount}</span></h3>
        </article>
          {cart.map((item) =>{

            return(

                <article className="cart-products" key={item.id}>
                  <div className="single-product-container">

                      <div className="product-img">
                      <h1 className="product-title">{item.title}</h1>
                          <img src={item.img}/>
                      </div>

                      <div className="product-icons-container">
                          <div className="product-icons">
                            <button className="react-icon" onClick={()=> dispatch(minusItem(item))}> <FiMinusSquare/> </button>
                            <h3>{item.quantity}</h3>
                            <button className="react-icon" onClick={()=> dispatch(plusItem(item.id))}><FiPlusSquare/></button>
                          </div>
                          <h3 className="product-price">Rs {item.total}</h3>
                          <button className="delete-icon" onClick={()=> dispatch(deleteItem(item.id))}><AiFillDelete/></button>
                      </div>

                  </div>
                </article>
            )

          })}





      </section>
    </>
  )
}

export default Cart;