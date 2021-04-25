import React, { useState, useRef } from 'react';
import c from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { isPropertyAssignment, ListFormat } from 'typescript';
import DialogItem, { DialogItemPropsType } from './DialogItem/DialogItem';
import Message, { MessagePropsType } from './Message/Message';
import { MessageType, UserType } from '../../redux/state';

type PropsType = {
  users: Array<UserType>;
};

type DialogsPropsType = {
  data: PropsType;
};

const Dialogs = (props: DialogsPropsType) => {
  //
  //Messages useState
  let [componentMessages, setMessages] = useState(props.data.users[0].messages);

  //
  // Function to show messages for user
  const messagesForUser = (userId: string) => {
    let user = props.data.users.find((user) => user.id === userId);
    setMessages(user?.messages);
  };

  //
  //Creating array for Messages using MAP
  let messages = componentMessages?.map((m) => (
    <Message id={m.id} messageText={m.messageText} />
  ));
  //
  //Creating array for Dialogs using MAP
  let dialogs = props.data.users.map((user) => (
    <DialogItem user={user} messagesForUser={messagesForUser} />
  ));

  let textArea = useRef<HTMLTextAreaElement>(null);
  //
  // Check Text Area content
  const onClickHandler = () => {
    let text = textArea.current?.value;
    alert(text);
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogs}</div>
      <div>
        <div className={c.messages}>{messages}</div>
        <div className={c.sendMessage}>
          <textarea ref={textArea} className={c.textArea}></textarea>
          <div>
            <button onClick={onClickHandler} className={c.sendButton}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
