import React from 'react';
import './StatsCard.css';

const StatsCard = () => {
  const months = [
    { id: 1, name: 'October', time: '4h 46m' },
    { id: 2, name: 'September', time: '4h 46m' },
    { id: 3, name: 'November', time: '7h 46m' },
  ];

  return (
    <div className="card">
      <div className="circle-wrapper">
        <div className="outer-dots"></div>
        <div className="inner-circle">
          <div className="label">Total</div>
          <div className="time">5h 30m</div>
        </div>
      </div>
      <div className="month-list">
        {months.map(month => (
          <div key={month.id} className="item">
            <div className="item-title">
              {month.name}
              <div className="time-bar_under"></div>
              <span className="time-bar-text">{month.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;