import React from 'react';
import logo from './logo.svg';
import './App.css';

import EnterSite from './pages/EnterSite';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function entersitePage() {
  return <EnterSite />;
}

function homePage() {
  return <Home />;
}


function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Entersite</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={entersitePage} />
      <Route path="/home" component={homePage} />
    </div>
  </Router>

  );
}

export default App; 
