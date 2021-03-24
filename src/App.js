import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/cart" component={Cart} />  
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;