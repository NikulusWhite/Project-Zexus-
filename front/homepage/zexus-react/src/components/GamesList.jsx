import React from 'react';
import gtaImage from '../assets/images/games-list-images/gta.png';
import papersPleaseImage from '../assets/images/games-list-images/PapersPlease.png';
import battlefieldImage from '../assets/images/games-list-images/Battlefield.png';
import minecraftImage from '../assets/images/games-list-images/minecraft.png';
import './GamesList.css';

const GamesList = () => {
  const games = [
    { id: 1, img: gtaImage, title: 'Grand Theft Auto III', hours: '3h' },
    { id: 2, img: papersPleaseImage, title: 'Papers, Please', hours: '3h' },
    { id: 344, img: battlefieldImage, title: 'Battlefield 6', hours: null },
    { id: 4, img: minecraftImage, title: 'Minecraft', hours: '3h' },
    { id: 3, img: battlefieldImage, title: 'Battlefield 6', hours: null },
  ];

  return (
    <div className="games-list">
      {games.map(game => (
        <div key={game.id} className="games-list-item">
          <div className="game-info">
            <img src={game.img} alt={game.title} />
            <div className="games-list-gameTitle">{game.title}</div>
            {game.hours && (
              <div className="hours-in-game"><span>{game.hours}</span> played</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesList;