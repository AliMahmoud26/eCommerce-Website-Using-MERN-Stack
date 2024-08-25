import React, { useState, useEffect } from 'react';
import logo from '../../assets/Frontend_Assets/shoppingLogo.png';
import cart_icon from '../../assets/Frontend_Assets/cart_icon.png';
import { FaBars, FaSearch, FaTimes, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.search-bar') &&
        !event.target.closest('.login-page') &&
        (searchVisible || loginVisible)
      ) {
        setSearchVisible(false);
        setLoginVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [searchVisible, loginVisible]);

  return (
    <>
      <nav>
        <div className="nav-header">
          {/* Left Nav Section */}
          <div className="left-nav">
            {/* Mobile Nav Links */}
            <div className="mobile-nav-links">
              <span className="bars-menu-icon" onClick={toggleNavbar}><FaBars /></span>
              <div className={`nav-links ${navbarVisible ? 'showNavbar' : ''}`}>
                <span className='times-icon' onClick={toggleNavbar}><FaTimes /></span>
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
            </div>
            {/* Nav Logo */}
            <div className="nav-logo">
              <img src={logo} alt="Logo" />
              <a href='#'>MALLMARKT</a>
            </div>
          </div>

          {/* Right Nav Section */}
          <div className="right-nav">
            {/* Search Bar */}
            <div className="search-bar">
              <a href="#" className='search-icon' onClick={toggleSearch}><FaSearch /></a>
              <input type="search" name="search-bar" id="search" placeholder='Search About a Product'
                     className={searchVisible ? 'showInput' : ''} />
            </div>

            {/* Login Page */}
            <div className="login-page">
              <a href="#" className='login-icon' onClick={toggleLogin}><FaUserAlt /></a>
              <div className={`login-holder ${loginVisible ? 'showLoginHolder' : ''}`}>
                <Link to='/register'><span className='sign'>Register</span></Link>
                <Link to='/login'><span className='sign'>Login</span></Link>
              </div>
            </div>

            {/* Cart */}
            <div className="login-cart">
            <Link to='/cart'><img src={cart_icon} title='Cart' alt="cart icon" /></Link>
              <div className="nav-cart-count">0</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ResponsiveNavbar;
