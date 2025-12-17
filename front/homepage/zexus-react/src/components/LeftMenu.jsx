import React from 'react';
import leftMenuIcon from '../assets/images/left-menu-icon.svg';
import messengerIcon from '../assets/images/messenger-icon.svg';
import friend1 from '../assets/images/friends-icons/Group 5.png';
import friend2 from '../assets/images/friends-icons/Group 3.png';
import friend3 from '../assets/images/friends-icons/Ellipse 8.png';
import friend4 from '../assets/images/friends-icons/Group 4.png';
import friend5 from '../assets/images/friends-icons/Ellipse 10.png';
import './LeftMenu.css';

const LeftMenu = () => {
  const friends = [
    { id: 1, img: friend1 },
    { id: 2, img: friend2 },
    { id: 3, img: friend3 },
    { id: 4, img: friend4 },
    { id: 5, img: friend5 },
  ];

  return (
    <div className="left-menu">
      <button className="add_friend-button">
        <img src={leftMenuIcon} alt="friends-icon" />
      </button>
      <div className="line"></div>
      <ul className="friends-list">
        {friends.map(friend => (
          <button key={friend.id} className="friends-list-item">
            <li><img src={friend.img} alt="friend" /></li>
          </button>
        ))}
      </ul>
      <div className="second-line"></div>
      <button className="messenger">
        <img src={messengerIcon} alt="messenger" />
      </button>
    </div>
  );
};

export default LeftMenu;