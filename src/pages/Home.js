import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
<body>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
<link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet" />


        <Row>
          <Col xl="2" style={{backgroundColor:'black', flex:1, flexDirection:'column', alignItems:'center', 'justifyContent':'center'}}>
          
<div style={{marginTop:'40%',paddingLeft:'30px'}}>
<h1 style={{textAlign: 'left', fontSize:'50px', color:'white', fontFamily:'Permanent Marker'}}>Kenny<br />Breland</h1>


<div class="links" style={{textAlign: 'left', marginTop:'50px', fontFamily:'Helvetica'}}>
<a href="" style={{color:'white'}}>WORK</a><br/>
<a href="" style={{color:'white'}}>TRAVEL</a><br/>
<a href="" style={{color:'white'}}>PORTRAITS</a><br/>
<br />
<a href="" style={{color:'white'}}>CONTACT</a><br/>
<a href="" style={{color:'white'}}>BIO</a><br/>


</div>
<div style={{marginTop:'300px', textAlign:'center'}}>
            <i style={{color:"white", size:'10px', paddingRight:30}} class="fab fa-facebook fa-2x"></i>
            <i style={{color:"white", size:'10px', paddingRight:30}} class="fab fa-twitter fa-2x"></i>
            <i style={{color:"white", size:'10px', paddingRight:30}} class="fab fa-instagram fa-2x"></i>
    </div>


</div>
          </Col>
          <Col xl="10" style={{backgroundColor:'white', height:'100vh'}}>

          </Col>
        </Row>
</body>
        );
    }
}

export default Home;