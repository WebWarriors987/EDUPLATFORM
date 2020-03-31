import React, { Component } from 'react';
import LoginForm from './LoginForm'
import {connect} from 'react-redux'

 class Layout extends Component {

	  state = {
	  	
		  change:false,
		  room:null
         	  }

	render() {
		return (
			
			<div className="container">
				{/* {
					// !user ?
					this.state.change?
					 <ChatContainer socket={socket} user={this.props.user.userData.id} room={this.state.roomname} logout={this.logout} changeRoute={this.changeRoute}/>
					
					: */}
					<LoginForm/>
					{/* // :
					
				} */}
			</div>
		    );
	       } 
        }


     const mapStateToProps=(state)=>{
    
       return{
           user:state.member,
             }    
                                 }

export default connect(mapStateToProps)(Layout);