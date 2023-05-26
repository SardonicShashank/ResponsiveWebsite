import React from 'react';
import './NavBar.css';
import logo from './img/logo.png';
import accountcircle from './img/accountcircle.png';
import Vector1 from './img/Vector1.png';
import Vector from './img/Vector.png';

const Navbar = () => {
  return (
    <div id="header">
      <div id="navbar">
        <div>
          <img src={logo} alt="logo" id="logo" />
          <div id="nav">
            <span id="text1">My Assignment</span>
            <span id="text2">Chat with Mentor</span>
            <div id="profile">
              <img src={accountcircle} alt="account" id="account" />
              <span id="name">ProfileName</span>
              <img src={Vector1} alt="vector" id="vector" />
            </div>
          </div>
          <button id="btn">
            <span id="profile">ProfileName</span>
            <img src={Vector} alt="vector" id="vec" />
          </button>
        </div>
        <span id="ui">UI/UX {'>'} Refer & Earn</span>
      </div>
    </div>
  );
};

export default Navbar;
