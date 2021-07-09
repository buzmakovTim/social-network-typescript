import React, { useState, useRef, ChangeEvent } from 'react';
import c from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { UserType } from '../../types/types';
import { v1 } from 'uuid';
import { sendMessageActionTypeAC } from '../../redux/dialogsPage-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import {Field, reduxForm} from 'redux-form';


// type DialogsPropsType = {
//   newMessage: string
//   users: UserType[];
//   messages: MessageType[];
//   setUserIdFotMessages: (id: string) => void;
//   sendMessage: () => void;
//   updateMessageText: (messageText: string) => void 
// };

const Dialogs = () => {

  const dispatch = useDispatch();
  
  //let messageValue =  useSelector<AppStateType, string>(state => state.dialogsPage.newMessageText) 
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


  // Add new message call back
  const addNewMessage = (messageValue: any) => {
      //alert(messageValue.newMessageBody);
      dispatch(sendMessageActionTypeAC(userId, messageValue.newMessageBody))
  }

  return (
    <div className={c.dialogs}>
      {/* Dialogs */}
      <div className={c.dialogsItems}>{dialogsComponent}</div>
      <div>
        {/* Messages */}
        <div className={c.messages}>{messagesComponent}</div>
        <div className={c.sendMessage}>

          {/* Send Message Form */}
          <AddMessageFormRedux onSubmit={addNewMessage}/>
    
        </div>
      </div>
    </div>
  );
};



// Send Message form
const AddMessageForm = (props: any) => {
  
  return (
    <form onSubmit={props.handleSubmit}>

        <div>
          <Field  component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
        </div>
        <div>
          <button>Send</button>
        </div>

    </form>
  )
}

const AddMessageFormRedux = reduxForm ({form: 'addMessage'})(AddMessageForm)


export default Dialogs;
