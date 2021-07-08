import React from 'react';
import c from './App.module.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Dialogs from './Component/Dialogs/Dialogs';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import News from './Component/News/News';
import Music from './Component/Music/Music';
import Settings from './Component/Settings/Settings';
// import { ActionsType, RootStateType, StoreType } from './redux/state';
import NavbarContainer from './Component/Navbar/NavbarContainer';

import { UsersContainer } from './Component/Users/UsersContainer';
// import { ProfileContainer } from './Component/Profile/ProfileContainer';
import { HeaderContainer } from './Component/Header/HeaderContainer';
import Login from './Component/Login/Login';
import withAuthRedirect from './hoc/withAuthRedirect';
import ProfileContainer from './Component/Profile/ProfileContainer';
// import ProfileContainer from './Component/Profile/ProfileContainer';

// import { UsersContainer } from './Component/Users/UsersContainer';

// import DialogsContainer from './Component/Dialogs/DialogsContainer';

//export type AppPropsType = {
  
  //store: StoreType;
  
  //state: RootStateType
  //dispatch: (action: ActionsType) => void 
  //state: RootStateType;
  //addPost: () => void;
  //updateNewPostText: (newPostText: string) => void;
//};

const App = () => {

  //const state = props.store.getState()

  
  
  return (
    <div>
      <HeaderContainer />
      <div className={c.appWrapper}>

          {/* Side bar navigation component */}
           <NavbarContainer />

      <div className={c.appWrapperContent}>

          {/* Dialogs */}

          
          {/* @ts-ignore */}
          <Route path="/dialogs" render={() => <Dialogs/> } />
          {/* <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>} /> */}

          {/* Profile */}
          {/* /profile/:userId?   :userId?  it's for withRouter */}
          {/* @ts-ignore */}
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

          {/* Find Users */}
          <Route path="/users"  render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          
          {/* Route to Login page */}
          <Route path="/login" render={() => <Login />} />

          {/* Main default page is Profile */}
          <Redirect to="/profile" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
