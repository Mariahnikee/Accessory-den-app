import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='/' className='logo'>
        <img src={logo} alt='Logo' />
      </Link>

      <div className='menu-button' onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={menuOpen ? 'menu open' : 'menu'}>
        <li><Link to='/#header' smooth={true} duration={1000}>Products</Link></li>
        <li><Link to='/#features' smooth={true} duration={1000}>Contact us</Link></li>
        <li><Link to='/#offer' smooth={true} duration={1000}>About us</Link></li>
      </ul>

      <div className='links'>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </nav>
  );
};
