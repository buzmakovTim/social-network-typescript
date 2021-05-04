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
import { StateType } from './redux/state';

export type AppPropsType = {
  state: StateType;
  addPost: () => void;
  updateNewPostText: (newPostText: string) => void;
};

function App(props: AppPropsType) {
  // Dialogs
  let dialogs = () => <Dialogs data={props.state.dialogsPage} />;
  // UserProfile
  let userProfile = () => (
    <Profile
      urlBackgroundImg={props.state.profilePage.urlBackgroundImg}
      userLoggedIn={props.state.profilePage.userLoggedIn}
      posts={props.state.profilePage.posts}
      addPost={props.addPost}
      newPostText={props.state.profilePage.newPostText}
      updateNewPostText={props.updateNewPostText}
    />
  );

  return (
    <div>
      <Header />
      <div className={c.appWrapper}>
        <Navbar friends={props.state.friendsPageSideBar} />

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
  );
}

export default App;
