import React, { useState, useRef, ChangeEvent } from 'react';
import c from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { isPropertyAssignment, ListFormat } from 'typescript';
import DialogItem, { DialogItemPropsType } from './DialogItem/DialogItem';
import Message, { MessagePropsType } from './Message/Message';
import { ActionsType, MessageType, UserType } from '../../redux/state';
import { v1 } from 'uuid';
import { sendMessageActionTypeAC, updateNewMessageTextActionTypeAC } from '../../redux/dialogsPage-reducer';

type PropsType = {
  users: Array<UserType>;
};

type DialogsPropsType = {
  data: PropsType;
  dispatch: (action: ActionsType) => void
  newMessage: string
  userId: string
};

const Dialogs = (props: DialogsPropsType) => {
  //
  //Messages useState
  let [componentMessages, setMessages] = useState(props.data.users[0].messages);
  //props.dispatch(setUserIdForMessage(props.userId))
  
  //
  //
  let [userId, setUserId] = useState(props.data.users[0].id)
  //alert(userId)
  
  //props.dispatch(setUserIdForMessage(userId))
  // let userIdSendTo: string = ''
  //
  //
  // let setSendToUserId = (id: string) => {
  //   userIdSendTo = id
  // }

  //
  // Function to show messages for user
  const messagesForUser = (userId: string) => {
    
    let user = props.data.users.find((user) => user.id === userId);
    //if(user){
      //setSendToUserId(userId)
    //}
    setMessages(user?.messages);
  };

  //
  //Creating array for Messages using MAP
  let messages = componentMessages?.map((m) => (
    <Message key={v1()} id={m.id} messageText={m.messageText} />
  ));
  //
  //Creating array for Dialogs using MAP
  let dialogs = props.data.users.map((user) => (
    <DialogItem key={v1()} user={user} messagesForUser={messagesForUser} dispatch={props.dispatch}/>
  ));

  
  //
  //
  let textAreaOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageTextActionTypeAC(e.currentTarget.value))
  }
  //let textArea = useRef<HTMLTextAreaElement>(null);
  //
  // Check Text Area content
  const sendMessageHandler = () => {
    //let text = textArea.current?.value;
    if(props.newMessage) {
        props.dispatch(sendMessageActionTypeAC(props.userId ? props.userId : userId))
    }
    
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
