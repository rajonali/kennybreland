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
    <div>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                    integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                    crossorigin="anonymous"/>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                    crossorigin="anonymous"/>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&family=Permanent+Marker&display=swap" rel="stylesheet" />

<Router>
      <Route path="/" exact component={entersitePage} />
      <Route path="/home" component={homePage} />
  </Router>


    </div>

  );
}

export default App; 
