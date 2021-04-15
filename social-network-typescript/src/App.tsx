import React from 'react';
import c from './App.module.css';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';
import Footer from './Component/Footer/Footer';
import Dialogs from './Component/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Component/News/News';
import Music from './Component/Music/Music';
import Settings from './Component/Settings/Settings';
import { UserType } from '.';

export type MessageType = {
  userId: number;
  messageText: string;
};

export type DialogsType = {
  users: UserType[];
  messages: MessageType[];
};

export type PostsType = {
  user: UserType;
  postText: string;
  likes: number;
};

export type UserProfileType = {
  userLoggedIn: UserType;
  posts: PostsType[];
};

export type AppPropsType = {
  dialogs: DialogsType;
  userProfile: UserProfileType;
};

function App(props: AppPropsType) {
  let dialogs = () => (
    <Dialogs users={props.dialogs.users} messages={props.dialogs.messages} />
  );
  let userProfile = () => (
    <Profile
      userLoggedIn={props.userProfile.userLoggedIn}
      posts={props.userProfile.posts}
    />
  );

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className={c.appWrapper}>
          <Navbar />

          <div className={c.appWrapperContent}>
            {/* Dialogs */}
            <Route path="/dialogs" render={dialogs} />
            {/* Profile */}
            <Route path="/profile" render={userProfile} />

            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
