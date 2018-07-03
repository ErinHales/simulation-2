import React, { Component } from 'react';
import "./reset.css";
import './App.css';
import routes from './route';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
