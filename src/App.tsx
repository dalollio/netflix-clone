import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FeatureMovie from './components/FeatureMovie';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FeatureMovie />
    </div>
  );
}

export default App;
