import React from 'react';
import LeftMenu from './components/LeftMenu';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SideMenu from './components/SideMenu';
import RightMenu from './components/RightMenu';
import './App.css';

function App() {
  return (
    <div className="zexus">
      <LeftMenu />
      <Header />
      <MainContent />
      <SideMenu />
      <RightMenu />
    </div>
  );
}

export default App;