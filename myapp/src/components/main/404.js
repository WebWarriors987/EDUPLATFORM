import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import snap from "../../images/snap.png";

const Error =()=>{
    return(
        <Container className="notfound" style={{backgroundColor:"#ececec"}}  fluid>
            <Row xs={1}>
                <Col xs={2}>
                </Col>
                <Col xs={8}>
                    <img className="not_img" src={snap} alt="snap"/>
                </Col>
                <Col xs={2}>
                </Col>
           
            </Row>
            

        </Container>
    )
}

export default Error;