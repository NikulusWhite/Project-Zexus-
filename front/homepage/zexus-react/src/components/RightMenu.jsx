import React from 'react';
import gamepadIcon from '../assets/images/gamepad.svg';
import markIcon from '../assets/images/mark.svg';
import chartIcon from '../assets/images/chart-button.svg';
import menuIcon from '../assets/images/menu-svg.svg';
import './RightMenu.css';

const RightMenu = () => {
  const buttons = [
    { id: 1, img: gamepadIcon, className: 'gamepad-button' },
    { id: 2, img: markIcon, className: 'mark-button' },
    { id: 3, img: chartIcon, className: 'chart-button' },
    { id: 4, img: menuIcon, className: 'menu-button' },
    
  ];

  return (
    <div className="right-menu">
      <div className="menu-button-list">
        {buttons.map(button => (
          <button key={button.id} className={`${button.className} button`}>
            <img src={button.img} alt={button.className} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RightMenu;