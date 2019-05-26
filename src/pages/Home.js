import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Home extends Component {
    render() {
        return (
<body>
        <Row>
          <Col xl="3" style={{backgroundColor:'red', flex:1, flexDirection:'column', alignItems:'center', 'justifyContent':'center'}}>
<div style={{marginLeft:'50px',marginRight:'50px', marginTop:'100px', backgroundColor:'pink'}}>
<h1 style={{textAlign: 'left'}}>Kenny<br />Breland</h1>

<div class="links" style={{marginTop:'50px', backgroundColor:'yellow'}}>
<a href=""><h4>About</h4></a><br />
<a href=""><h4>Contact</h4></a><br />
<a href=""><h4>Work</h4></a><br />
</div>
</div>
          </Col>
          <Col xl="9" style={{backgroundColor:'blue', height:'100vh'}}>

          </Col>
        </Row>
</body>
        );
    }
}

export default Home;