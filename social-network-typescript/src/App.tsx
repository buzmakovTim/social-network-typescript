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
import { StoreType } from './redux/state';

export type AppPropsType = {
  
  store: StoreType
  
  //state: RootStateType;
  //addPost: () => void;
  //updateNewPostText: (newPostText: string) => void;
};

const App: React.FC<AppPropsType> = (props) => {

  const state = props.store.getState()

  // Dialogs
  let dialogs = () => <Dialogs data={state.dialogsPage} newMessage={props.store.getState().dialogsPage.newMessageText} dispatch={props.store.dispatch.bind(props.store)}/>;
  // UserProfile
  let userProfile = () => (
    <Profile
      urlBackgroundImg={state.profilePage.urlBackgroundImg}
      userLoggedIn={state.profilePage.userLoggedIn}
      posts={state.profilePage.posts}
      //addPost={props.store.addPost.bind(props.store)}
      newPostText={state.profilePage.newPostText}
      dispatch={props.store.dispatch.bind(props.store)}
      //updateNewPostText={props.store.updateNewPostText.bind(props.store)}
    />
  );

  return (
    <div>
      <Header />
      <div className={c.appWrapper}>
        <Navbar friends={state.friendsPageSideBar} />

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
