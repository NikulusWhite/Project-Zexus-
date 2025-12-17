import React, { useEffect, useRef } from 'react';
import tombRaiderImage from '../assets/images/newGamesImages/TombRaider.png';
import doomImage from '../assets/images/newGamesImages/Doom.png';
import checkIcon from '../assets/images/icons/galochka.svg';
import cartIcon from '../assets/images/icons/cart.svg';
import subtractIcon from '../assets/images/icons/Subtract.svg';
import './NewGames.css';

const NewGames = () => {
  const trackRef = useRef(null);

  const games = [
    { id: 1, img: tombRaiderImage },
    { id: 2, img: doomImage },
    { id: 3, img: tombRaiderImage },
    { id: 4, img: tombRaiderImage },
    { id: 4, img: tombRaiderImage },
    { id: 2, img: doomImage },
    { id: 4, img: tombRaiderImage },
    { id: 4, img: tombRaiderImage },

  ];

  // 👉 создаём «бесконечный» массив
  const infiniteGames = [...games, ...games, ...games];

  useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  const card = track.children[0];
  if (!card) return;

  const cardWidth = card.offsetWidth + 20;
  const singleSetWidth = games.length * cardWidth;
  const middleSet = singleSetWidth; // Начинаем со второго набора

  // Устанавливаем начальную позицию
  track.scrollLeft = middleSet;

  const onScroll = () => {
    const threshold = 50; // Небольшой порог для предотвращения дребезга

    if (track.scrollLeft <= threshold) {
      // Прокрутили к началу виртуального массива
      track.style.scrollBehavior = 'auto';
      track.scrollLeft += singleSetWidth;
      track.style.scrollBehavior = 'smooth';
    } else if (track.scrollLeft >= (singleSetWidth * 2) - threshold) {
      // Прокрутили к концу виртуального массива
      track.style.scrollBehavior = 'auto';
      track.scrollLeft -= singleSetWidth;
      track.style.scrollBehavior = 'smooth';
    }
  };

  track.addEventListener('scroll', onScroll);
  return () => track.removeEventListener('scroll', onScroll);
}, [games.length]);

  const scrollNext = () => {
    const track = trackRef.current;
    const card = track.children[0];
    track.scrollBy({
      left: card.offsetWidth + 20,
      behavior: 'smooth',
    });
  };
  const scrollPrev = () => {
  const track = trackRef.current;
  if (!track) return;

  const card = track.children[0];
  track.scrollBy({
    left: -(card.offsetWidth + 20),
    behavior: 'smooth',
  });
};


  return (
    
    <div className="newGames">
      <div className="newGames-title">
        <button className="newGames-button">New games</button>
        <img className="galochka" src={checkIcon} alt="check" />
      </div>

      <div className="newGames-viewport">
        <div className="newGames-list infinite" ref={trackRef}>
          {infiniteGames.map((game, index) => (
            <div key={index} className="newGames-card">
              <img
                className="newGames-card-image"
                src={game.img}
                alt="new game"
              />
              <div className="cart-icon">
                <img src={cartIcon} alt="cart" />
              </div>
            </div>
            
          ))}
          
        </div>
      </div>
        <div className="Subtract_right">
          <button className="Subtract-button" onClick={scrollNext}>
            <img src={subtractIcon} alt="next" />
          </button>
        </div>
    </div>
  );
};

export default NewGames;
