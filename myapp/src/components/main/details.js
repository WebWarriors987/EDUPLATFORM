import React, { Component } from 'react';
import {connect} from 'react-redux'
import {update,validform, generatedata} from '../utils/formtions'
import {adddetails}  from '../actions/recordactions'
import FormFields from '../utils/formfields';
import FileUpload from '../utils/fileupload'
class Details extends Component {

    state={
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
            valid:true,
            validationMessage:'',
            label:true
        },
        dateofbirth: {
            element:'input',
            value:'',
            config:{
                name:'DATE OF BIRTH',
                placeholder:'Enter your Date of Birth here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:true,
            validationMessage:'',
            label:true
        },
        address: {
            element:'input',
            value:'',
            config:{
                name:'ADDRESS',
                placeholder:'Enter your Address here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:true,
            validationMessage:'',
            label:true
        },
        phone: {
            element:'input',
            value:'',
            config:{
                name:'CONTACT NUMBER',
                placeholder:'Enter your contact number here',
                type:'number'
            },
            validation:{
                required:false
            },
            valid:false,
            validationMessage:'',
            label:true
        },
        workplace: {
            element:'input',
            value:'',
            config:{
                name:'Place You Work',
                placeholder:'Enter the name of the place you work',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:true,
            validationMessage:'',
            label:true
        },
        currentdegree: {
            element:'input',
            value:'',
            config:{
                name:'Current qualification',
                placeholder:'Enter your current qualification here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:true,
            validationMessage:'',
            label:true
        },
        
        additional: {
            element:'textarea',
            value:'',
            config:{
                name:'Additional Description',
               type:'text',
               placeholder:'Enter additional description here',  
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
        images:{
            value:[],
            validation:{
                required:false
            },
            valid: false,
            touched: false,
            validationMessage:'',
            label:false
        }
    }
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
    // console.log(isformvalid)
    const data=generatedata(this.state.formdata,'register')
    // console.log(this.props.user.member)
    if(true){
        this.props.dispatch(adddetails(data)).then((response)=>{
             console.log('hurray')
                this.setState({
                    formSuccess:true,
                    formError:false
                })
                
            setTimeout(()=>{
                this.props.history.push('/show')
                // console.log('dffdfd')
                },5000)
            }
        )}
    }
imageHandler=(images)=>{
    // console.log(images)
    const newFormData={
        ...this.state.formdata
    }
      newFormData['images'].value=images;
      newFormData['images'].valid=true
      this.setState({
          formData:newFormData
      })

    //   console.log(this.state.formdata.images)
}

    render() {
        // console.log(this.props)
        return (
            <div className="container">
            <div className='add'>
                <div className="headtitle row">
                    <h2 className="neon" style={{fontFamily:"sans serif"}}>ADD ALUMNI INFORMATION</h2>
                </div>
              <div className="each">
              <FileUpload
                    imageHandler={(images)=>this.imageHandler(images)}
                    reset={this.state.formSuccess}/>
              </div>
            <div className="row"></div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="jumbotron">

            <div className="row">
             <div className="each">
               <FormFields
                  formdata={this.state.formdata.name}
                  id={'name'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>
            
            <div className="row">
             <div className="each">
               <FormFields
                  formdata={this.state.formdata.dateofbirth}
                  id={'dateofbirth'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>
            
            <div className="row">
             <div className="each">
               <FormFields
                  formdata={this.state.formdata.address}
                  id={'address'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>

            
            <div className="row">
             <div className="each">
               <FormFields
                  formdata={this.state.formdata.phone}
                  id={'phone'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>

            <div className="row">
            <div className="each">
               <FormFields
                  formdata={this.state.formdata.email}
                  id={'email'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>
            
            <div className="row">
            <div className="each">
               <FormFields
                  formdata={this.state.formdata.workplace}
                  id={'workplace'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>
            
            <div className="row">
            <div className="each">
               <FormFields
                  formdata={this.state.formdata.currentdegree}
                  id={'currentdegree'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>
         
            
            <div className="row">
            <div className="each">
               <FormFields
                  formdata={this.state.formdata.additional}
                  id={'additional'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>
          
          
            <div className="block row">
          <center>   
            <button style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                SUBMIT THIS INFORMATION
             </button>
                </center>
                 </div>
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Details);