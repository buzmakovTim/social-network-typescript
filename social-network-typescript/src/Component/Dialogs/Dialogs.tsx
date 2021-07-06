import React, { useState, useRef, ChangeEvent } from 'react';
import c from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { isPropertyAssignment, ListFormat } from 'typescript';
import DialogItem, { DialogItemPropsType } from './DialogItem/DialogItem';
import Message, { MessagePropsType } from './Message/Message';
import { MessageType, UserType } from '../../types/types';
import { v1 } from 'uuid';
import { sendMessageActionTypeAC, updateNewMessageTextActionTypeAC } from '../../redux/dialogsPage-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';



type DialogsPropsType = {
  newMessage: string
  users: UserType[];
  messages: MessageType[];
  setUserIdFotMessages: (id: string) => void;
  sendMessage: () => void;
  updateMessageText: (messageText: string) => void 
};

const Dialogs = () => {

  const dispatch = useDispatch();
  
  let messageValue =  useSelector<AppStateType, string>(state => state.dialogsPage.newMessageText) 
  let userId: string = useSelector<AppStateType, string>(state => state.dialogsPage.userId) 
  //userId = useSelector<AppStateType, string>(state => state.dialogsPage.users[0].id)
  const dialogs = useSelector<AppStateType, Array<UserType>>(state => state.dialogsPage.users) 

  
  let messagesComponent
  if(userId !== '') {
    let user = dialogs.find(d => d.id === userId)
    
    messagesComponent = user?.messages?.map( m =>
      <Message key={v1()} id={m.id} messageText={m.messageText} />
      )
    }

  
  //Creating array for Dialogs using MAP
  let dialogsComponent = dialogs.map((user) => (
    <DialogItem key={user.id} user={user} />
  ));


  // Update Text Message Handler
  let textAreaOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //props.updateMessageText(e.currentTarget.value)
    dispatch(updateNewMessageTextActionTypeAC(e.currentTarget.value)) 
  }

  //Send Message Handler
  const sendMessageHandler = () => {
    dispatch(sendMessageActionTypeAC(userId))
  };

  return (
    <div className={c.dialogs}>
      {/* Dialogs */}
      <div className={c.dialogsItems}>{dialogsComponent}</div>
      <div>
        {/* Messages */}
        <div className={c.messages}>{messagesComponent}</div>
        <div className={c.sendMessage}>
          <textarea onChange={e => textAreaOnChangeHandler(e)} 
                    value={messageValue} 
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
