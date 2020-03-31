import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getrecords}  from '../../actions/recordactions';
// import FieldRow from "../utils/formrow"
import Pic from '../../utils/pic';
import {Container, Row, Col} from "react-bootstrap";
import ButtonB from "../../UI/Button";

class Show1 extends Component {

    state={


    }
componentDidMount(){
    this.props.dispatch(getrecords()).then(response=>{
        console.log(response.payload)
        this.setState({
          ...response.payload,
           pic:response.payload.images
      })
    })

}

    render() {
        console.log(this.state.pic)
        return (
			<div>
            <div id="cv" >
	<div className="mainDetails_cv">
		<div id="headshot" >
		{this.state.pic? <Pic image={this.state.pic.length>0?this.state.pic[0].url:null} text={"PHOTO"}/>:null}
		</div>
		
		<div id="name">
			<h1 >{this.state.name}</h1>
			<h2 >{this.state.workplace}</h2>
		</div>
		
		<div id="contactDetails" >
			<ul>
				<li>email: <a href={`mailto:${this.state.email}`} target="_blank">{this.state.email}</a></li>
				
				<li>mobile: {this.state.phone}</li>
			</ul>
		</div>
		<div className="clear"></div>
	</div>
	
	<div id="mainArea" >
		<section>
			<article>
				<div className="sectionTitle">
					<h1>Personal Profile</h1>
				</div>
				
				<div className="sectionContent">
					<p>{this.state.additional}</p>
				</div>
			</article>
			<div className="clear"></div>
		</section>
		
		
		
		<section>
			<div className="sectionTitle">
				<h1>Achievements</h1>
			</div>
			{
			this.state.awards?
			this.state.awards.map(el=>{
				return(
					<div className="sectionContent">
				<article>
					<h2>{el}</h2>
					
				</article>
				
				
			</div>
				);
			}):null
		}
			
			<div className="clear"></div>
		</section>
		
		
		<section>
			<div className="sectionTitle">
				<h1>Key Skills</h1>
			</div>
			
			<div className="sectionContent">
				<ul className="keySkills">
					{
					this.state.skills?
					this.state.skills.map(el=>{
						return(
							<li>{el.skill}</li>

						);
					}):null}
					
				</ul>
			</div>
			<div className="clear"></div>
		</section>
		
		
		<section>
			<div className="sectionTitle">
				<h1>Education</h1>
			</div>
			
			<div className="sectionContent">
				{
				
				this.state.academicrecords?
				this.state.academicrecords.map(el=>{
					return(
					<article>
					<h2>{el.name}</h2>
					<p> {el.subject}</p>

					</article>
					);
				}):null}
				
				
			</div>
			<div className="clear"></div>
		</section>
		
	</div>


    

	</div>
		<div className="reg_row">
		<ButtonB 
		id="contact-submit"
		className="bhut" onClick={()=> window.print()} text="GENERATE PDF"/>
        
		</div> 
		</div>
        
 
       
        );
    }
}

const mapStateToProps=(state)=>{
    
    return{
      record:state.record
    }
      
}

export default connect(mapStateToProps)(Show1);












