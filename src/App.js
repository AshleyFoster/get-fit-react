import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css';
import Exercises from './components/Exercises'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="Logo">Get<span>Fit</span></h1>
        </div>

        <Router>
          <Route exact path="/" component={Exercises}/>
        </Router>
      </div>
    );
  }
}
