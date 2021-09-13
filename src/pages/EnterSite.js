import React, {Component} from 'react';
import Background from '../images/entersite.jpg';
import ReactSVG from 'react-svg';

import Button from 'react-bootstrap/Button';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Image from '../images/aperture.svg';


import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';


import './EnterSite.css';



import BackgroundSlider from 'react-background-slider'



var sectionStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'stretch',
    overflow: 'hidden',
    flex:1,
    display:'flex',
    height: '100%',
    width: '100%'
};


class EnterSite extends Component {



    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    componentDidMount() {}

    componentWillUnmount() {}

    updateWindowDimensions() {}


    render() {
        return (
            <div>

                <div
                    style={{
                    flex: 1,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    textAlign: 'center',
                    height: this.state.height
                }}
                    class="box">
                                


                        <div>
                        

                            <div
                                style={{
                                color: 'white',
                                paddingTop: '15%',
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                textShadow: '-1px 1px 10px rgba(255, 255, 255, 1)'
                            }}>
                                <strong></strong>
                            </div>
                            <h1
                                style={{
                                fontFamily: 'Bebas Neue',
                                color: '#d9534f',
                                fontSize: 30,
                                marginTop: 10
                            }}>p h o t o g r a p h e r</h1>

                            <pre><h1 style={{color:'white', fontFamily:'Permanent Marker', fontSize:'50px'}}>      K E N N Y • B R E L A N D</h1></pre>
            <center style={{paddingTop:'10px'}}>
            <h5 style={{width:'200px', padding:'10px', borderStyle: 'solid', borderWidth:"1px", borderColor:'#FFF', fontFamily:'Montserrat', textShadow: '-1px 1px 10px rgba(0, 0, 0, 1)', }}><strong style={{margin:'1px'}}><Link style={{textDecoration: 'none', color:'#FFF'}} to="/home"><strong>E N T E R</strong></Link></strong></h5>
            </center>
            <div style={{paddingTop:'40%'}}>
            <i style={{color:"#d9534f", size:'10px', padding:10}} class="fab fa-facebook-square fa-2x"></i>
            <i style={{color:"#d9534f", size:'10px', padding:10}} class="fab fa-twitter-square fa-2x"></i>
            <i style={{color:"#d9534f", size:'10px', padding:10}} class="fab fa-instagram fa-2x"></i>
    </div>
    </div>






    <BackgroundSlider
  images={[image3, image2, image1]}
  duration={5} transition={2} />
            </div>
            </div>
        );
    }
}

export default EnterSite;