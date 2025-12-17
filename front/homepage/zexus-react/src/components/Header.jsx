import React from 'react';
import logo from '../assets/images/Zexus.svg';
import searchIcon from '../assets/images/search-icon.svg';
import carIcon from '../assets/images/car.svg';
import notificationIcon from '../assets/images/notification.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="logo">
        <img src={logo} alt="zexus-logo" />
      </a>
      <div className="main-search">
        <input placeholder="Search" type="text" className="zexus-search" />
        <button className="search_button">
          <img src={searchIcon} alt="search-icon" />
        </button>
      </div>
      <div className="header-menu">
        <button className="car-button">
          <div className="header-car">
            <img src={carIcon} alt="car" />
          </div>
        </button>
        <button className="notification-button">
          <div className="actual-notification"></div>
          <div className="notification">
            <img src={notificationIcon} alt="notification" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;