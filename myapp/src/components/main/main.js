import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import flow from "../../images/flow.png"; 
import aut1 from "../../images/aut1.png";
import aut2 from "../../images/aut2.png";
import { Container, Row, Col, Jumbotron, Button, Image } from 'react-bootstrap';
class Main extends Component {

    state={
        news:'',
    }
    
    render() {
        var height="560px";
        return (
          <div>
              <Container style={{marginTop:"20px"}}>
            <Row >
    
              <Col className="p-0"  style={{textAlign:"center"}}>
                <h1 className="home_head">We Bring The School Experience to Home</h1>
                <span className="home_sub">Never Stop learning, even at home</span>

                <Row style={{marginTop:"50px"}}>
                  <Col  xs={12} xsOffset={6}>
                  {this.props.user.userData?
                  
                  !this.props.user.userData.isAuth?
                 
                   <Link  id="contact-submit" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/login">SignUp/SignIn</Link>
                  
                  
                  :
                  null
                 :null
  }
                  </Col>
                  
                </Row>

              </Col>
              
              
            </Row>

          
            <Row xs={1} md={1} lg={3} style={{marginTop:"100px"}}>

              
                <Col  className="p-3 "  style={{textAlign:"center"}}>

                  <Row>
                    <Col  xsOffset={6}>
                        <i className="fas fa-file-alt home_works_img"/>
                    </Col>

                  </Row>
                  <p className="home_works">Storing Your Achievements</p>
                  <span className="home_works_sub">We give you a platform to store Records of your Achivements and Goals</span>

                  
              </Col>
              <Col className="p-3"  style={{textAlign:"center"}}>
              <Row >
                    <Col  xsOffset={6}>
                        <i className="fas fa-file-pdf home_works_img"/>
                    </Col>

                  </Row>
                  <p className="home_works">CV Maker</p>
                  <span className="home_works_sub">PDF CV/RESUME available from our website</span>

                  
              </Col>
              <Col className="p-3"  style={{textAlign:"center"}}>
              <Row>
                    <Col  xsOffset={6}>
                        <i className="fas fa-video home_works_img"/>
                    </Col>

                  </Row>
                  <p className="home_works">Live Classrooms</p>
                  <span className="home_works_sub">Join Chat-Rooms and Have an Online Video-Tutorial Experience</span>

                  
              </Col>
            </Row>
          
            <Row xs={1} style={{marginTop:"100px",textAlign:"center"}}>
                <p className="home_topic">How our WebSite Works:</p>
            </Row>
            <Row xs={1} style={{marginTop:"50px"}}>
            
              
                <img className="img_flow" src={flow} />
              
            </Row>
            
          </Container>

            <Container style={{margin:"100px 0"}} className="names" fluid>
              
            <Row xs={1} style={{textAlign:"center"}}>
              <p className="home_top">Our Team</p>
            </Row>
            <Row xs={2} style={{backgroundColor:"#808080", marginTop:"30px",textAlign:"center"}}>
              <Col xs={6}>
                
                  
                  <h2 className="team_style">Saumyajeet Mukherjee</h2>
                  
                  
                  <img src={aut1} className="author"/>
                  

                
                
              
              </Col>
              <Col xs={6} >
              
                  
                  
                  <img src={aut2} className="author"/>
                  
                  
                  <h2 className="team_style">Sayanta Bhattacharjee</h2>
                  

                
                
                

              </Col>
            </Row>
          
            <Row style={{marginTop:"50px"}}>
              <Col xs={4}>
                  
              </Col>
              <Col xs={4}>

              </Col>
              <Col xs={4}>
              
              </Col>
            </Row>
          </Container>
      </div>
          


        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      news:state.news,
      user:state.member
    }
      
  }
  
  export default connect(mapStateToProps)(Main);