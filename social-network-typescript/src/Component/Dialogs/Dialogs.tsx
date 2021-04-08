import React from 'react';
import c from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { UserType } from '../../App';
import { isPropertyAssignment } from 'typescript';
import DialogItem, { DialogItemPropsType } from './DialogItem/DialogItem';
import Message, { MessagePropsType } from './Message/Message';

type DialogsPropsType = {
  users: Array<UserType>;
  messages: Array<MessagePropsType>;
};
// We need to pass props with Dialogs Array

const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        {props.users.map((u) => (
          <DialogItem user={u} />
        ))}
      </div>

      {/* We need to pass props with array or messages */}
      <div className={c.messages}>
        {props.messages.map((m) => (
          <Message userId={m.userId} messageText={m.messageText} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
