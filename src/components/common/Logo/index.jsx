import React from 'react';
import logo from './logo.png';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>Coder-food</b>
      </span>
    </div>
    <p>
      <b>minimarket & food</b>
    </p>
  </div>
);

export default Logo;
