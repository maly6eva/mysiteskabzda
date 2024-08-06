import React from 'react'
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import MyPosts from "./component/Profile/MyPosts/MyPosts";


 const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <Navbar />
          <Profile />
          <MyPosts />
      </div>);
 }

export default App;
