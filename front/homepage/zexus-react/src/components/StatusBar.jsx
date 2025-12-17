import React from 'react';
import './StatusBar.css'; // Создадим отдельный CSS файл

const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="status-bar__header">
        <span className="status-bar__total-label">Total</span>
        <div className="status-bar__total-time">
          <span className="status-bar__hours">5h</span>
          <span className="status-bar__minutes">30m</span>
        </div>
      </div>
      
      <div className='circle-effect'>
        <img src="./assets/images/newGamesImages/eclipseEffect.svg" alt="" />
      </div>

      <div className="status-bar__months">
        <div className="status-bar__month">
          <span className="status-bar__month-name">October</span>
          <div className="status-bar__month-time">
            <span className="status-bar__hours">4h</span>
            <span className="status-bar__minutes">46m</span>
          </div>
        </div>
        
        <div className="status-bar__month">
          <span className="status-bar__month-name">September</span>
          <div className="status-bar__month-time">
            <span className="status-bar__hours">4h</span>
            <span className="status-bar__minutes">0m</span>
          </div>
        </div>
        
        <div className="status-bar__month">
          <span className="status-bar__month-name">August</span>
          <div className="status-bar__month-time">
            <span className="status-bar__hours">15h</span>
            <span className="status-bar__minutes">46m</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;