import React, { Component } from 'react';
import Background from '../images/entersite.jpg';

import Button from 'react-bootstrap/Button';

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
    <div style={{flex:1,backgroundColor:'black', textAlign:'center', height: this.state.height}} class="box">
    <div style={ sectionStyle }>

            
            <div style={{color:'white', paddingTop:'15%', fontFamily:'Montserrat', fontSize:'20px',  textShadow: '-1px 1px 10px rgba(255, 255, 255, 1)'}}><strong>photographer</strong></div>
            <br />

<h1><pre style={{color:'white', fontFamily:'garamond', textShadow: '-1px 1px 10px rgba(255, 255, 255, 1)'}}>K E N N Y   B R E L A N D</pre></h1>
            <br />
            <Button variant="outline-dark shadow-lg p-3 mb-5 bg-black" style={{ border: 0, borderRadius:0, fontFamily:'Montserrat',textShadow: '-1px 1px 10px rgba(0, 0, 0, 1)', color:'rgba(255, 255, 255, 0.75)'}}><strong style={{margin:'1px'}}>E N T E R&nbsp;&nbsp;&nbsp;S I T E</strong></Button>
            <div style={{paddingTop:'15%'}}>
            <i style={{color:"white", size:'10px', padding:10}} class="fab fa-facebook-square fa-2x"></i>
            <i style={{color:"white", size:'10px', padding:10}} class="fab fa-twitter-square fa-2x"></i>
            <i style={{color:"white", size:'10px', padding:10}} class="fab fa-instagram fa-2x"></i>
    </div>
    </div>

            </div>
            </div>
        );
    }
}

export default EnterSite;