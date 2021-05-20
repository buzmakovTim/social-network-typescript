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
import { ActionsType, RootStateType, StoreType } from './redux/state';
import DialogsContainer from './Component/Dialogs/DialogsContainer';

export type AppPropsType = {
  
  store: StoreType;
  //state: RootStateType
  dispatch: (action: ActionsType) => void 
  //state: RootStateType;
  //addPost: () => void;
  //updateNewPostText: (newPostText: string) => void;
};

const App: React.FC<AppPropsType> = (props) => {

  const state = props.store.getState()

  return (
    <div>
      <Header />
      <div className={c.appWrapper}>
        <Navbar friends={state.friendsPageSideBar} />

        <div className={c.appWrapperContent}>

          {/* Dialogs */}
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>} />

          {/* Profile */}
          <Route path="/profile" render={() => <Profile store={props.store} />} />


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
