import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Message.module.css';

//Props Type for Messages
export type MessagePropsType = {
  userId: number;
  messageText: string;
};

// Creating Message Component
const Message = (props: MessagePropsType) => {
  let path = '/dialogs/' + props.userId;
  return (
    <div className={c.message}>
      <NavLink to={path}>{props.messageText}</NavLink>
    </div>
  );
};

export default Message;
