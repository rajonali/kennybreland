import React, {Component} from 'react';


import { Container, Row, Col } from 'reactstrap';

import Gallery from 'react-photo-gallery';
import {StickyContainer} from 'react-sticky';


import Sticky from 'react-stickynode';


const photos = [
    {
      src: 'http://www.ovosound.com/sites/g/files/g2000005016/f/201903/o_4.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'http://www.ovosound.com/sites/g/files/g2000005016/f/201811/dvsn%20episode%202_0.png',
      width: 1.5,
      height: 1
    },
    {
      src: 'http://www.ovosound.com/sites/g/files/g2000005016/f/styles/artist_image/public/201807/mj380.jpg?itok=R-ZpIHpe',
      width: 0.5,
      height: 0.5
    },
    {
      src: 'https://sslf.ulximg.com/image/750x750/cover/1552749211_020e74357bbc6fa9982918ff3dfbfd0e.jpg/08ff29bbe0631c6c66abb7e4954aa59c/1552749211_79d368eac91734e552af0567409fb84b.jpg',
      width: 0.5,
      height: 0.5
    }
  ];
  
  const photos2 = [
    {
      src: 'https://static1.squarespace.com/static/57e2c2ef37c58171a3332f85/57e2e7f1893fc00a5a779d28/5a948e24e4966bcb342e391f/1519685164269/TNO18_p162_LILYACHTY_HiRes.jpg?format=1500w',
      width: 75,
      height: 50
    },
    {
      src: 'https://static1.squarespace.com/static/57e2c2ef37c58171a3332f85/57e2e7f1893fc00a5a779d28/5a948e2a53450a12649dc927/1519685170320/TNO18_p162_LILYACHTY_HiRes2.jpg?format=1500w',
      width: 75,
      height: 50
    },
    {
      src: 'https://static1.squarespace.com/static/57e2c2ef37c58171a3332f85/57e2e7f1893fc00a5a779d28/5a948e2bc8302578b0c87f11/1519685170794/TNO18_p162_LILYACHTY_HiRes3.jpg?format=1000w',
      width: 75,
      height: 50
    }
  ];
  
  const photos3 = [
    {
      src: 'https://static1.squarespace.com/static/57e2c2ef37c58171a3332f85/57e2e7f1893fc00a5a779d28/58c9a227725e259662db69fe/1489609276823/Screen+Shot+2017-03-15+at+12.33.55+PM.png?format=500w',
      width: 50,
      height: 75
    },
    {
      src: 'https://static1.squarespace.com/static/57e2c2ef37c58171a3332f85/57e2e7f1893fc00a5a779d28/58c9a226e58c627a1890fc27/1489609262532/FLAUNT_VINCE+STAPLES_2638.jpg?format=500w',
      width: 50,
      height: 75
    },
    {
      src: 'https://static1.squarespace.com/static/57e2c2ef37c58171a3332f85/57e2e7f1893fc00a5a779d28/58c9a22503596e68d45427b5/1489609263251/FLAUNT_VINCE+STAPLES_1056.jpg?format=500w',
      width: 50,
      height: 75
    }
  ];
  
  
  
  
  
  

class Sidebar extends Component {

    render() {
        return (
            <Col xl="2" style={{backgroundColor:'black', flex:1, flexDirection:'column', alignItems:'center', 'justifyContent':'center'}}>
            <Sticky>
    
    <div style={{flex:1, display:'flex', flexDirection:'column', height:'100%', paddingLeft:"20px",}}>
    <div style={{borderWidth:5,borderColor:'white', paddingTop:'10%'}}>
    <h1 style={{ textAlign: 'left', fontSize:'65px', color:'white', fontFamily:'Bebas Neue'}}>Kenny Breland</h1>
    </div>
    
    <div class="links" style={{textAlign: 'left', marginTop:'50px', fontFamily:'Helvetica'}}>
    <a href="" style={{color:'white'}}>WORK</a><br/>
    <a href="" style={{color:'white'}}>TRAVEL</a><br/>
    <a href="" style={{color:'white'}}>PORTRAITS</a><br/>
    <br />
    <a href="" style={{color:'white'}}>CONTACT</a><br/>
    <a href="" style={{color:'white'}}>BIO</a><br/>
    
    
    </div>
    <div style={{marginTop:'280px',textAlign:'center'}}>
              <i style={{color:"white", size:'10px', paddingRight:30}} class="fab fa-facebook fa-2x"></i>
              <i style={{color:"white", size:'10px', paddingRight:30}} class="fab fa-twitter fa-2x"></i>
              <i style={{color:"white", size:'10px', paddingRight:30}} class="fab fa-instagram fa-2x"></i>
      </div>
    
    
    </div>
    </Sticky>

            </Col>
    
        
    
        );
    }
}

export default Sidebar;
