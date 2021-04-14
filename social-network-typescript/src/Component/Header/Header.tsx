import React from 'react';
import c from './Header.module.css';
import logo from '../../images/logo2.png';

const Header = () => {
  return (
    <header className={c.header}>
      <div className={c.inner}>
        <div className={c.logo}>
          <img src={logo} alt="" />

          <div className={c.logoText}>SOCIAL NETWORK</div>
        </div>
        <div>
          <input placeholder="Search"></input>
        </div>
      </div>
    </header>
  );
};

export default Header;
