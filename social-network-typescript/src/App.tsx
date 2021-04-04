import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Component/Heater/Header';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';
import Footer from './Component/Footer/Footer';



function App() {
  return (
    
    <div className="app-wrapper">
      
      <Header /> 
      <Navbar />
      <Profile />
      <Footer />
      
    </div>

    
    );
}

export default App;
