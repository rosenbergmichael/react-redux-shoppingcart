import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Route path="/" component={Home} />
          <Route path="/cart" component={Cart} />  
        </Router>
      </div>
    </Provider>
  );
}

export default App;
