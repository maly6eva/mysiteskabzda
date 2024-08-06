import React from "react";
import './Navbar.css'

const Navbar = () => {
    return <nav className='nav'>
        <div className='item'>
            <a className='navbar' href="#">Profile</a>
        </div>
        <div className='item'>
            <a className='navbar' href="#">Messages</a>
        </div>
        <div className='item'>
            <a className='navbar' href="#">News</a>
        </div>
        <div className='item'>
            <a className='navbar' href="#">Music</a>
        </div>
        <div className='item'>
            <a className='navbar' href="#">Settings</a>
        </div>
    </nav>
}

export default Navbar;