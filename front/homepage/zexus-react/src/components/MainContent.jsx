import React from 'react';
import GameCard from './GameCard';
import GamesList from './GamesList';
import NewGames from './NewGames';
import StatsCard from './StatsCard';
import StatusBar from './StatusBar';

import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <GameCard />
      <GamesList />
      <div className=""></div>
      <NewGames />
      {/* <StatsCard /> */}
      <StatusBar />
    </div>
  );
};

export default MainContent;