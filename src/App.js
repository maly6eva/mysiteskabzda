import React from 'react'
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Navbar/Profile/Profile";


 const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <Navbar />
          <Profile />



      </div>);
 }

export default App;
