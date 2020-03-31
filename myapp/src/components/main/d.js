import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import four from '../../images/4.png' 
import five from '../../images/3.jpg'
import six from '../../images/1.jpg'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {   
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));
const Main = () => {

  const classes = useStyles();
 const newslist=()=>(
   this.state.news?
   <div>
     <ListItem alignItems="flex-start">
     
     <ListItemText
       primary="Brunch this weekend?"
       secondary={
         <React.Fragment>
           <Typography
             component="span"
             variant="body2"
             className={classes.inline}
             color="textPrimary"
           >
             Ali Connors
           </Typography>
           {" — I'll be in your neighborhood doing errands this…"}
         </React.Fragment>
       }
     />
   </ListItem>
   <Divider variant="inset" component="li" />
   </div>
   :null
  )
    return (
        <div className="container">
         
    <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{objectFit:"cover"}}>
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
  
        <div className="item active" style={{objectFit:"cover"}}>
          <img src={four} alt="chess" />
          <div className="carousel-caption">
          </div>
        </div>
  
        <div className="item">
          <img src={five} alt="chess"/>
          <div className="carousel-caption">
          </div>
        </div>
      
        <div className="item" style={{objectFit:"cover"}}>
          <img src={six} alt="chess"/>
          <div className="carousel-caption">
          </div>
        </div>
    
      </div>
  
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    
  </div>
        
        
          <div className="row" id="about">
           
           <div className="col-lg-12 col-sm-12 col-md-12 description" >
               
           <h1 style={{color:"black"}}>ABOUT CHESS</h1>
               <div className="circle">

               </div>
               <p style={{fontFamily: "'Lobster Two', cursive"}}>The Chemical Engineering Student's Society (CHESS) is an independent student run society of Chemical Engineering Department of NIT Durgapur.It is solely dedicated to form a network
                 among all the students,faculty members and alumni of the department. It promotes interaction  within the department and implements acadmeic, social and other programs of interest to its members.
               
               </p>
           
           
           </div>
           </div>
          <div className="row">
           <div id="box">
            <div id="smallbox">
                <i className="fas fa-user-graduate" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
                    <h3 id="faculty"><Link to="/facad">FACULTY</Link></h3></i>
            </div>
            <div id="smallbox">
                <i className="fas fa-graduation-cap" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
                    <h3 id="faculty"><Link to="/subject">SYLLABUS</Link></h3></i>
           </div>
           
           <div id="smallbox">
            <i className="fa fa-book" id="cap1"style={{fontSize:"40px",color:"#E39821"}}>
            <h3 id="faculty"><Link to="/register">REGISTER</Link></h3></i>
           </div>
           <div id="smallbox">
            <i className="fa fa-lock" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
            <h3 id="faculty"><Link to="/login">LOGIN</Link></h3></i>
           </div>
             
        </div>
         </div>
         <div className="row" id="about">
           
           <div className="col-lg-12 col-sm-12 col-md-12 description" >
               
           <h1 style={{color:"black"}}>MESSAGE FROM HOD:Prof Gopinath Halder</h1>
               <div className="circler">

               </div>
           
               <p style={{fontFamily: "'Lobster Two', cursive"}}>Chemical Engineering Students'society is working with a motivation of developing professional
and personal skills of students,which facilitate them to perform magnificently as an eminent
engineer in the society. This society is aimed to provide a platform to showcase and sharpen
student's talents through a variety of events and activities planned throughout four years,
for overall development of students personalities. We continue our effort to prepare and
guide the students for the various competitive exams and interviews so that they perform
better and make their carrier in the selected fields. Real world problems will be blended in
the curriculum and these are to be taught by experts from industry, in addition through guest
lectures. Our focus is to effectively train our students as chemical engineers who can serve the
society competently, collaboratively and ethically as planners, designers and operators of the
environment.
               </p>
           
           
           </div>
        
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
           <List className={classes.root}>
            { newslist()}
    </List>
    </div>
        </div>
           
    );
};


const mapStateToProps=(state)=>{
    
       
  return{
    user:state.member,
  }
    
}

export default connect(mapStateToProps)(Main);