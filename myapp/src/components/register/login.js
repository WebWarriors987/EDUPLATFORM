import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormFields from '../utils/formfields';
import {update,validform, generatedata} from '../utils/formtions'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {loginuser} from '../actions/memberactions'
import hexa from '../../images/logo.png'

class Login extends Component {
    state={
        loading:false,
        formSuccess:false,
        formError:false,
        formdata:{
        email: {
            element:'input',
            value:'',
            config:{
                name:'Email',
                placeholder:'Enter your Email here',
                type:'email'
            },
            validation:{
                email:true
              },
            valid:false,
            validationMessage:'',
            label:true
        },
        password: {
            element:'input',
            value:'',
            config:{
                name:'password',
                placeholder:'Enter your password here',
                type:'password'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        }
    },
    show:''
}


updateform=(element)=>{
    const newdata=update(element,this.state.formdata,'register')
    this.setState({
        formdata:newdata,
    })

}

submitform=(event)=>{
event.preventDefault();
const isformvalid=validform(this.state.formdata,'register')
const data=generatedata(this.state.formdata,'register')
if(isformvalid){
    this.props.dispatch(loginuser(data)).then((response)=>{
        if(response.payload.loginSuccess){
         console.log('hurray')
            this.setState({
                formSuccess:true,
                formError:false,
                loading:true
            })
            
        if(response.payload.member.role===1){
            
            setTimeout(()=>{
                this.props.history.push('/details');
            },3000)
        }else{
            setTimeout(()=>{
                this.props.history.push('/');
            },3000)
        }
         }
         
            else{
                console.log(this.props.user.member)
                this.setState({
                    formError:true,
                    show:this.props.user.member.message
                })
            }
        }
    )}
}


resetpassword=(event)=>{
    event.preventDefault();   
    
    setTimeout(()=>{
        this.props.history.push('/forget');
    },100)        
        }
    

    render() {
        return (
            this.state.loading?
        <center> <CircularProgress thickness={7} size={100} style={{color:'grey',marginBottom:"500px"}} />  </center>
            :
            <div className="containers">
                           
           <form id="contact" onSubmit={(event)=>{
                  this.submitform(event)
                }}>
                    {this.state.show?
                <label style={{color:'red',fontSize:"20px"}}>{this.state.show}</label>:null
                }
                    <div className="reg_row_img">
                        <img className="reg_img" src={hexa} alt="EduStream"/>

                    </div>
                    <div className="reg_row">
                        <div className="reg_col">
                        <FormFields
                            formdata={this.state.formdata.email}
                            id={'email'}
                            change={(event)=>{this.updateform(event)}}
                        />

                        </div>
                    </div>
                    <div className="reg_row">
                        <div className="reg_col">
                        <FormFields
                        formdata={this.state.formdata.password}
                        id={'password'}
                        change={(event)=>{this.updateform(event)}}
                            />

                        </div>
                    </div>
                <div className="reg_row_img">
                    <fieldset>
                    
                        {/* <button className="contact-submit" style={{padding:"10px"}}onClick={(event)=> this.submitform(event)}>
                     Login
                </button> */}
             <button id="contact-submit"  style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
            LOGIN
                </button>
                
                 {/* <button id="forgot"  style={{padding:"10px"}} onClick={(event)=> this.resetpassword(event)}>
               
                </button> */}
                    </fieldset>

                <fieldset>

                <button 
                    
                    id="contact-submit-reset"  
                    onClick={(event)=> this.resetpassword(event)}>
                RESET 
                </button>
                    </fieldset>
                </div>

                    


                     
            
                
            
                       
                       {/*


                       
                {
                    this.state.show?
                <label style={{color:'red',fontSize:"20px"}}>{this.state.show}</label>:null
                }
              </div>
               
               <div className="row block lblock">
               <FormFields
                  formdata={this.state.formdata.email}
                  id={'email'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div>
                
                <div className="row block lblock">
                  <FormFields
                  formdata={this.state.formdata.password}
                  id={'password'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div>
                  
        <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6"> */}
            {/* <button className="contact-submit" style={{padding:"10px"}}onClick={(event)=> this.submitform(event)}>
                     Login
                </button> */}
                {/* <Button variant="outlined" color="primary" id="forgot"  style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
            LOGIN
                </Button>
                </div> */}
                 {/* <button id="forgot"  style={{padding:"10px"}} onClick={(event)=> this.resetpassword(event)}>
               
                </button> */}
                
            {/* <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <Button variant="outlined" color="primary"  id="forgot"  style={{padding:"10px"}} onClick={(event)=> this.resetpassword(event)}>
                Forgot Password
                </Button>
                </div>
                </div> */}
               </form>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      user:state.member
    }
      
}
export default connect(mapStateToProps)(Login);