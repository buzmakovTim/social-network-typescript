import React from 'react';
import c from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { UserType } from '../../index';
import { isPropertyAssignment } from 'typescript';
import DialogItem, { DialogItemPropsType } from './DialogItem/DialogItem';
import Message, { MessagePropsType } from './Message/Message';

type DialogsPropsType = {
  users: Array<UserType>;
  messages: Array<MessagePropsType>;
};
// We need to pass props with Dialogs Array

const Dialogs = (props: DialogsPropsType) => {
  //
  //Creating array for Dialogs using MAP
  let dialogs = props.users.map((user) => <DialogItem user={user} />);

  //
  //Creating array for Messages using MAP
  let messages = props.messages.map((m) => (
    <Message userId={m.userId} messageText={m.messageText} />
  ));

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogs}</div>

      {/* We need to pass props with array or messages */}
      <div className={c.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
