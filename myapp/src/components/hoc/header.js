import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {log} from "../actions/memberactions"
import logo from '../../images/logo.png'
import { NavDropdown } from 'react-bootstrap';

class Header extends Component {
  

  
   logoutuser=()=>{
       this.props.dispatch(log()).then(res=>{
           console.log('logout')
           
        }).catch(err=>
        console.log(err)
        )
   }
   
    render() {
      console.log(this.props.user.userData)
        return (

             <div className='header'>
               {/* <div className="containerl">
               <img className="limg" src={logo} alt="eduplat" />
             <div className="heading1">EduStream</div>
             <div className="heading2">Online Student Kit</div>
             </div>
               */}




             <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">

                
                 
              <ul className="navbar-nav">
              <li className="nav-item">
                  <Link className ="nav-link"  style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/">HOME</Link>
                  </li>
 
                   {
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                 
                    <li className="nav-item">
                    <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/details" >ADD ACADEMIC DETAILS</Link>
                    </li>
                    :null
                    :null
                   }
                   {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}

                   
                   {
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    <li className="nav-item">
                    <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/show" >VIEW YOUR CV</Link>
                    </li>
                    :null
                    :null
                   }
                   {
                  this.props.user.userData?
                  this.props.user.userData.isAuth?
                
                    <li className="nav-item dropdown">
                      <a style={{fontFamily:"Times new roman",fontSize:"15px"}} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add User Data
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" >{
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    
                    <Link className ="nav-link-drop"  to="/skill" >ADD SKILLS</Link>
                    
                    :null
                    :null
                   }</a>
                        <a className="dropdown-item" >{
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    
                    <Link className ="nav-link-drop"  to="/addaward" >ADD AWARD</Link>
                    
                    :null
                    :null
                   }</a>
                        <a className="dropdown-item" >{
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    
                    <Link className ="nav-link-drop"  to="/addacademic" >ADD ACADEMIC RECORDS</Link>
  
                    :null
                    :null
                   }</a>
                      </div>
                    </li>:null:null

    }
                  
             

                  {
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    <li className="nav-item">
                    <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/see my info" >SEE MY INFO</Link>
                    </li>
                    :null
                    :null
                   }
                  
                  {
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    <li className="nav-item">
                    <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/livechat" >Live Stream</Link>
                    </li>
                    :null
                    :null
                   }
                  
                  
                  
                  
                
                  {
                    !this.props.user.userData?
                  <li className="nav-item">
                  <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/login" >LOGIN</Link>
                  </li>:null
                  }
                  {this.props.user.userData?
                  
                  !this.props.user.userData.isAuth?
              <li className="nav-item">
                  <Link className ="nav-link " style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/register">REGISTER</Link>    
                  </li>:null:null}
                  {this.props.user.userData?
                  
                    !this.props.user.userData.isAuth?
                    <li className="nav-item">
                    <Link className ="nav-link"  style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/login">LOGIN</Link>
                    </li>
                    :
                    <li className="nav-item">
                    <Link className ="nav-link " style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/logout" onClick={(event)=>this.logoutuser()}>LOGOUT</Link>
                    </li>:null
    }
              </ul>
             </div>  
            </nav>
            <br></br>
            </div>
                        
        );
    }
}

const mapStateToProps=(state)=>{
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Header);