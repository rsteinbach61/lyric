import React from 'react';
import searchContainer from './containers/searchContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <h1> Lyric </h1>
      <Route exact path="/" component={searchContainer} />
    </div>
    </Router>
  );
}

export default App;
