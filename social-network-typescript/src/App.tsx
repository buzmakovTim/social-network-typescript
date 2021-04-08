import React from 'react';
// import logo from './logo.svg';
import c from './App.module.css';
import Header from './Component/Heater/Header';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';
import Footer from './Component/Footer/Footer';
import Dialogs from './Component/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Component/News/News';
import Music from './Component/Music/Music';
import Settings from './Component/Settings/Settings';

export type UserType = {
  id: number;
  avatarUrl: string;
  firstName: string;
  lastName: string;
};

const user: UserType = {
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
  { user: user, postText: 'First post', likes: 10 },
  { user: user1, postText: 'Second Post', likes: 5 },
  { user: user2, postText: 'Third post', likes: 2 },
];

const message = {
  userId: 1,
  messageText: 'First message for user with ID - 1',
};

const message1 = {
  userId: 2,
  messageText: 'First message for user with ID - 2',
};

const message2 = {
  userId: 3,
  messageText: 'First message for user with ID - 3',
};

const users = [user, user1, user2];
const messages = [message, message1, message2];

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className={c.appWrapper}>
          <Navbar />

          <div className={c.appWrapperContent}>
            <Route
              path="/dialogs"
              component={() => <Dialogs users={users} messages={messages} />}
            />

            <Route
              path="/profile"
              component={() => <Profile userLoggedIn={user} posts={posts} />}
            />

            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
