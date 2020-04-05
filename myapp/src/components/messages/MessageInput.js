import React, { Component } from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';

export default class MessageInput extends Component {

	  state = {
	  	message:"",
	  	isTyping:false
	  }

	

	handleSubmit = (e)=>{
		e.preventDefault()
		this.sendMessage(this.state.message)
	}

	sendMessage = (m)=>{
		this.props.sendMessage(m)
		console.log(m)
		this.setState({message:""})

	}

	render() {
		const { message } = this.state
		return (


			<Form onSubmit={this.handleSubmit}>
								<Form.Group controlId="formGridAddress1">
							
								<Form.Control style={{fontSize:"15px"}}
									
									ref={"messageinput"}
									as="input"
									placeholder = "Enter Message..."
									autoComplete = {'off'}
									value={message}
									onChange={
										({target})=>{
											this.setState({message:target.value})
										}}
									id="message"/>
								
								
							</Form.Group>
							<FormGroup>
							<Button style={{fontSize:"15px"}} 
									disabled = { message.length < 1 }
									variant="primary" 
									type="submit">
									Submit
								</Button>

							</FormGroup>
							
								
								</Form>


			// <div className="row">
			// 	<form
			// 		onSubmit={ this.handleSubmit }
			// 	>
            //        <div className="col-lg-6 col-sm-6 col-xs-6 col-md-6">
			// 		<input
			// 			id = "message"
			// 			ref = {"messageinput"}
			// 			type = "text"
			// 			className = "form-control"
			// 			value = { message }
			// 			onChange = 
			// 			}
			// 			/>
			// 			</div>
			// 			<div className="col-lg-6 col-sm-6 col-xs-6 col-md-6">
			// 		<button
			// 			disabled = { message.length < 1 }
			// 			type = "submit"
			// 			className = "btn btn-primary">
			// 				 Send
			// 		 </button>
			// 		 </div>
			// 	</form>

			// </div>
		);
	}
}
