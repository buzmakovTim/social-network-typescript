import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Message.module.css';

//Props Type for Messages
export type MessagePropsType = {
  id: string;
  messageText: string;
};

// Creating Message Component
const Message = (props: MessagePropsType) => {
  //let path = '/dialogs/' + props.id;
  return <div className={c.message}>{props.messageText}</div>;
};

export default Message;
