import React from 'react';
import { Link } from 'react-router-dom';
import './style/navbar.css';

const Navbar = () => (
  <div className='header'>
    <div className='header-nav'>
      <Link className='header-nav-link' to='/home'>Home</Link>
      <Link className='header-nav-link' to='/shop'>Shop</Link>
      <Link className='header-nav-link' to='/achievements'>Achievements</Link>
    </div>
  </div>
);

export default Navbar;
