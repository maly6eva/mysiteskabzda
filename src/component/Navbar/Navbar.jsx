import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"

const Navbar = () => {
   return (
       <nav className={s.nav}>
           <div className={s.item}>
               <NavLink to="/profile" className={({ isActive }) =>(isActive ? " active" : "")}>Profile</NavLink>
           </div>
           <div className={s.item}>
               <NavLink to="/dialogs" className={({ isActive }) =>(isActive ? " active" : "")}>Messages</NavLink>
           </div>
           <div className={s.item}>
               <NavLink to="/news" className={({ isActive }) =>(isActive ? " active" : "")}>News</NavLink>
           </div>
           <div className={s.item}>
               <NavLink to="/music" className={({ isActive }) =>(isActive ? " active" : "")}>Music</NavLink>
           </div>
           <div className={s.item}>
               <NavLink to="/settings" className={({ isActive }) =>(isActive ? " active" : "")}>Settings</NavLink>
           </div>
       </nav>
   )

}

export default Navbar;
