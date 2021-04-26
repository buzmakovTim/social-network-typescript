import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../redux/state';
import c from './DialogItem.module.css';

//Props Type for Dialog Item
export type DialogItemPropsType = {
  user: UserType;
  messagesForUser: (userId: string) => void;
};
// Creating component DialogItem
const DialogItem = (props: DialogItemPropsType) => {
  let path = '/dialogs/' + props.user.id;

  //Call back for user ID
  let userIDcallBack = () => {
    props.messagesForUser(props.user.id);
  };

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
