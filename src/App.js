import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home /> 
    </div>
  );
}

export default App;
