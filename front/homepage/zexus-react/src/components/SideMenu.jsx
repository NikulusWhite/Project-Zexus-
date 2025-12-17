import React from 'react';
import avatarImage from '../assets/images/icons/side-icon-avatar.png';
import brilliantIcon from '../assets/images/icons/briliant.svg';
import './SideMenu.css';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="avatar">
        <img src={avatarImage} alt="avatar" />
      </div>
      <div className="menu-buttons">
        <button className="icon-btn">⚙️</button>
      </div>
      <div className="bottom-button">
        <button className="premium-btn">
          <img src={brilliantIcon} alt="premium" />
        </button>
      </div>
    </div>
  );
};

export default SideMenu;