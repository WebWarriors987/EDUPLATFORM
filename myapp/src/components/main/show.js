import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getrecords}  from '../actions/recordactions';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import Show0 from './show_temp/Show0';
import Show1 from './show_temp/Show1';
import cv1 from "../../images/cv1.png"
import cv2 from "../../images/cv2.png"


class Show extends Component {

    state={

    }

componentDidMount(){
    this.props.dispatch(getrecords(this.props.user.userData.id)).then(response=>{
        //console.log(response.payload)
        this.setState({
          ...response.payload,
           pic:response.payload.images
      })
    })
}
    loadTemplate=(val)=>{
        this.setState({temp:val})
    }
    render() {
       // console.log(this.state.pic)

        const sub=(
                this.state.temp?
                this.state.temp===1?
                <Show0/>:
                <Show1/>:
                <Container>
                    <Jumbotron>
                        <h1>
                            Choose your template:
                        </h1>
                        <Container>
                            <Row  md={1} lg={2}>
                                
                                <Col md={12} lg={6}><Card style={{cursor:"pointer",margin:"50px 0"}} onClick={()=>this.loadTemplate(1)}><Card.Img variant="top" src={cv1} fluid/></Card></Col>
                                <Col md={12} lg={6}><Card style={{cursor:"pointer",margin:"50px 0"}} onClick={()=>this.loadTemplate(2)}><Card.Img variant="top" src={cv2} responsive /></Card></Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                
            {/* <button onClick={()=> window.print()}>GENERATE PDF</button>
            */}
            </Container>
        );

        return (

            <div className="show_cv">
                {sub}
            </div>
            
            
        );
    }
}

const mapStateToProps=(state)=>{
    
    return{
      record:state.record
    }
      
}

export default connect(mapStateToProps)(Show);