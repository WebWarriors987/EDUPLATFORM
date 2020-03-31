import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getrecords}  from '../../actions/recordactions';
// import FieldRow from "../utils/formrow"
import Pic from '../../utils/pic';
import {Container, Row, Col} from "react-bootstrap";
import ButtonB from '../../UI/Button';


class Show0 extends Component {

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
            <div className="wrapper">
            <div className="sidebar-wrapper">
                <div className="profile-container">
                    {this.state.pic? <Pic image={this.state.pic.length>0?this.state.pic[0].url:null} text={"PHOTO"}/>:null}
                   
                    <h1 className="name">{this.state.name}</h1>
                </div>
                
                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fas fa-envelope"></i><a href={`mailto: ${this.state.email}`}>{this.state.email}</a></li>
                        <li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789">{this.state.phone}</a></li>
                        {/* <li className="website"><i className="fas fa-globe"></i><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">portfoliosite.com</a></li> */}
                        {/* <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>
                        <li className="github"><i className="fab fa-github"></i><a href="#" target="_blank">github.com/username</a></li>
                        <li className="twitter"><i className="fab fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li> */}
                    </ul>
                </div>
                <div className="education-container container-block">
                    <h2 className="container-block-title">Current Degree</h2>
                    <div className="item">
                        <h4 className="degree">{this.state.currentdegree}</h4>
                    </div>
                    
                </div>

                <div className="address-list container-block">
                    <h2 className="container-block-title">ADDRESS</h2>
                    <div className="item">
                        <h4 className="degree">{this.state.address}</h4>
                    </div>
                    
                </div>
                
                {/* <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">
                        <li>English <span className="lang-desc">(Native)</span></li>
                        <li>French <span className="lang-desc">(Professional)</span></li>
                        <li>Spanish <span className="lang-desc">(Professional)</span></li>
                    </ul>
                </div>
                
                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        <li>Climbing</li>
                        <li>Snowboarding</li>
                        <li>Cooking</li>
                    </ul>
                </div> */}
                
            </div>
            
            <div className="main-wrapper">
                
                <section className="section summary-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
                    <div className="summary">
            <p>{this.state.additional}</p>
                    </div>
                </section>
                
                <section className="section experiences-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Achievements</h2>
                    {this.state.awards?
                    this.state.awards.map(el=>{
                        return(
                        <div className="item">
                        <div className="meta">
                            <div className="upper-row">
                                <h3 className="job-title">{el}</h3>
                                {/* <div className="time">2015 - Present</div> */}
                            </div>
                            {/* <div className="company">Startup Hubs, San Francisco</div> */}
                        </div>
                        {/* <div className="details">
                            <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>  
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                        </div> */}
                    </div>
                        );
                        
                    }):null
                    
                    }
                    
                    
                    
                    
                    
                </section>

                <section className="section experiences-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Academic Records</h2>
                    {this.state.academicrecords?
                    this.state.academicrecords.map(el=>(
                        
                        <div className="item">
                        <div className="meta">
                            <div className="upper-row">
                                <h3 className="job-title">{el.name}</h3>
                                {/* <div className="time">2015 - Present</div> */}
                            </div>
                            <div className="company">{el.subject}</div>
                        </div>
                        {/* <div className="details">
                            <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>  
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                        </div> */}
                    </div>
                        
                        
                    )):null
                    
                    }
                    
                    
                    
                    
                    
                </section>

                {this.state.skills?
                 this.state.skills.map((el,i)=>(
                <section key={i} className="skills-section section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                    <div className="skillset">        
                        <div className="item">
                            <h3 className="level-title">{el.skill}</h3>
                                                          
                        </div>
                        
                        
                        
                    </div>  
                </section>
                 )):null}
                
                {/* <section className="section projects-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                    <div className="intro">
                        <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                    </div>
                    <div className="item">
                        <span className="project-title"><a href="#hook">Velocity</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>
                        
                    </div>
                    <div className="item">
                        <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> - 
                        <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                    </div>
                    <div className="item">
                        <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/" target="_blank">Tempo</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services and to attract users &amp; investors</span>
                    </div>
                    <div className="item">
                        <span className="project-title"><a href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/" target="_blank">Atom</a></span> - <span className="project-tagline">A comprehensive website template solution for startups/developers to market their mobile apps. </span>
                    </div>
                    <div className="item">
                        <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank">Delta</a></span> - <span className="project-tagline">A responsive Bootstrap one page theme designed to help app developers promote their mobile apps</span>
                    </div>
                </section> */}
                
                {/* <section className="skills-section section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                    <div className="skillset">        
                        <div className="item">
                            <h3 className="level-title">Python &amp; Django</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                               
                        </div>
                        
                        <div className="item">
                            <h3 className="level-title">Javascript &amp; jQuery</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "98%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                              
                        </div>
                        
                        <div className="item">
                            <h3 className="level-title">Angular</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "98%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                                 
                        </div>
                        
                        <div className="item">
                            <h3 className="level-title">HTML5 &amp; CSS</h3>
                            <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                                
                        </div>
                        
                        <div className="item">
                            <h3 className="level-title">Ruby on Rails</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                                  
                        </div>
                        
                        <div className="item">
                            <h3 className="level-title">Sketch &amp; Photoshop</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                                 
                        </div>
                        
                    </div>  
                </section> */}
                
            </div>
        
     
           

                
          
        
            </div> 
            <div className="reg_row">
            <ButtonB id="contact-submit-reset" className="bhut" onClick={()=> window.print()} text="GENERATE PDF"/>
            </div>
            </div>
        )}
            }


const mapStateToProps=(state)=>{
    
    return{
      record:state.record,
    }
      
}

export default connect(mapStateToProps)(Show0);