import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { setUserIdForMessageAC } from '../../../redux/dialogsPage-reducer';
import { UserType } from '../../../types/types';
import c from './DialogItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';

//Props Type for Dialog Item
export type DialogItemPropsType = {
  user: UserType;
  //setUserIdFotMessages: (userId: string) => void; 
};
// Creating component DialogItem
const DialogItem = (props: DialogItemPropsType) => {
  
  const isAuth = useSelector<AppStateType, boolean>( state => state.authorizing.isAuth)
  const dispatch = useDispatch();




  let path = '/dialogs/' + props.user.id;
  
  
  //Call back for user ID
  let userIDcallBack = () => {
    dispatch(setUserIdForMessageAC(props.user.id))
    
    //props.setUserIdFotMessages(props.user.id);
    //props.dispatch(setUserIdForMessage(props.user.id))
  };


  // If not Logged in redirect to Login page 
  if(!isAuth) return <Redirect to={'/login'} />

  return (
    
    <NavLink onClick={userIDcallBack} to={path} activeClassName={c.activeLink}>
      <div className={c.dialog}>
        <div className={c.avatar}>
          <NavLink
            onClick={userIDcallBack}
            to={path}
            activeClassName={c.activeLink}
          >
            <img className={c.image} src={props.user.avatarUrl} alt="" />
    </NavLink>
        </div>
        <div>
          <NavLink
            onClick={userIDcallBack}
            to={path}
            activeClassName={c.activeLink}
          >
            {props.user.firstName} {props.user.lastName}
          </NavLink>
        </div>
      </div>
    </NavLink>
  );
};

export default DialogItem;
