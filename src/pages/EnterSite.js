import React, { Component } from 'react';
import Background from '../images/entersite.jpg';
import ReactSVG from 'react-svg';

import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Image from '../images/aperture.svg';


import './EnterSite.css';


var sectionStyle = {
    backgroundRepeat  : 'no-repeat',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    height: window.innerHeight,
    width: window.innerWidth
  };


  

class EnterSite extends Component {


  
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
      }
      
      componentDidMount() {
      }
      
      componentWillUnmount() {
      }
      
      updateWindowDimensions() {
      }

    render() {
        return (
            <div>
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                  <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300" rel="stylesheet" />
                  <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet" />

    <div style={{flex:1,backgroundColor:'black', textAlign:'center', height: this.state.height}} class="box">
    <div style={ sectionStyle }>

            
            <div style={{color:'white', paddingTop:'15%', fontFamily:'Montserrat', fontSize:'20px',  textShadow: '-1px 1px 10px rgba(255, 255, 255, 1)'}}><strong>
            </strong></div>
            <h1 style={{fontFamily:'bebas neue', color:'#d9534f', fontSize:30, marginTop:10}}>p h o t o g r  a p h e r</h1>

<pre><h1 style={{color:'white', fontFamily:'Permanent Marker', fontSize:'50px'}}>      K E N N Y • B R E L A N D</h1></pre>
            
            <center style={{paddingTop:'10px'}}>
            <h5 style={{width:'300px', padding:'10px', borderStyle: 'solid', borderWidth:"1px", borderColor:'#d9534f', fontFamily:'Montserrat', textShadow: '-1px 1px 10px rgba(0, 0, 0, 1)', }}><strong style={{margin:'1px'}}><Link style={{textDecoration: 'none', color:'#d9534f'}} to="/home"><strong>E N T E R</strong></Link></strong></h5>
            </center>
            <div style={{paddingTop:'17%'}}>
            <i style={{color:"#d9534f", size:'10px', padding:10}} class="fab fa-facebook-square fa-2x"></i>
            <i style={{color:"#d9534f", size:'10px', padding:10}} class="fab fa-twitter-square fa-2x"></i>
            <i style={{color:"#d9534f", size:'10px', padding:10}} class="fab fa-instagram fa-2x"></i>
    </div>
    </div>

            </div>
            </div>
        );
    }
}

export default EnterSite;