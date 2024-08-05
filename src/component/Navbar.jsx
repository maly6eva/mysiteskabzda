import React from "react";

const Navbar = () => {
    return <nav className='nav'>
        <div>
            <a className='navbar' href="#">Profile</a>
        </div>
        <div>
            <a className='navbar' href="#">Messages</a>
        </div>
        <div>
            <a className='navbar' href="#">News</a>
        </div>
        <div>
            <a  className='navbar' href="#">Music</a>
        </div>
        <div>
            <a className='navbar' href="#">Settings</a>
        </div>
    </nav>
}

export default Navbar;