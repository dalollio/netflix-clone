import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FeatureMovie from './components/FeatureMovie';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <FeatureMovie />
      <Section key={String(1)}/>
      <Section key={String(2)}/>
      <Section key={String(3)}/>
      <Section key={String(4)}/>
      <Section key={String(5)}/>
      <Navbar />
    </div>
  );
}

export default App;
