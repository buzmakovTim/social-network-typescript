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
  firstName: string;
  lastName: string;
};

const user = {
  firstName: 'Tim',
  lastName: 'Buzmakov',
};

const user1 = {
  firstName: 'Kevin',
  lastName: 'William',
};

const user2 = {
  firstName: 'Paul',
  lastName: 'Miller',
};

const posts = [
  { user: user, postText: 'First post', likes: 10 },
  { user: user1, postText: 'Second Post', likes: 5 },
  { user: user2, postText: 'Third post', likes: 2 },
];

function App() {
  return (
    <BrowserRouter>
      <div className={c.appWrapper}>
        <Header />
        <Navbar />

        <div className={c.appWrapperContent}>
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={() => <Profile posts={posts} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
