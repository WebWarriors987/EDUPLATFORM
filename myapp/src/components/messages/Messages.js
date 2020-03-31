import React, { Component } from 'react';

export default class Messages extends Component {

	scrollDown=()=>{
		const { container } = this.refs
		container.scrollTop = container.scrollHeight
	}

	componentDidMount() {
		this.scrollDown()
	}
	componentDidUpdate(prevProps, prevState) {
		this.scrollDown()
	}

	render() {
		const { messages, user, typingUsers } = this.props
		return (
           <div className="row" >
			<div ref='container'
				className="thread-container" style={{height:"200px"}} >
				<div className="thread">
					{
						messages.map((mes,i)=>{
							return (
								<div
									key={i}
									className={`message-container ${mes.name === user.name && 'right'}`}
								>
									<div className="time">{mes.time}</div>
									<div className="data">
										<div className="message">{mes.message}</div>
										<div className="name">{mes.name}</div>
									</div>
								</div>

								)
						})
					}
				
				</div>

				</div>
			</div>
		);
	}
}
