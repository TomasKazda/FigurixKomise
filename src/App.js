import React from 'react';
import './App.css';
import TokenDice from './components/TokenDice'
import TokenBoard from './components/TokenBoard';
import StatusPanel from './components/StatusPanel';

function App() {
  return (
    <div className="app">
      <StatusPanel />
      <TokenBoard />      
      <TokenDice />
    </div>
  );
}

export default App;
