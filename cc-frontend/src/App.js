import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import RecDetails from './RecDetails'

function App() {
  return (
    <div className="App">
      <Header />
      <RecDetails />
      <div className="sidebar">
      </div>
    </div>
  );
}

export default App;
