import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="overlay"></div>
        <nav>
          <h2>Shop</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li className="cart"><a href="#">
            <ion-icon name="basket"></ion-icon>Cart<span> (0)</span>
              </a></li>
          </ul>
        </nav>
       </header>
    </div>
  );
}

export default App;
