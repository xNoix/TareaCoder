import React from 'react';
import './styles.css';
import bannerImg from './banner.png';
import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1>Deliciosa comida para satisfacer tus deseos.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel.</p>
        <button onClick={handleScrollMenu}>
          Ver Productos <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;
