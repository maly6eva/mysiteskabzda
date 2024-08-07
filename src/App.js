import "./App.css";
import React from "react";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import News from "./component/Profile/News/News";
import Music from "./component/Profile/Music/Music";
import Settings from "./component/Profile/Settings/Settings";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <Routes>

          <Route path="/profile/*" element={<Profile />} />
          <Route path="/dialogs/*" element={<Dialogs />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>


        {/*<Route path='/dialogs' element={<Dialogs state={props.state.dialogPage}/>}/>*/}
        {/*<Route path='/profile' element={<Profile state={props.state.profilePage}/>}/>*/}
      </div>
    </div>
  );
};

export default App;



