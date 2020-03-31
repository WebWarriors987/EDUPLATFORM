import React from 'react';

//import classes from './NavItems.css';
import NavItem from './NavItem';

const NavItems = (props) => {
    return (
        <ul className={"NavItems_header"}>
            <NavItem link="/" exact>Home</NavItem>
            <NavItem link="/details" exact>Achievements</NavItem>
            {/* {props.auth?<NavItem link="/livechat">Live-Room</NavItem>:null} */}

            {
                props.auth?
                    !props.auth.isAuth?
                    (<NavItem link="/auth">Login</NavItem>)
                    :<NavItem link="/logout" onClick={props.logout}>Logout</NavItem>
                    :null
                
                }
        </ul>
    );
};

export default NavItems;

// onClick={(event)=>this.logoutuser()

//<nav className="navbar navbar-expand-md bg-dark navbar-dark">
//               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="collapsibleNavbar">
//                 <ul className="navbar-nav">
//                   <li className="nav-item">
//                   <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/">HOME</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/facad">FACULTY</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/member">MEMBER</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/subject">SYLLABUS</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/register">REGISTER</Link>    
//                   </li>
//                   {this.props.user.userData?
                  
//                     !this.props.user.userData.isAuth?
//                     <li className="nav-item">
//                     <Link className ="nav-link"  style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/login">LOGIN</Link>
//                     </li>
//                     :
//                     <li className="nav-item">
//                     <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/logout" onClick={(event)=>this.logoutuser()}>LOGOUT</Link>
//                     </li>:null
//     } 
//                    {
//                      this.props.user.userData?
//                      this.props.user.userData.isAuth?
//                     this.props.user.userData.role===1?
//                     <li className="nav-item">
//                     <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/details" >ADD ACADEMIC DETAILS</Link>
//                     </li>
//                     :
//                     <li className="nav-item">
//                     <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/allalum" >VIEW ALL ALUMNI</Link>
//                     </li>
//                     :null
//                     :null
//                    }

                   
// {
//                      this.props.user.userData?
//                      this.props.user.userData.isAuth?
//                     this.props.user.userData.role===1?
                   
//                     <li className="nav-item">
//                     <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/allalum" >VIEW ALL ALUMNI</Link>
//                     </li>
//                     :null
//                     :null
//                     :null
//                    }

                   
//              {
//                      this.props.user.userData?
//                      this.props.user.userData.isAuth?
//                     this.props.user.userData.role===1?
                   
//                     <li className="nav-item">
//                     <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/addnews" >ADD NEWS</Link>
//                     </li>
//                     :null
//                     :null
//                     :null
//                    }
                  
    
                  
                
//                   {
//                     !this.props.user.userData?
//                   <li className="nav-item">
//                   <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/login" >LOGIN</Link>
//                   </li>:null
//                   }
                  
            
//               </ul>
//              </div>  
//             </nav>