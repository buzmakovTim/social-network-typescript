import React from 'react';
import c from './App.module.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Dialogs from './Component/Dialogs/Dialogs';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import News from './Component/News/News';
import Music from './Component/Music/Music';
import Settings from './Component/Settings/Settings';
import NavbarContainer from './Component/Navbar/NavbarContainer';
import { UsersContainer } from './Component/Users/UsersContainer';
import { HeaderContainer } from './Component/Header/HeaderContainer';
import Login from './Component/Login/Login';
import Profile from './Component/Profile/Profile';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { AppStateType } from './redux/redux-store';
import { Preloader } from './Component/Common/Preloader/Preloader';


class App extends React.Component<AppPropsType> {

  componentDidMount(){

    this.props.initializeApp();
  
  }
  


  render() {

      if(!this.props.initialized) {
        alert('Initializing')
        return <Preloader />
      }

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
              
              <Route path="/profile/:userId?" render={() => <Profile />} />

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
}

type MapStatePropsType = {
  initialized: boolean;
}
type MapDispatchPropsType = {
  initializeApp: () => void
 }



const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {initialized: state.app.initialazed}
}

type AppPropsType = MapStatePropsType & MapDispatchPropsType


export default connect(mapStateToProps, {initializeApp})(App);
