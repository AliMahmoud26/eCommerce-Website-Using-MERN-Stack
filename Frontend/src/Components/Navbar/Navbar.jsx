import React, { useState, useEffect } from 'react';
import logo from '../../assets/Frontend_Assets/shoppingLogo.png';
import cart_icon from '../../assets/Frontend_Assets/cart_icon.png';
import { FaBars, FaCartArrowDown, FaSearch } from 'react-icons/fa';
import ResponsiveNavbar from './ResponsiveNavbar';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        <nav className='desktop-nav'>
          <div className="nav-header">
            <div className="nav-logo">
              <img src={logo} alt="Logo" />
              <a href='#'>MALLMARKT</a>
            </div>
            <div className="search-bar">
              <input type="search" name="search-bar" id="search" placeholder='Search About a Product' />
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
      ) : (
        <div className='mobile-nav'>
          <ResponsiveNavbar />
        </div>
      )}
    </>
  );
};

export default Navbar;
