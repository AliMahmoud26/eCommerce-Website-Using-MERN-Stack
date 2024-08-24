import React, { useState } from 'react'
import logo from '../../assets/Frontend_Assets/shoppingLogo.png'
import cart_icon from '../../assets/Frontend_Assets/cart_icon.png'
import { FaBars, FaCartArrowDown, FaSearch, FaTimes, FaUser, FaUserAlt } from 'react-icons/fa';

const ResponsiveNavbar = () => {
    const [navbarVisible, setNavbarVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);

    const toggleNavbar = () => setNavbarVisible(!navbarVisible);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
        if (!searchVisible) {
          setLoginVisible(false); // Close login holder when search is opened
        }
      };
    
      const toggleLogin = () => {
        setLoginVisible(!loginVisible);
        if (!loginVisible) {
          setSearchVisible(false); // Close search bar when login holder is opened
        }
      };

  return (
    <>
        <nav>
            <div className="nav-header">
                {/* Logo Component */}
                <div className="left-nav">
                    {/* Mobile Nav Links */}
                    <div className="mobile-nav-links">
                        <span className="bars-menu-icon" onClick={toggleNavbar}><FaBars /></span>
                        <div className={`nav-links ${navbarVisible ? 'showNavbar' : ''}`}>
                            <span className='times-icon' onClick={toggleNavbar}><FaTimes /></span>
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
                    </div>
                    {/* Nav Logo */}
                    <div className="nav-logo">
                        <img src={logo} alt="Logo" />
                        <a href='#'>MALLMARKT</a>
                    </div>
                </div>
                <div className="right-nav">
                    {/* Search Bar */}
                    <div className="search-bar">
                        <a href="#" className='search-icon' onClick={toggleSearch}><FaSearch /></a>
                        <input type="search" name="search-bar" id="search" placeholder='Search About a Product' className={searchVisible ? 'showInput' : ''}/>
                    </div>
                    {/* Login Page */}
                    <div className="login-page">
                        <a href="#" className='login-icon' onClick={toggleLogin}><FaUserAlt /></a>
                        <div className={`login-holder ${loginVisible ? 'showLoginHolder' : ''}`}>
                            <a href="#">Login</a>
                            <a href="#">Register</a>
                        </div>
                    </div>
                    {/* Cart */}
                    <div className="login-cart">
                        <img src={cart_icon} title='Cart' alt="cart icon" />
                        <div className="nav-cart-count">0</div>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            {/* <div className="search-bar">
                <input type="search" name="search-bar" id="search" placeholder='Search About a Product'/>
                <span className="search-icon"><a href="#"><FaSearch /></a></span>
            </div> */}
        </nav>
    </>
  )
}

export default ResponsiveNavbar