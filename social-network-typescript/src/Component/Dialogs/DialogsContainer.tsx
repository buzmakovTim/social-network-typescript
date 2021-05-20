import React, { useState, useRef, ChangeEvent } from 'react';
import c from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { isPropertyAssignment, ListFormat } from 'typescript';
import DialogItem, { DialogItemPropsType } from './DialogItem/DialogItem';
import Message, { MessagePropsType } from './Message/Message';
import { ActionsType, MessageType, StoreType, UserType } from '../../redux/state';
import { v1 } from 'uuid';
import { sendMessageActionTypeAC, setUserIdForMessage, updateNewMessageTextActionTypeAC } from '../../redux/dialogsPage-reducer';
import Dialogs from './Dialogs';



type DialogsContainerPropsType = {
  store: StoreType
};

const DialogsContainer = (props: DialogsContainerPropsType) => {
  //
  //Messages useState
  let [componentMessages, setMessages] = useState<MessageType[]>(props.store.getState().dialogsPage.users[0].messages!);
  //props.dispatch(setUserIdForMessage(props.userId))
 
  let [userId, setUserId] = useState(props.store.getState().dialogsPage.users[0].id)
  
  //
  // Function to show messages for user
  const messagesForUser = (userId: string) => {
    let user = props.store.getState().dialogsPage.users.find((user) => user.id === userId);
    setMessages(user?.messages!);
  };

  

  let updateMessageTextHandler = (message: string) => {
        props.store.dispatch(updateNewMessageTextActionTypeAC(message))
  }

  //let textArea = useRef<HTMLTextAreaElement>(null);
  //
  // Check Text Area content
  const sendMessageHandler = () => {
    if(props.store.getState().dialogsPage.newMessageText) {
        props.store.dispatch(sendMessageActionTypeAC(props.store.getState().dialogsPage.userId ? props.store.getState().dialogsPage.userId : userId))
    }
  };

  // Set UserId to show proper messages
  let setUserIdFotMessagesHandler = (id: string) => {
    messagesForUser(id)
    setUserId(id)  
    props.store.dispatch(setUserIdForMessage(id))
  }

  return (
        <Dialogs  updateMessageText={updateMessageTextHandler} 
                  messages={componentMessages} 
                  users={props.store.getState().dialogsPage.users}
                  sendMessage={sendMessageHandler}
                  setUserIdFotMessages={setUserIdFotMessagesHandler}
                  newMessage={props.store.getState().dialogsPage.newMessageText}/>
    )
};

export default DialogsContainer;
