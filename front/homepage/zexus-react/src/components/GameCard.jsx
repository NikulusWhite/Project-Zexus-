import React from 'react';
import gamePoster from '../assets/images/game-poster.png';
import './GameCard.css';

const GameCard = ({ userName = "Koveldik", gameTitle = "Disco Elysium", timePlayed = "2h" }) => {
  return (
    <div className="last-game-card">
      <div className="last-game-text">
        <div className="last-game-title">
          Привет, <span className="user-name">{userName}</span>
        </div>
        <div className="game-title">{gameTitle}</div>
        <div className="time-in-game"><span>{timePlayed} played</span></div>
      </div>
      <button className="continue-button">CONTINUE</button>
      <img className="game-poster-size" src={gamePoster} alt={gameTitle} />
    </div>
  );
};

export default GameCard;