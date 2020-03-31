import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {writeuser} from './actions/recordactions'
import { Row, Container, Jumbotron, Card, Button, Form } from 'react-bootstrap';

class LoginForm extends Component {
	  
	state = {
	  	roomname:"",
		  error:"",
		  roomList:[]
	  }


	handleSubmit = (e)=>{
		e.preventDefault()
		const roomname = this.state.roomname
		const user=this.props.user.userData.name
		this.props.dispatch(writeuser(user,roomname)).then((res)=>{
           console.log(res)
		}).catch(e=>console.log(e))
	
		console.log(this.state.roomname)
		// socket.on('rooms',rooms=>{
		// 	console.log("ds")
	       		
		// 	this.setState({
		// 		roomList:rooms,
        //        creator:true
		// 	})
         
		// })
        const userid=this.props.user.userData.id
		setTimeout(()=>{
            this.props.history.push(`/chat?room=${this.state.roomname}&name=${userid}`)
            console.log('dffdfd')
            },5000)

	// }
}

	handleChange = (e)=>{
		this.setState({roomname:e.target.value})
	}


	render() {
		const { roomname, error } = this.state
		return (


			
		
				<Container>
					<Row xs={1}>
					<Jumbotron style={{width:"60%"}} xs={12}>
						<h1>Enter Room name:</h1>
						<p>
						<Card style={{width:"80%"}} xs={12}>
							<Card.Body>
								<Form onSubmit={this.handleSubmit}>
								<Form.Group controlId="formGridAddress1">
								<Form.Label>Room Name</Form.Label>
								<Form.Control 
									ref={(input)=>{ this.textInput = input }}
									as="input"
									value={roomname}
									onChange={this.handleChange}
									id="nickname"/>
								
							</Form.Group>
								<Button  variant="primary" type="submit">
									Submit
								</Button>
								</Form>
							
							</Card.Body>
						</Card>
							
							</p>
					</Jumbotron>

					</Row>
					
				{/* <form onSubmit={this.handleSubmit} className="login-form" >

					<label htmlFor="nickname">
						{
							this.props.user.userData.isAdmin?
							<h2>Create the room and give the name only to your students </h2>
							:
						<h2>Enter the room name given by your instructor</h2>
	                    }
					</label>
					<input
						ref={(input)=>{ this.textInput = input }}
						type="text"
						id="nickname"
						className="form-control"
						value={roomname}
						onChange={this.handleChange}
					
						/>

					<button
	                   disabled={!this.state.roomname>1}
						type = "submit"
						className = "btn btn-primary">
							 Send
					 </button>

				</form> */}
				</Container>
		
		);
	}
}
const mapStateToProps=(state)=>{
    
	return{
		user:state.member,
		  }    
							  }


export default withRouter(connect(mapStateToProps)(LoginForm));
