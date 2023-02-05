import React, {useState, useEffect} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {getTotal} from '../../features/cartSlice'

const Navbar = () =>{
  const [toggleMenu, setToggleMenu] = useState(false)

  const totalQuantity = useSelector((state)=> state.allCart.totalQuantity)
  const cart = useSelector((state) => state.allCart.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotal())
  },[cart])

  return(
    <>
    <header className="primary-header">
      <div className="navbar-container">
      <div className="nav-logo">
      <Link to="/"><h3>SoundBit</h3></Link>
      </div>
      <nav className="nav-links">
        <ul role="list" className="nav-links-list">
          <li><Link to="/all">All Products</Link></li>
          <li><Link to="/earphones">Earphones</Link></li>
          <li><Link to="/headphones">HeadPhones</Link></li>
          <li><Link to="/speakers">Speakers</Link></li>
        </ul>
      </nav>
      <div className="nav-button">
      <button><Link to="/cart" className="cart-btn">Cart {totalQuantity}</Link></button>
      </div>
      </div>
      <div className="navbar-menu-container">
      {toggleMenu?
        <RiCloseLine color="#1d1e25" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#1d1e25" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
        <nav className="nav-menu-links">
          <ul role="list" className="nav-menu-links-list">
          <li><Link to="/all">All Products</Link></li>
          <li><Link to="/earphones">Earphones</Link></li>
          <li><Link to="/headphones">HeadPhones</Link></li>
          <li><Link to="/speakers">Speakers</Link></li>
          </ul>
        </nav>
      )
      }

      </div>


    </header>
    </>
  )
}

export default Navbar