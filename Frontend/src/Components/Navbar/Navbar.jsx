import React, { useState, useEffect } from 'react';
import logo from '../../assets/Frontend_Assets/shoppingLogo.png';
import cart_icon from '../../assets/Frontend_Assets/cart_icon.png';
import { FaBars, FaCartArrowDown, FaSearch } from 'react-icons/fa';
import ResponsiveNavbar from './ResponsiveNavbar';
import { Link } from 'react-router-dom';

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
              <Link to='/register'><span className='sign'>Register</span></Link>
              <Link to='/login'><span className='sign'>Login</span></Link>
              <Link to='/cart'><img src={cart_icon} className='cart-icon' title='Cart' alt="cart icon" /></Link>
              <div className="nav-cart-count">0</div>
            </div>
          </div>
          <div className="nav-links">
            <ul className="nav-menu">
              <li><Link className='first' to='/'><FaBars /> All Products</Link></li>
              <li><Link className='nav-items' to='/todays-deals'>Today's Deals</Link></li>
              <li><Link className='nav-items' to='/mens-fashion'>Men's Fashion</Link></li>
              <li><Link className='nav-items' to='/womens-fashion'>Women's Fashion</Link></li>
              <li><Link className='nav-items' to='/kids-fashion'>Kids Fashion</Link></li>
              <li><Link className='nav-items' to='/toys&games'>Toys & Games</Link></li>
              <li><Link className='nav-items' to='/health&beauty'>Health & Beauty</Link></li>
              <li><Link className='nav-items' to='/mobiles&tablets'>Mobiles & Tablets</Link></li>
              <li><Link className='nav-items' to='/tvs&electronics'>TVs & Electronics</Link></li>
              <li><Link className='nav-items' to='/video-games'>Video Games</Link></li>
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
