import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import FormFields from '../utils/formfields';
import {update,validform, generatedata} from '../utils/formtions'
import {connect} from 'react-redux'
import {registeruser} from '../actions/memberactions'
import hexa from '../../images/logo.png'
import Pic from '../utils/pic';

class Register extends Component {
    state={
        loading:false,
        formSuccess:false,
        formError:false,
        formdata:{
        name: {
            element:'input',
            value:'',
            config:{
                name:'name',
                placeholder:'Enter your name here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        },
        lastname: {
            element:'input',
            value:'',
            config:{
                name:'lastname',
                placeholder:'Enter your Last name here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        },
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
                placeholder:'Enter password here',
                type:'password'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        },
        confirmpassword: {
            element:'input',
            value:'',
            config:{
                name:'Confirm Password',
                placeholder:'ReEnter your Password here',
                type:'password'
            },
            validation:{
                required:true,
                confirm: 'password'
            },
            valid:false,
            validationMessage:'',
            label:true
        },
        role: {
            element:'radio',
            value:0,
            config:{
                name:'admin',
                placeholder:'Admin here',
                type:'admin'
            },
            validation:{
                required:false
            },
            valid:true,
            validationMessage:'',
            label:false
        },
        
    },
    value:0
}

updateform=(element)=>{
    const newdata=update(element,this.state.formdata,'register')
    this.setState({
        formdata:newdata,
    })
}

submitform=(event)=>{
    console.log("Dfdf")
event.preventDefault();
const isformvalid=validform(this.state.formdata,'register')
const data=generatedata(this.state.formdata,'register')
console.log(data)
console.log(isformvalid)
if(isformvalid){
    console.log("lll")
    this.props.dispatch(registeruser(data)).then((response)=>{
        
        if(response.payload.success){
         console.log('hurray')
            this.setState({
                formSuccess:true,
                formError:false,
                loading:true
            })
            setTimeout(()=>{
            this.props.history.push('/login')
            console.log('dffdfd')
            },5000)}
            else{
                this.setState({
                    formError:true
                })
                console.log('sddsd')
            }
        }
    )}
}

onrchange=(e)=>{
    console.log(this.state.formdata.role.value)
    const newformdata=this.state.formdata

    newformdata['role'].value=e.target.value
    this.setState({
        formdata:newformdata,    
    })

    this.setState({
      value:e.target.value
    })
    console.log(this.state)
}
    render() {
        return (
            this.state.loading?
        <center> <CircularProgress thickness={5} size={15} style={{color:'grey',marginBottom:"500px"}} />  </center>
            :
            <div className="containers">
                
                <form id="contact" onSubmit={(event)=>{
                  this.submitform(event)
                }}>


                <div className="reg_row_img">
                        <div className="reg_col">
                        <img className="reg_img" src={hexa} alt="EduStream"/>
                        </div>
                         
                </div>
                <div className="reg_row">
                        <div className="reg_col">
                            <FormFields
                                formdata={this.state.formdata.name}
                                id={'name'}
                                change={(event)=>{this.updateform(event)}}
                            />
                         </div>
                         <div className="reg_col">
                            <FormFields
                                formdata={this.state.formdata.lastname}
                                id={'lastname'}
                                change={(event)=>{this.updateform(event)}}
                            />
                         
                         </div>
                </div>
                <div className="reg_row ">
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
                <div className="reg_row">
                <div className="reg_col">
                <FormFields
                        formdata={this.state.formdata.confirmpassword}
                        id={'confirmpassword'}
                        change={(event)=>{this.updateform(event)}}
                    />
                </div>
                    
                </div>

                <div className="row">
                   <label style={{fontFamily:'algerian'}}> ARE YOU AN ADMIN ? </label> 
           <div className="row">
           <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <input
                type="radio"
                value="1"
                checked={this.state.value === 1}
                onChange={(e)=>this.onrchange(e)}/>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <label>YES</label>
                </div>
                </div>
                
                <div className="row">
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">

                <input
                type="radio"
                value="0"
                checked={this.state.value === 0}
                onChange={(e)=>this.onrchange(e)}/>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <label>NO</label>
                </div>
                </div>
                </div>
 
                <div className="reg_row_img">
                <div className="reg_col">
                <fieldset>
                    <button id="contact-submit" style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                        Create an account
                    </button>

                    </fieldset>
                </div>
                    
                    
                </div>
            
                {/* <div><Pic image={hexa} text="EduStream"/></div> */}



                {/* <div className="block row">
               <FormFields
                  formdata={this.state.formdata.name}
                  id={'name'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>
               <div className="block row">
               <FormFields
                  formdata={this.state.formdata.lastname}
                  id={'lastname'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>
               <div className="block row">
               <FormFields
                  formdata={this.state.formdata.email}
                  id={'email'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>
                
                <div className="block row">
                  <FormFields
                  formdata={this.state.formdata.password}
                  id={'password'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>

                <div className="block row">
                <FormFields
                  formdata={this.state.formdata.confirmpassword}
                  id={'confirmpassword'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div>

                <br></br>
                */}
                 
{/* 
                <br></br>
                <br></br>
                        <center>  
              <fieldset>
                 <button id="contact-submit" style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                     Create an account
                </button>
                </fieldset>
                </center> */}
                </form>
                </div> 

               
                
        );
    }
}

export default connect()(Register);

