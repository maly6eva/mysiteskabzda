import React from 'react'
import './App.css';

 const App = () => {
  return (
    <div className="app-wrapper">
      <Header className='header'>
        <img src="https://img.freepik.com/free-vector/pelican-illustration-logo-design_343694-3232.jpg?t=st=1722766376~exp=1722769976~hmac=a2813496383544962493100f48e385f733abe48065f8f545c6c287feb8057248&w=1380" alt="logo"/>
      />
      <nav className='nav'>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className='content'>
        <img src="https://avatars.mds.yandex.net/i?id=d799ba7296bf38a6cf3e9cd7726006a5049ff977-4211909-images-thumbs&n=13" alt=""/>
      </div>
    </div>);
}

export default App;
