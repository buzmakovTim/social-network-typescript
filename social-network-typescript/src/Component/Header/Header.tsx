import React from 'react';
import c from './Header.module.css';
import logo from '../../images/logo2.png';
import { NavLink } from 'react-router-dom';
import { AuthorizeType } from './HeaderContainer';

const Header = (props: AuthorizeType) => {
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

        <div className={c.login}>
        { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>

      </div>
    </header>
  );
};

export default Header;
