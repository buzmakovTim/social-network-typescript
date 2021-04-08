import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../App';
import c from './DialogItem.module.css';

//Props Type for Dialog Item
export type DialogItemPropsType = {
  user: UserType;
};
// Creating component DialogItem
const DialogItem = (props: DialogItemPropsType) => {
  let path = '/dialogs/' + props.user.id;

  return (
    <div className={c.dialog + ' ' + c.active}>
      <NavLink to={path}>
        {props.user.firstName} {props.user.lastName}
      </NavLink>
    </div>
  );
};

export default DialogItem;
