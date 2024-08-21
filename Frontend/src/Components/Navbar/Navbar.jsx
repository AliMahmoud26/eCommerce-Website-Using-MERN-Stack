import React from 'react'
import logo from '../../assets/Frontend_Assets/logo.png'
import cart_icon from '../../assets/Frontend_Assets/cart_icon.png'
import { FaBars, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-header">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <a href='#'>SHOPSTORE</a>
        </div>
        <div className="search-bar">
          <input type="search" name="search-bar" id="search" placeholder='Search About a Product'/>
          <span className="search-icon"><a href="#"><FaSearch /></a></span>
        </div>
        <div className="login-cart">
          <a href="#">Register</a>
          <a href="#">Login</a>
          <img src={cart_icon} title='Cart' alt="cart icon" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
      <div className="nav-links">
        <ul className="nav-menu">
          <li><a href="#" className='first'><FaBars /> All Products</a></li>
          <li><a href="">Today's Deals</a></li>
          <li><a href="">Men's Fashion</a></li>
          <li><a href="">Women's Fashion</a></li>
          <li><a href="">Kids Fashion</a></li>
          <li><a href="">Toys & Games</a></li>
          <li><a href="">Health & Beauty</a></li>
          <li><a href="">Mobiles & Tablets</a></li>
          <li><a href="">TVs & Electronics</a></li>
          <li><a href="">Video Games</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar