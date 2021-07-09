import React from 'react';
import c from './Header.module.css';
import logo from '../../images/logo2.png';
import { NavLink } from 'react-router-dom';
import { AuthorizeType } from './HeaderContainer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { logout } from '../../redux/auth-reducer';

const Header = (props: AuthorizeType) => {
  
  const isAuth = useSelector<AppStateType, boolean>( state => state.authorizing.isAuth)
  const dispatch = useDispatch()
  
  const logOut = () => {
    dispatch(logout())
    
  }

  return (
    <header className={c.header}>
      
      
      <div className={c.inner}>
        
        {/* Logo and search */}
        <div className={c.logo}>
          <img src={logo} alt="" />

          <div className={c.logoText}>SOCIAL NETWORK</div>
        
          <div>
              <input placeholder="Search"></input>
         </div>
  
        </div>
        {/* Logo and search end */}

        {/* Login */}
        <div className={c.login}>
          { props.isAuth ? 
          <div>
              {props.login}  {<button onClick={logOut}>LogOut</button>} 
          </div>
          : <NavLink to={'/login'}>Login</NavLink>}
        </div>

      </div>


      
    </header>
  );
};

export default Header;
