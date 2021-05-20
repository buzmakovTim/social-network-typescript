import React, { useState, useRef, ChangeEvent } from 'react';
import c from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { isPropertyAssignment, ListFormat } from 'typescript';
import DialogItem, { DialogItemPropsType } from './DialogItem/DialogItem';
import Message, { MessagePropsType } from './Message/Message';
import { ActionsType, MessageType, UserType } from '../../redux/state';
import { v1 } from 'uuid';
import { sendMessageActionTypeAC, updateNewMessageTextActionTypeAC } from '../../redux/dialogsPage-reducer';



type DialogsPropsType = {
  newMessage: string
  users: UserType[];
  messages: MessageType[];
  setUserIdFotMessages: (id: string) => void;
  sendMessage: () => void;
  updateMessageText: (messageText: string) => void 
};

const Dialogs = (props: DialogsPropsType) => {


  let messages = props.messages?.map((m) => (
    <Message key={v1()} id={m.id} messageText={m.messageText} />
  ));
  //
  //Creating array for Dialogs using MAP
  let dialogs = props.users.map((user) => (
    <DialogItem key={v1()} user={user} setUserIdFotMessages={props.setUserIdFotMessages}/>
  ));


  // Update Text Message Handler
  let textAreaOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateMessageText(e.currentTarget.value) 
  }

  //Send Message Handler
  const sendMessageHandler = () => {
    props.sendMessage();
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogs}</div>
      <div>
        <div className={c.messages}>{messages}</div>
        <div className={c.sendMessage}>
          <textarea onChange={e => textAreaOnChangeHandler(e)} 
                    value={props.newMessage} 
                    placeholder={'Enter your message'}
                    className={c.textArea}></textarea>
          <div>
            <button onClick={sendMessageHandler} className={c.sendButton}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
