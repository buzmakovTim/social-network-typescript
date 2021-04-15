import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { DialogsType, MessageType, UserProfileType } from './App';
import reportWebVitals from './reportWebVitals';

// ALL DATA STILL HERE
export type UserType = {
  id: number;
  avatarUrl: string;
  firstName: string;
  lastName: string;
};

const timBuzmakov: UserType = {
  id: 1,
  avatarUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
  firstName: 'Tim',
  lastName: 'Buzmakov',
};

const user1: UserType = {
  id: 2,
  avatarUrl: 'missing',
  firstName: 'Kevin',
  lastName: 'William',
};

const user2: UserType = {
  id: 3,
  avatarUrl: 'missing',
  firstName: 'Paul',
  lastName: 'Miller',
};

const posts = [
  { user: timBuzmakov, postText: 'First post', likes: 10 },
  { user: user1, postText: 'Second Post', likes: 5 },
  { user: user2, postText: 'Third post', likes: 2 },
];

const message: MessageType = {
  userId: 1,
  messageText: 'First message for user with ID - 1',
};

const message1: MessageType = {
  userId: 2,
  messageText: 'First message for user with ID - 2',
};

const message2: MessageType = {
  userId: 3,
  messageText: 'First message for user with ID - 3',
};

let users: UserType[] = [timBuzmakov, user1, user2];
let messages: MessageType[] = [message, message1, message2];

let dialogs: DialogsType = {
  users: users,
  messages: messages,
};

let userProfile: UserProfileType = {
  userLoggedIn: timBuzmakov,
  posts: posts,
};

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} userProfile={userProfile} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
